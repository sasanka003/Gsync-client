"use client";

import React, { useState } from "react";
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
import { EyeOff, Eye } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";

const schema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    username: z.string().min(1, "Username is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });

const CreateAccountForm = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setIsLoading] = useState(false);

  const router = useRouter();

  const supabase = createClient();

  async function onSubmit(values: z.infer<typeof schema>) {
    setIsLoading(true);
    console.log(values);
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          name: values.name,
          username: values.username,
        },
        emailRedirectTo: location.origin + "/auth/confirm",
      },
    });
    console.log(data);
    if (error) {
      setIsLoading(false);
      return toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
    setIsLoading(false);
    toast({
      title: "Account created",
      description: "Your account has been created successfully",
    });
    router.push("sign-up/verify");
  }

  const handleLoginWithOAuth = (provider: "google" | "apple" | "facebook") => {
    const supabase = createClient();

    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + "/auth/confirm",
      },
    });
  };

  return (
    <div className="lg:w-[715px] md:w-[664px] mx-auto p-4">
      <div className="mb-5">
        <h1 className="text-h2 font-bold md:text-h1 md:font-bold text-center text-common">
          Create an Account
        </h1>
        <div className="text-subtle text-center text-accent-foreground md:text-p">
          Start today with creating your free account
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="text-subtle-medium md:text-p text-common">
                    Name*
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your name (John Doe)"
                    className="placeholder:text-p"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="text-subtle-medium md:text-p text-common">
                    Email*{" "}
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your email (yourname@example.com)"
                    className="placeholder:text-p"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="text-subtle-medium md:text-p text-common">
                    Username*{" "}
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your username (JohnD)"
                    className="placeholder:text-p"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center justify-between">
                    <div className="text-subtle-medium md:text-p text-common">
                      Create Password*
                    </div>
                    <button
                      type="button"
                      className="mr-1 flex items-center text-common"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                      <span className="ml-1 text-common">
                        {showPassword ? "Hide" : "Show"}
                      </span>
                    </button>
                  </div>
                </FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="*********"
                      className="placeholder:text-p"
                    />
                  </div>
                </FormControl>
                <div className="text-body text-muted-foreground mt-1">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center justify-between">
                    <div className="text-subtle-medium md:text-p text-common">
                      Confirm Password*
                    </div>
                  </div>
                </FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="*********"
                      className="placeholder:text-p"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <span className="text-common">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-text underline">
                Terms & Conditions & Privacy Policy.
              </a>
            </span>
          </div>
          <div>
            <Button
              type="submit"
              className="w-full text-body-medium text-fill dark:text-common mt-4"
            >
              {loading ? (
                <span className="flex justify-center items-center gap-2">
                  <BeatLoader size="5" color="#ffffff" />
                  <span className="ml-2">Creating Account..</span>
                </span>
              ) : (
                "Create Account"
              )}
            </Button>
          </div>
        </form>
      </Form>
      <div className="mt-8 text-center">
        <p className="mb-4">Or Continue with</p>
        <div className="flex justify-center space-x-6 mt-2">
          <button
            className="flex items-center px-4 py-2 bg-white rounded text-suble-semibold lg:w-[220px] gap-2"
            onClick={() => handleLoginWithOAuth("google")}
          >
            <img
              src="/images/GoogleIcon.png"
              alt="Google icon"
              className="w-6 h-6"
            />
            <span className="ml-2 inline lg:block md:hidden sm:hidden dark:text-fill">
              Sign in with Google
            </span>
          </button>
          <button
            className="flex items-center px-4 py-2 bg-black rounded text-fill text-suble-semibold lg:w-[220px] gap-2"
            onClick={() => handleLoginWithOAuth("apple")}
          >
            <img
              src="/images/AppleIcon.png"
              alt="Apple icon"
              className="w-6 h-6"
            />
            <span className="ml-2 inline lg:block md:hidden sm:hidden text-fill dark:text-common">
              Sign in with Apple
            </span>
          </button>
          <button
            className="flex items-center px-4 py-2 bg-[#1877F2] rounded text-suble-semibold lg:w-[220px] gap-2 text-common"
            onClick={() => handleLoginWithOAuth("facebook")}
          >
            <img
              src="/images/FacebookIcon.png"
              alt="Facebook icon"
              className="w-6 h-6"
            />
            <span className="ml-2 inline lg:block md:hidden sm:hidden text-fill dark:text-common">
              Sign in with Facebook
            </span>
          </button>
        </div>
        <p className="mt-6 text-common">
          Already have an account?{" "}
          <a href="/login" className="text-accent-foreground underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default CreateAccountForm;
