/**
 * OpenRouter AI Gateway Integration
 *
 * Primary Model: Claude 3.5 Sonnet
 * Fallbacks: GPT-4o, Gemini Pro 1.5
 *
 * Used for:
 * - Document generation
 * - Content creation (Market Me)
 * - Intent analysis
 * - Mail classification
 * - MY GPT assistant
 */

interface OpenRouterMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

interface OpenRouterRequest {
  model: string
  messages: OpenRouterMessage[]
  temperature?: number
  max_tokens?: number
  route?: string
}

export async function generateWithAI(
  prompt: string,
  systemPrompt?: string,
  options?: {
    temperature?: number
    maxTokens?: number
  }
): Promise<string> {
  const messages: OpenRouterMessage[] = []

  if (systemPrompt) {
    messages.push({
      role: 'system',
      content: systemPrompt,
    })
  }

  messages.push({
    role: 'user',
    content: prompt,
  })

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'HTTP-Referer': process.env.NEXT_PUBLIC_OPENROUTER_REFERER || 'https://aurumadvisement.com',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'anthropic/claude-3.5-sonnet:beta',
      messages,
      temperature: options?.temperature ?? 0.7,
      max_tokens: options?.maxTokens ?? 4000,
      route: 'fallback', // Enable automatic fallbacks
    } as OpenRouterRequest),
  })

  if (!response.ok) {
    throw new Error(`OpenRouter API error: ${response.statusText}`)
  }

  const data = await response.json()
  return data.choices[0].message.content
}

export async function generateDocument(
  documentType: string,
  entityData: Record<string, any>
): Promise<string> {
  const systemPrompt = `You are an expert legal document generator for business entities. Generate professional, legally compliant documents that follow ${entityData.state} state requirements.`

  const prompt = `Generate a ${documentType} for ${entityData.name}, a ${entityData.entity_type} in ${entityData.state}.

Entity Details:
${JSON.stringify(entityData, null, 2)}

Requirements:
- Follow ${entityData.state} legal requirements for ${entityData.entity_type}
- Use formal legal language
- Include all mandatory clauses
- Format as a professional legal document

Output the complete document in Markdown format.`

  return generateWithAI(prompt, systemPrompt, { temperature: 0.3 })
}
