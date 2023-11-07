"use client"

import { api } from "@/libs/axios"
import { FormEvent, useRef } from "react"

export default function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null)
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (usernameRef.current && emailRef.current && passwordRef.current) {
      console.log("tried")
      api.post('/user', {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
    }
  }

  return (
    <main className="h-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 text-lg items-center"
      >
        <p className="text-2xl font-black">Webapp de voos</p>
        <p className="text-xl font-bold">Login</p>
        <input
          ref={usernameRef}
          placeholder="username"
          type="text"
          className="border-2 border-zinc-700 p-4 rounded-md"
        />
        <input
          ref={emailRef}
          placeholder="email"
          type="email"
          className="border-2 border-zinc-700 p-4 rounded-md"
        />
        <input
          ref={passwordRef}
          placeholder="senha"
          type="password"
          className="border-2 border-zinc-700 p-4 rounded-md"
        />
        <button
          type="submit"
          className="bg-zinc-500 text-white p-4 rounded-md w-full"
        >
          Entrar
        </button>
      </form>
    </main>
  )
}
