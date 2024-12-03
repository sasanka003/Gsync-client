"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/components/dashboard/content-layout";
import { useGetAllPostsQuery } from "@/app/services/postSlice";
import { error } from "console";

const schema = z
  .object({
    displayName: z.string().min(1, "Display Name is required"),
    profilecategory: z.string().min(1, "Profile Category is required"),
    username: z.string().min(1, "Username is required"),
    contactNumber: z.string().min(1, "Contact number is required"),
    currentPassword: z.string().min(1, "Current Password is required"),
    newPassword: z
      .string()
      .min(8, "New Password must be at least 8 characters"),
    confirmNewPassword: z.string().min(1, "Confirm New Password is required"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

const ProfileForm = () => {
  const { data: post, isLoading, isError, error } = useGetAllPostsQuery();
  !isError ? console.log(post) : console.log(error);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      displayName: "",
      profilecategory: "",
      username: "",
      email: "",
      contactNumber: "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    form.reset();
  };

  return (
    <ContentLayout title="Profile">
      <div className="w-auto mx-auto p-8">
        <h1 className="text-h3 mb-6">Public Profile</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex items-center mb-4">
              <img
                src="/images/gsync.png"
                alt="Profile Picture"
                className="w-20 h-20 border rounded-full mr-4"
              />
              <div>
                <div className="text-p-ui-medium text-text mb-1">
                  Profile Picture
                </div>
                <div className="space-x-3">
                  <button className="text-p-ui text-text underline">
                    Update
                  </button>
                  <button className="text-destructive ml-2">Remove</button>
                </div>
                <p className="text-muted-foreground">Maximum image size 2MB</p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 space-x-10">
                <div className="w-[504px]">
                  <FormField
                    control={form.control}
                    name="displayName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <div className="text-p-ui-medium text-text">
                            Username
                          </div>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="GsyncAdmin1" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="text-body text-grey">*Required</div>
                </div>
                <div className="w-[504px]">
                  <FormField
                    control={form.control}
                    name="profilecategory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <div className="text-p-ui-medium text-text">
                            Profile Category
                          </div>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="System Administrator" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 space-x-10">
              <div className="flex flex-col space-y-4 w-[504px]">
                <div className="text-h3">User Credentials</div>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <div className="text-p-ui-medium text-text">
                          Username{" "}
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="JohnD" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={() => (
                      <FormItem>
                        <FormLabel>
                          <div className="text-p-ui-medium text-text">
                            Email{" "}
                          </div>
                        </FormLabel>
                        <FormControl>
                          <Input value="gsync2024@outlook.com" readOnly />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="text-body text-grey">
                    Your Email is verified
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <div className="text-p-ui-medium text-text">
                          Contact Number{" "}
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="+94 77 123 4567" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col space-y-4 w-[504px]">
                <div className="text-h3">Change Password</div>
                <FormField
                  control={form.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <div className="text-p-ui-medium text-text">
                          Current Password{" "}
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          {...field}
                          placeholder="Enter current password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <div className="text-p-ui-medium text-text">
                            New Password{" "}
                          </div>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            {...field}
                            placeholder="Enter new password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="text-body text-grey">
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="confirmNewPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <div className="text-p-ui-medium text-text">
                          Confirm New Password{" "}
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          {...field}
                          placeholder="Confirm new password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <Button type="submit">Save Changes</Button>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
              >
                Cancel Changes
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </ContentLayout>
  );
};

export default ProfileForm;
