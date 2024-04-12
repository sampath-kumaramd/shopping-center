"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// zod schema for form validation
const formSchema = z.object({
  firstName: z.string().refine((value) => /^[A-Za-z\s]+$/.test(value), {
    message: "Fulde navn må kun indeholde bogstaver.",
  }),
  email: z.string().email({
    message: "ugyldig emailadresse.",
  }),
  subject: z.string(),
  message: z.string().max(250, {
    message: "Adgangskoden skal være mindre end 150 tegn.",
  }),
});

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ContactUsForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
    mode: "onChange",
  });

  function onSubmit(values) {
    // console.log(values);
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit )} className="space-y-3">
          <div className="flex justify-between gap-12">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel className="text-[1.2rem]">Nome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu nome"
                      {...field}
                      className="w-[20rem] rounded-lg text-[1.2rem] h-[3rem]"
                    />
                  </FormControl>
                  <FormMessage>{error?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel className="text-[1.2rem]">
                  E-mail
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="exemplo@email.com"
                      {...field}
                      className="w-[20rem] rounded-lg text-[1.2rem] h-[3rem]"
                    />
                  </FormControl>
                  <FormMessage>{error?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[1.2rem]">Assunto</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Sobre o que deseja falar?"
                    {...field}
                    className="rounded-lg text-[1.2rem] h-[3rem]"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[1.2rem]">Escreva aqui...</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Indtast din besked... "
                    {...field}
                    className="rounded-lg text-[1.2rem] h-36"
                  />
                </FormControl>
                <FormDescription>
                0/250 caracteres
              </FormDescription>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
}

export default ContactUsForm;
