"use client";

import { useState } from "react";
import httpClient from "@/app/utils/httpClient";
import {useRouter} from "next/navigation";

const inputClassName = "border-2";

function LoginForm({ setLoginInput, setPasswordInput, makeAuth }) {
  return (
    <>
      <label>Имя пользователя/эл. почта</label>
      <input
        className={inputClassName}
        onChange={(login) => setLoginInput(login.target.value)}
      />
      <label>Пароль</label>
      <input
        className={inputClassName}
        onChange={(password) => setPasswordInput(password.target.value)}
      />

      <button className={"mt-5 border-2 px-5"} onClick={makeAuth}>
        Войти
      </button>
    </>
  );
}

function RegisterForm({
  setLoginInput,
  setEmailInput,
  setPasswordInput,
  makeAuth,
}) {
  return (
      <>
        <label>Имя пользователя</label>
        <input
          className={inputClassName}
          onChange={(login) => setLoginInput(login.target.value)}
        />
        <label>Электронная почта</label>
        <input
          className={inputClassName}
          onChange={(email) => setEmailInput(email.target.value)}
        />
        <label>Пароль</label>
        <input
          className={inputClassName}
          onChange={(password) => setPasswordInput(password.target.value)}
        />

        <button className={"mt-5 border-2 px-5"} onClick={makeAuth}>
          Зарегистрироваться
        </button>
      </>
  );
}

export default function Page() {
  const router = useRouter()
  const [isLoginForm, toggleForm] = useState(true);
  const [loginInput, setLoginInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const login = async () => {
    await httpClient.login(loginInput, passwordInput);
    router.push("/")
  };

  const register = async () => {
    await httpClient.register(loginInput, emailInput, passwordInput);
  };

  return (
    <div
      className={"flex h-screen w-screen flex-col items-center justify-center"}
    >
      <div
        className={
          "flex h-1/2 w-1/3 flex-col items-center justify-center rounded-lg bg-white text-xl shadow-md"
        }
      >
        {isLoginForm ? (
          <LoginForm
            setLoginInput={(loginInputText) => setLoginInput(loginInputText)}
            setPasswordInput={(passwordInputText) =>
              setPasswordInput(passwordInputText)
            }
            makeAuth={login}
          />
        ) : (
          <RegisterForm
            setLoginInput={(loginInputText) => setLoginInput(loginInputText)}
            setEmailInput={(emailInputText) => setEmailInput(emailInputText)}
            setPasswordInput={(passwordInputText) =>
              setPasswordInput(passwordInputText)
            }
            makeAuth={register}
          />
        )}
      </div>
      <div onClick={() => toggleForm(!isLoginForm)}>
        {isLoginForm ? "Зарегистрироваться" : "Уже есть аккаунт? Войти"}
      </div>
    </div>
  );
}
