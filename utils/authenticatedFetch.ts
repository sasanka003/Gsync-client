import { createClient } from '@/utils/supabase/server'

export async function authenticatedFetch(url: string, options: RequestInit = {}) {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    throw new Error('No active session')
  }

  const authToken = session.access_token

  const defaultOptions: RequestInit = {
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  }

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  }

  return fetch(url, mergedOptions)
}