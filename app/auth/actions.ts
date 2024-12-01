"use client"

import { createClient } from "@/utils/supabase/client"

export async function signout() {
  const supabase = createClient()
  
  try {
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      console.error("Error signing out:", error)
      return { error: error.message }
    }
    
    return { success: true }
  } catch (error) {
    console.error("Unexpected error during signout:", error)
    return { error: "An unexpected error occurred" }
  }
}