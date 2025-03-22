"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "@/components/CustomFormField"
import { KeyRound, LockKeyhole, Mail } from "lucide-react"

export enum CustomFieldType {
  INPUT = "input"
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const LoginForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[480px] mx-auto h-fit">
        <div className="">
          <div className="m-auto flex items-center justify-center rounded-full bg-purple-500 w-fit p-3">
            <LockKeyhole size={36} color="white"/>
          </div>
        </div>
        <section className="flex flex-col items-center gap-3">
          <h1 className="text-5xl font-semibold">Bienvenu</h1>
          <div className="text-gray-400 flex flex-col items-center">
            <span>Content de vous revoir 👋</span>
            <span>Veuillez vous connecter ci-dessous</span>
          </div>
        </section>
        <CustomFormField
          control={form.control}
          name="email"
          label="Email"
          inputType="text"
          placeholder="exemple@gmail.com"
          fieldType={CustomFieldType.INPUT}
          icon={<Mail className="ml-2"/>}
        />
        <CustomFormField
          control={form.control}
          name="password"
          label="Mot de passe"
          inputType="password"
          placeholder="Votre mot de passe"
          fieldType={CustomFieldType.INPUT}
          icon={<KeyRound className="ml-2"/>}
        />
        <Button type="submit" className="w-full bg-purple-500 dark:bg-purple-700 dark:text-white">Submit</Button>
      </form>
    </Form>
  )
}


export default LoginForm