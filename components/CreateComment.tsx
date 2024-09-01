"use client";

import React, { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateCommentMutation } from "@/app/services/postSlice"; 
import { createClient } from "@/utils/supabase/client";

const formSchema = z.object({
  content: z.string().min(1, "Content is required"),
  post_id: z.number().min(1, "Post ID is required"), 
});

interface CommentProps {
  name: string;
  position: string;
  postId: number; 
}

const Comment: React.FC<CommentProps> = ({ name, position, postId }) => {
  const supabase = createClient();

  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
      } else {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, [supabase]);

  const [createComment, { isLoading }] = useCreateCommentMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
      post_id: postId,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user?.id) {
      console.error("User ID is not available.");
      return;
    }

    const commentData = {
      content: values.content,
      user_id: user.id,
      post_id: values.post_id,
    };

    try {
      await createComment(commentData).unwrap(); 
      console.log("Comment created successfully.");
      form.reset(); 
    } catch (error) {
      console.error("Failed to create comment:", error);
    }
  };

  const handleCancel = () => {
    form.reset();
  };

  return (
    <div className="border border-text rounded-lg p-4 w-auto mx-auto">
      <div className="flex items-center mb-4">
        <img
          src="/images/Avatar.png"
          alt="User profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-4">
          <div className="font-semibold text-large text-common">
            {user?.user_metadata.name}
          </div>
          <div className="text-detail text-grey">{position}</div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="What's on your mind..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end space-x-2">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Posting..." : "Post Comment"}
            </Button>
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Comment;