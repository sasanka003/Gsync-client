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
import { useEditGardenerMutation } from "@/app/services/systemAdminSlice";
import { useToast } from "@/components/ui/use-toast";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string(),
});

const GardenerForm = ({
  gardener,
  closePopup,
}: {
  gardener: any;
  closePopup: () => void;
}) => {
  const [editGardener] = useEditGardenerMutation();

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: gardener?.name || "",
      email: gardener?.email || "",
      phone: gardener?.phone || "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      await editGardener({
        user_id: gardener.user_id,
        name: data.name,
        email: data.email,
        phone: data.phone,
      }).unwrap();

      toast({
        title: "Success!",
        description: "Gardener has been edited successfully.",
      });

      form.reset();
      closePopup(); // Close the popup
    } catch (error) {
      console.error("Failed to edit gardener:", error);
      toast({
        title: "Error",
        description: "Failed to edit gardener.",
        variant: "destructive",
      });
    }
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
                  <Input {...field} placeholder="" />
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
                  <Input {...field} placeholder="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end space-x-4">
            <Button type="submit">Edit Gardener</Button>
            <Button variant="outline" onClick={closePopup}>
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default GardenerForm;
