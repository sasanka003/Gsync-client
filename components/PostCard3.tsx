import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface PostCard3Props {
    name: string;
    position: string;
    date: string;
  }

  const PostCard3: React.FC<PostCard3Props> = ({ name,position,date }) =>{
  return (
    <div className="border border-text rounded-lg p-4 w-[712px] mx-auto">
      <div className="flex items-center mb-4">
        <img
          src="/images/Avatar.png"
          alt="User profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-4">
          <div className="font-semibold text-large">{name}</div>
          <div className="text-detail text-grey">{position}</div>
        </div>
        <div className="ml-auto text-sm text-grey">
            {date}
        </div>
      </div>
      <textarea
        className="w-full p-2 border rounded-lg"
        placeholder="What's on your mind..."
        rows={3}
      />
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center w-[220px]">
          <Label htmlFor="picture"></Label>
          <Input id="picture" type="file" />
        </div>
        <div className="flex items-center space-x-2">
          <button className="py-2 rounded-lg bg-text text-fill w-[64px]">
            Post
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
