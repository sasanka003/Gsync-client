"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { authenticatedFetch } from "@/utils/authenticatedFetch";
import { handlePostCreation } from "@/app/(features)/(sidePanel)/community/createPost";
interface PostCard3Props {
  name: string;
  position: string;
  date: string;
}

const PostCard3: React.FC<PostCard3Props> = ({ name, position, date }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      />
      <textarea
        className="w-full p-2 border rounded-lg"
        placeholder="What's on your mind..."
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center w-[220px]">
          <Label htmlFor="picture"></Label>
          <Input id="picture" type="file" />
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="py-2 rounded-lg bg-text text-fill w-[64px] dark:text-common"
            onClick={async () => {
              setIsLoading(true);
              await handlePostCreation(title, content);
              setTitle("");
              setContent("");
              setIsLoading(false);
            }}
            disabled={isLoading}
          >
            {isLoading ? "Posting..." : "Post"}
          </button>
          <button className="px-4 py-2 rounded-lg border border-text text-text">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard3;
