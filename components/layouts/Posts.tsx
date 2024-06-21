import React from "react";
import PostCard from "../PostCard";
import { Card } from "../ui/card";

const Plans: React.FC = () => {
  return (
    <Card className="p-4 mb-4 w-auto max-w-[700px]">
    <div className="text-h2 mb-2">Your Posts</div>
    <div className="flex-col">
    <PostCard
    title="White dust on tomato leaves"
    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    author="Waruna Parackkrama"
    date="12th December 2024, 12:30AM"
    likes={999}
    comments={999}
  />

<PostCard
    title="White dust on tomato leaves"
    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    author="Waruna Parackkrama"
    date="12th December 2024, 12:30AM"
    likes={999}
    comments={999}
  />
  </div>

  <div className="text-h2 mb-2">Popular Posts</div>
    <div className="flex-col">
    <PostCard
    title="White dust on tomato leaves"
    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    author="Waruna Parackkrama"
    date="12th December 2024, 12:30AM"
    likes={999}
    comments={999}
  />

<PostCard
    title="White dust on tomato leaves"
    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
    author="Waruna Parackkrama"
    date="12th December 2024, 12:30AM"
    likes={999}
    comments={999}
  />
  </div>
  </Card>
  );
};

export default Plans;