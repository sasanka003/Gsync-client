"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { handlePostCreation } from "@/app/(features)/(sidePanel)/community/createPost";

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  picture: z.any().optional(),
});

type PostFormValues = z.infer<typeof postSchema>;

interface PostCard3Props {
  name: string;
  position: string;
  date: string;
}

const PostCard3: React.FC<PostCard3Props> = ({ name, position, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = async (data: PostFormValues) => {
    await handlePostCreation(data.title, data.content);
    reset();
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <textarea
            {...register("title")}
            className="w-full p-2 border rounded-lg"
            placeholder="Title..."
            rows={1}
          />
          {errors.title && (
            <p className="text-destructive text-sm">{errors.title.message}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            {...register("content")}
            className="w-full p-2 border rounded-lg"
            placeholder="What's on your mind..."
            rows={6}
          />
          {errors.content && (
            <p className="text-destructive text-sm">{errors.content.message}</p>
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center w-[350px]">
            <div className="w-[200px]">
              <Label htmlFor="picture">Upload Picture</Label>
            </div>
            <Input id="picture" type="file" {...register("picture")} />
            {errors.picture && (
              <p className="text-destructive text-sm">
                {errors.picture?.message?.toString()}
              </p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              type="submit"
              className="py-2 rounded-lg bg-text text-fill w-[64px] dark:text-common"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Posting..." : "Post"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="px-4 py-2 rounded-lg border border-text text-text"
              onClick={() => reset()}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostCard3;
