"use client";

import { login, signup } from "./actions";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();

  return (
    <div className="flex min-h-[80vh] w-full flex-col">
      <form className="m-auto flex w-1/5 flex-col">
        <label htmlFor="email">Email:</label>
        <input
          className="border border-black px-1 focus:outline-none"
          id="email"
          name="email"
          type="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          className="border border-black px-1 focus:outline-none"
          id="password"
          name="password"
          type="password"
          required
        />

        <p
          className={`font-bold text-sm text-red-700 ${
            searchParams.get("error") === "wrongCredentials"
              ? "block"
              : "hidden"
          }`}
        >
          your credentials are wrong!
        </p>

        <button
          className="mt-4 w-max border border-black px-2 hover:bg-black/10"
          formAction={login}
        >
          Log in
        </button>
        <button className="mt-8 w-max underline" formAction={signup}>
          Sign up
        </button>

        <p
          className={`font-bold text-green-700 ${
            searchParams.get("success") === "signedUp" ? "block" : "hidden"
          }`}
        >
          you signed up successfully!
        </p>
      </form>
    </div>
  );
}
