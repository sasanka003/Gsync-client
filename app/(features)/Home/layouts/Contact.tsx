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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  Name: z.string().min(1, "Name is required"),
  Email: z.string().min(1, "Email is required"),
  enterprise: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      Name: "",
      Email: "",
      enterprise: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    form.reset();
  };

  return (
    <div className="max-w-[270px] md:max-w-[560px] lg:max-w-[960px] mx-auto p-4">
      <div className="max-w-[235px] md:max-w-[560px] lg:max-w-[560px] mx-auto">
        <p className="text-h2 font-bold text-center md:text-h1 md:text-common mb-1">
          Contact
        </p>
        <p className="text-center text-subtle md:text-p lg:text-p text-text mb-10 md:whitespace-nowrap lg:whitespace-nowrap">
          We'd love to talk about your plans & to assist you in the best way
          possible.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="md:flex md:space-x-10 lg:flex lg:space-x-20 sm:flex-row">
            <div className="flex-1 space-y-2 min-w-[262px] md:min-w-[262px] lg:min-w-[440px] lg:space-y-4">
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-h4 text-common">
                      Name*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="h-10"
                        placeholder="your name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-h4 text-common">
                      Email*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="h-10"
                        placeholder="your Email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="enterprise"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-h4 text-common">
                      Enterprise/Organization*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="h-10"
                        placeholder="your enterprise/ organization name (optional)"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="lg:flex-1 space-y-2 min-w-[262px] md:min-w-[262px] lg:space-y-4 lg:min-w-[440px] mt-2 md:mt-0 lg:mt-0">
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-h4 text-common">
                      Subject*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="h-10"
                        placeholder="your subject"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-h4 text-common">
                      Message*
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="min-h-[72px]"
                        placeholder="Tell us how we could assist you..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex lg:justify-start space-x-4 justify-center mt-4">
                <Button type="submit">Send Message</Button>
                <Button
                  type="button"
                  className="text-body-medium"
                  variant="outline"
                  onClick={() => form.reset()}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
