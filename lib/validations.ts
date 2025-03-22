import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
    password: z.string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères.")
    .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule.")
    .regex(/[a-z]/, "Le mot de passe doit contenir au moins une minuscule.")
    .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre.")
    .regex(/[@$!%*?&]/, "Le mot de passe doit contenir au moins un caractère spécial (@$!%*?&)."),
  })