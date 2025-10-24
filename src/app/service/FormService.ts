import { type FormSchema } from "../types/FormTypes";
import { env } from "../../env.js"


export const FormService = {
    createForm: async (form: FormSchema) => {
        try {
          await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          });
        } catch (error) {
          console.error("Error creating form", error);
        }
      },
}