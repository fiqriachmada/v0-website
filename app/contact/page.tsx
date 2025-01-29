"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAppStore } from "@/store/appStore";
import { getTranslation, Language } from "@/utils/translations";
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
import { useEffect, useState, useMemo } from "react";

export default function Contact() {
  const { language, systemLanguage } = useAppStore();
  const effectiveLanguage = language === "system" ? systemLanguage : language;

  // Memoized validation schema to prevent unnecessary re-renders
  const formSchema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .min(1, {
            message: getTranslation("nameRequired", effectiveLanguage),
          }),
        email: z
          .string()
          .email({
            message: getTranslation("invalidEmail", effectiveLanguage),
          }),
        message: z
          .string()
          .min(20, {
            message: getTranslation("messageMinLength", effectiveLanguage),
          }),
      }),
    [effectiveLanguage] // Update schema when language changes
  );

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onChange", // Gunakan onChange agar validasi diperbarui saat user mengetik
  });

  useEffect(() => {
    form.reset(form.getValues()); // Reset agar error messages diperbarui sesuai bahasa baru
  }, [effectiveLanguage, form]);

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // Kirim form ke backend jika diperlukan
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
