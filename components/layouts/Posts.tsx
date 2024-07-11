import React from "react";
import PostCard from "../PostCard";

const Posts: React.FC = () => {
  return (
    <div className="p-4 mb-4 w-auto max-w-[700px]">
      <PostCard
        title="White dust on tomato leaves"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        author="Waruna Parackkrama"
      />
      <PostCard
        title="White dust on tomato leaves"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        author="Waruna Parackkrama"
      />
    </div>
  );
};

export default Posts;
