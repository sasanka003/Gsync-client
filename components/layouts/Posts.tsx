import React from "react";
import PostCard from "../PostCard";
import PostCard3 from "../PostCard3";

import PostCard2 from "../PostCard2";
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
      <PostCard3
        name="Waruna Parackkrama"
        position="Small-Scale Gardener"
        date="12th December 2024, 12:30AM"
      />
      <div>
        <PostCard2
          title="White dust on tomato leaves"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          author="Waruna Parackkrama"
          image1Url="/images/Avatar.png"
          image2Url="/images/plant.png"
        />
      </div>
    </div>
  );
};

export default Posts;
