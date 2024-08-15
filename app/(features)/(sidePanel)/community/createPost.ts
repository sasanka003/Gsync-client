"use server";

import { authenticatedFetch } from "@/utils/authenticatedFetch";

export async function handlePostCreation(title: string, content: string) {
    try {
      const response = await authenticatedFetch("http://127.0.0.1:8000/post", {
        method: "POST",
        body: JSON.stringify({
          title,
          content,
          post_type: "Question",
          user_id: "a36f6cc1-dd67-4855-9b40-cf741aa6be84",
          parent_post_id: null,
          file: null,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create post");
      }
      console.log("success")
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }