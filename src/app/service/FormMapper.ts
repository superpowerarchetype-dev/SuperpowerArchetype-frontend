import { type FormSchema } from "../types/FormTypes";

export const FormMappers = {
    mapForm: async (): Promise<FormSchema> => {
        const name = localStorage.getItem("name") ?? undefined;
        const age = localStorage.getItem("age") ?? undefined;
        const gender = localStorage.getItem("gender") ?? undefined;
        const email = localStorage.getItem("email") ?? undefined;
        const archetype = localStorage.getItem("win_archetype") ?? undefined;
        const form: FormSchema = {
            name: name,
            age: Number(age),
            gender: gender,
            email: email,
            archetype: archetype


        }
        return form;
    }

}