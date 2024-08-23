import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type RegisterFormInputs = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormInputs) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: 10, width: 300 }}
    >
      <input
        {...register("fullName")}
        placeholder="Full Name"
        style={{
          padding: 10,
          color: "white",
          outline: "none",
          border: "1px solid white",
          borderRadius: 5,
        }}
      />
      {errors.fullName && (
        <p style={{ color: "red", margin: 0 }}>{errors.fullName.message}</p>
      )}

      <input
        {...register("email")}
        placeholder="Email"
        style={{
          padding: 10,
          color: "white",
          outline: "none",
          border: "1px solid white",
          borderRadius: 5,
        }}
      />
      {errors.email && (
        <p style={{ color: "red", margin: 0 }}>{errors.email.message}</p>
      )}

      <input
        {...register("password")}
        placeholder="Password"
        type="password"
        style={{
          padding: 10,
          color: "white",
          outline: "none",
          border: "1px solid white",
          borderRadius: 5,
        }}
      />
      {errors.password && (
        <p style={{ color: "red", margin: 0 }}>{errors.password.message}</p>
      )}

      <button
        type="submit"
        style={{
          backgroundColor: "#04A51E",
          padding: 10,
          color: "white",
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        Create
      </button>
    </form>
  );
}
