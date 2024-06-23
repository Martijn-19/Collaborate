'use client'
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Unauthenticated, Authenticated, AuthLoading } from "convex/react";

export function HeaderActions() {
  return (
    <div>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>

      <Authenticated>
        <UserButton />
      </Authenticated>
      <AuthLoading>loading .....</AuthLoading>
    </div>
  );
}

