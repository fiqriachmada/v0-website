"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAppStore } from "@/store/appStore";
import { getTranslation } from "@/utils/translations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";

export default function Contact() {
  const { language, systemLanguage } = useAppStore();
  const effectiveLanguage = language === "system" ? systemLanguage : language;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formSchema = z.object({
    name: z
      .string()
      .min(1, { message: getTranslation("nameRequired", effectiveLanguage) }),
    email: z
      .string()
      .email({ message: getTranslation("invalidEmail", effectiveLanguage) }),
    message: z
      .string()
      .min(20, {
        message: getTranslation("messageMinLength", effectiveLanguage),
      }),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onSubmit", // Changed to onSubmit
  });

  // Update validation messages when language changes
  useEffect(() => {
    if (isSubmitted) {
      form.trigger();
    }
  }, [form, isSubmitted]); // Removed unnecessary dependency: effectiveLanguage

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">
        {getTranslation("contactUs", effectiveLanguage)}
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-md">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {getTranslation("name", effectiveLanguage)}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={getTranslation("name", effectiveLanguage)}
                    {...field}
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
                  {getTranslation("email", effectiveLanguage)}
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={getTranslation("email", effectiveLanguage)}
                    {...field}
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
                <FormLabel>
                  {getTranslation("message", effectiveLanguage)}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={getTranslation("message", effectiveLanguage)}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            {getTranslation("sendMessage", effectiveLanguage)}
          </Button>
        </form>
      </Form>
    </div>
  );
}
