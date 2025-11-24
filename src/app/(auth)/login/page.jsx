"use client";

import { SignIn, useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <div className="flex justify-center items-center flex-col">
        <SignIn signUpUrl="/register" />;
      </div>
    );
  }

  return <div>Welcome!</div>;
}
