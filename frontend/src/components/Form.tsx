import { useState } from "react";

interface FormState {
  username: string;
  age: number;
}

export function Form() {
  const [formState, setFormState] = useState<FormState>({
    username: "",
    age: 0,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.name, e.target.value);

    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert(`Halo nama saya : ${formState.username}`);
    alert(`Umur saya : ${formState.age}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        onChange={handleChange}
        type="text"
        placeholder="Masukkan username..."
      />
      <input
        name="age"
        onChange={handleChange}
        type="number"
        placeholder="Masukkan umur..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}
