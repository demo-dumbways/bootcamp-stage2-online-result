import { useState } from "react";
import { LoginForm } from "../types";

export function useLoginForm() {
  const [form, setForm] = useState<LoginForm>({
    emailOrUsername: "",
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
