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
import { useGetPlantationDetailsQuery } from "@/app/services/systemAdminSlice";

const schema = z.object({
  plantationLength: z.string().min(1, "Plantation length is required"),
  plantationWidth: z.string().min(1, "Plantation width is required"),
  additionalComments: z.string().optional(),
});

const PlantationForm = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      plantationLength: "",
      plantationWidth: "",
      additionalComments: "",
    },
  });

  const {
    data: plantations,
    isLoading,
    isError,
  } = useGetPlantationDetailsQuery();

  const displayedPlantations = plantations || [];

  const onSubmit = (data: any) => {
    console.log(data);
    form.reset();
  };

  return (
    <div className="w-[992px] mx-auto p-4">
      {displayedPlantations.map((plantation) => (
        <div key={plantation.plantation_id}>
          <div className="flex justify-start items-center text-h2">
            Plantation ID :{" "}
            <div className="text-h2 text-grey">
              {plantation.plantation_id}
            </div>
          </div>
          <div className="flex justify-start items-center text-p-ui-medium">
            Requested by{" "}
            <span className="text-grey text-p-ui-medium ml-2">
              {plantation.user_id}
            </span>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-28 mt-6">
                <div className="max-w-[440px]">
                  <div className="space-y-4">
                    <div className="text-h4 text-common">General</div>
                    <FormItem>
                      <FormLabel>
                        <div className="text-p text-common">
                          Plantation Name
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input
                          value={plantation.name}
                          readOnly
                          className="bg-gray-200 text-p text-common"
                        />
                      </FormControl>
                    </FormItem>

                    <FormItem>
                      <FormLabel>
                        <div className="text-p text-common">
                          Plantation Type
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input
                          value={plantation.type}
                          readOnly
                          className="bg-gray-200 text-p text-common"
                        />
                      </FormControl>
                    </FormItem>

                    <FormItem>
                      <FormLabel>
                        <div className="text-p text-common">
                          Plant Type
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input
                          value="Tomato"
                          readOnly
                          className="bg-gray-200 text-p"
                        />
                      </FormControl>
                    </FormItem>
                  </div>
                </div>

                <div className="max-w-[440px]">
                  <div className="space-y-4">
                    <div className="text-h4 text-common">Location</div>
                    <FormItem>
                      <FormLabel>
                        <div className="text-p text-common">
                          City
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input
                          value={plantation.city}
                          readOnly
                          className="bg-gray-200 text-p"
                        />
                      </FormControl>
                    </FormItem>

                    <FormItem>
                      <FormLabel>
                        <div className="text-p text-common">
                         Province
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input
                          value={plantation.province}
                          readOnly
                          className="bg-gray-200 text-p"
                        />
                      </FormControl>
                    </FormItem>

                    <FormItem>
                      <FormLabel>
                        <div className="text-p text-common">
                          Country
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input
                          value={plantation.country}
                          readOnly
                          className="bg-gray-200 text-p"
                        />
                      </FormControl>
                    </FormItem>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-28 mt-6">
                <div className="max-w-[440px]">
                  <div className="space-y-4">
                    <div className="text-h4 text-common">Plantation</div>
                    <FormField
                      control={form.control}
                      name="plantationLength"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            <div className="text-p text-common">
                              Plantation Length
                            </div>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder={String(plantation.plantation_length)}
                              className="text-p"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="plantationWidth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            <div className="text-p text-common">
                              Plantation Width
                            </div>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder={String(plantation.plantation_width)}
                              className="text-p"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
               
                  </div>
                  <div className="mt-20 flex mr-1">
                    <div className="flex-1">
                      <div className="text-lead text-common">Total Price</div>
                      <div className="text-h4 font-semibold text-green">
                        20 USD*
                      </div>
                    </div>
                    <div className="flex-1.5 text-grey">
                      <div>*Total Price is calculated according to</div>
                      <div>
                        <a href="#" className="text-text underline">
                          Gsync pricing regulations
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-[440px]">
                  <div className="space-y-4">
                    <div className="text-h4 text-common">Verification</div>
                    <FormField
                      control={form.control}
                      name="additionalComments"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            <div className="text-p text-common">
                              Additional Comments
                            </div>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your additional comments..."
                              className="text-p"
                              style={{ width: "100%", height: "100px" }} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="text-p text-grey mb-4 mt-4">
                    *After approving the plantation request, an email with
                    attached link for the payment will be sent to the relevant
                    user.
                  </div>

                  <div className="text-center mt-6 flex gap-4">
                    <Button
                      type="submit"
                      className="block w-full text-body-medium text-fill"
                    >
                      Approve Plantation Request
                    </Button>
                    <Button
                      type="submit"
                      className="block w-full text-body-medium bg-fill border border-text"
                    >
                      Decline Plantation Request
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </div>
      ))}
    </div>
  );
};

export default PlantationForm;
