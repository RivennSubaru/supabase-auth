"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form } from "@/components/ui/form"
import CustomFormField from "@/components/CustomFormField"
import { KeyRound, LockKeyhole, Mail } from "lucide-react"
import { loginSchema } from "@/lib/validations"
import SubmitButton from "@/components/SubmitButton"
import { useState } from "react"
import { login } from "./actions"

export enum CustomFieldType {
  INPUT = "input",
  CHECKBOX = "checkbox"
}

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true)

    /* UNCOMMENT THIS IF YOU WANT TO USE THE LOGIN SERVICE */
    // const formData = new FormData()
    // formData.append('email', values.email)
    // formData.append('password', values.password)

    try {
      // await login(formData)
      console.log(values)

    } catch (error) {
      console.log("Something went wrong: ", error);
    }
    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[480px] mx-auto h-fit">
        <div className="">
          <div className="m-auto flex items-center justify-center rounded-full bg-purple-500 w-fit p-3">
            <LockKeyhole size={36} className="text-white dark:text-neutral-900"/>
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
        <SubmitButton
          className={`w-full 
            ${!isLoading && `magic-btn
              group focus-visible:ring-purple-500 hover:bg-purple-500/90
              hover:ring-purple-500 dark:hover:ring-offset-neutral-900`
            }
            bg-purple-500`}
          isLoading={isLoading}
        >
          Se connecter
        </SubmitButton>
      </form>
    </Form>
  )
}


export default LoginForm