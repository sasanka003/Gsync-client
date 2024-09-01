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

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  address: z.string().min(1, "Address is required"),
  contactNumber: z
    .string()
    .min(1, "Contact Number is required")
    .regex(/^\+?\d{10,15}$/, "Invalid contact number"),
});

const GardenerForm = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "Waruna Parackkrama",
      email: "wparackkrama@gmail.com",
      address: "221/B, Baker St, Colombo 07",
      contactNumber: "+94 77 123 4567",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    form.reset();
  };

  return (
    <div className="w-[500px] mx-auto p-4 border rounded-md">
      <h1 className="text-h3 mb-6">Edit Gardener</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Waruna Parackkrama" />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="wparackkrama@gmail.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="221/B, Baker St, Colombo 07" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="+94 77 123 4567" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end space-x-4">
            <Button type="submit">Edit Gardener</Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default GardenerForm;
