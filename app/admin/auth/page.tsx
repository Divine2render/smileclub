"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FirebaseError } from "firebase/app";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  type User,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [checking, setChecking] = useState(true);
  useEffect(
    () =>
      onAuthStateChanged(auth, (user: User | null) => {
        setChecking(false);
        if (user) window.location.replace("/admin/home");
      }),
    [],
  );
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setBusy(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.replace("/admin/home");
    } catch (caught) {
      const code = caught instanceof FirebaseError ? caught.code : "unknown";
      const messages: Record<string, string> = {
        "auth/invalid-credential":
          "Email or password is incorrect. Confirm the account exists in this Firebase project and try again.",
        "auth/user-not-found":
          "No Firebase Authentication user was found for this email in the configured project.",
        "auth/wrong-password":
          "Password is incorrect. Reset it from Firebase Authentication → Users.",
        "auth/operation-not-allowed":
          "Email/Password sign-in is disabled. Enable it in Firebase Authentication → Sign-in method.",
        "auth/too-many-requests":
          "Too many attempts. Wait a while before trying again.",
        "auth/network-request-failed":
          "Could not reach Firebase. Check your internet connection and try again.",
        "auth/invalid-api-key":
          "The Firebase API key configured for this app is invalid.",
        "auth/unauthorized-domain":
          "This app domain is not authorized in Firebase Authentication settings.",
      };
      setError(
        messages[code] ??
          `Sign-in failed (${code}). Check the browser console for details.`,
      );
    } finally {
      setBusy(false);
    }
  }
  if (checking) return <main className="min-h-screen bg-[#263423]" />;
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#263423] px-5 py-10 sm:px-8 lg:px-12">
      <div className="flex w-full max-w-6xl flex-col items-center gap-10 sm:gap-12 lg:flex-row lg:justify-between lg:gap-20">
        <div className="flex w-full justify-center lg:flex-1 lg:justify-start">
          <Image
            src="/images/image-01.png"
            alt="Smile Club"
            width={560}
            height={320}
            priority
            className="h-auto w-full max-w-105 object-contain sm:max-w-125 lg:max-w-150"
          />
        </div>
        <div className="w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl sm:p-10 lg:flex-1">
          <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-[#e17c10]">
            Content studio
          </p>
          <h1 className="mb-7 text-3xl font-bold text-[#263423] sm:text-4xl">
            Admin Login
          </h1>
          <form onSubmit={submit} className="flex flex-col gap-5">
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#263423]">
              Email
              <input
                required
                autoComplete="username"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-[#dfe4d9] bg-white px-4 py-3 text-[#1d2633] outline-none focus:border-[#f28a1a] focus:ring-2 focus:ring-[#f28a1a]/25"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#263423]">
              Password
              <input
                required
                autoComplete="current-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-[#dfe4d9] bg-white px-4 py-3 text-[#1d2633] outline-none focus:border-[#f28a1a] focus:ring-2 focus:ring-[#f28a1a]/25"
              />
            </label>
            {error && (
              <p role="alert" className="text-sm text-red-700">
                {error}
              </p>
            )}
            <button
              disabled={busy}
              type="submit"
              className="mt-2 rounded-lg bg-[#f28a1a] px-5 py-3 font-semibold text-[#303d2b] transition hover:bg-[#f6a046] disabled:opacity-60"
            >
              {busy ? "Signing in…" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
