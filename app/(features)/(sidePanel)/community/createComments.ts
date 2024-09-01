"use server";

import { authenticatedFetch } from "@/utils/authenticatedFetch";

export async function handleCommentCreation(content: string, postId: number, userId: string) {
  try {
    const response = await authenticatedFetch("http://127.0.0.1:8000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        post_id: postId,
        user_id: userId,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create comment");
    }

    console.log("Comment created successfully");
  } catch (error) {
    console.error("Error creating comment:", error);
  }
}
