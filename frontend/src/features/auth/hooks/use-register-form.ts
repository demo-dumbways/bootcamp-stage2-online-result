import { useState } from "react";
import { RegisterForm } from "../types";

export function useRegisterForm() {
  const [form, setForm] = useState<RegisterForm>({
    fullName: "",
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
  }

  return {
    handleChange,
    handleSubmit,
  };
}
