"use client";

import { useSession, getSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Page() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login?callbackUrl=/my/settings");
    },
  });

  return (
    <main>
      <h1>Protected Page</h1>
      <h2>{session?.user?.name}</h2>
      <p>You can view this page because you are signed in.</p>
    </main>
  );
}
