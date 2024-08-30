"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useCreatePostMutation } from "@/app/services/postSlice";
import { createClient } from "@/utils/supabase/client";
interface PostCard3Props {
  name: string;
  position: string;
  date: string;
}

const PostCard3: React.FC<PostCard3Props> = ({ name, position, date }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const supabase = createClient();
  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("Title and content are required");
      return;
    }

    const postData = {
      title,
      content,
      post_type: "Question",
      user_id: "fd81d387-abc6-4c2f-bc45-55c5e98192d8",
      parent_post_id: "0",
      file: file || undefined,
    };

    try {
      await createPost(postData).unwrap();
      // Reset form after successful post
      setTitle("");
      setContent("");
      setFile(null);
    } catch (error) {
      console.error("Failed to create post:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="border border-text rounded-lg p-4 w-[712px] mx-auto">
      <div className="flex items-center mb-4">
        <img
          src="/images/Avatar.png"
          alt="User profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-4">
          <div className="font-semibold text-large text-common">{name}</div>
          <div className="text-detail text-grey">{position}</div>
        </div>
        <div className="ml-auto text-sm text-grey">{date}</div>
      </div>
      <textarea
        className="w-full p-2 border rounded-lg"
        placeholder="Title..."
        rows={1}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full p-2 border rounded-lg"
        placeholder="What's on your mind..."
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center w-[220px]">
          <Label htmlFor="picture"></Label>
          <Input
            id="picture"
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="py-2 rounded-lg bg-text text-fill w-[64px] dark:text-common"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Posting..." : "Post"}
          </button>
          <button
            className="px-4 py-2 rounded-lg border border-text text-text"
            onClick={() => {
              setTitle("");
              setContent("");
              setFile(null);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard3;
