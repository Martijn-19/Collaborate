"use client";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { createProject } from "@/convex/projects";
import { LoadingButton } from "@/components/loading-button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  id: z.number(),
  name: z.string().min(1).max(250),
  description: z.string().min(1).max(25000),
  phases: z.array(z.number()),
  customerId: z.number(),
  isCompleted: z.boolean(),
});

export default function CreateProjectForm({
  onUpload,
}: {
  onUpload: () => void;
}) {
  const createProject = useMutation(api.projects.createProject);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: 1,
      name: "project",
      description: "project",
      phases: [1,2,3],
      customerId: 1,
      isCompleted: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createProject(values);
    onUpload();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="project name ...." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description...." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LoadingButton
          isLoading={form.formState.isSubmitting}
          loadingText="Uploading..."
        >
          Create
        </LoadingButton>
      </form>
    </Form>
  );
}
