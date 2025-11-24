"use client";

import { SignUp, useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <div className="flex justify-center items-center flex-col">
        <SignUp signInUrl="/login" fallbackRedirectUrl="" />;
      </div>
    );
  }
}
