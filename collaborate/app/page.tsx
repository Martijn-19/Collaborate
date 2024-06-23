'use client'
import { Button } from "@/components/ui/button";
import { api } from "../convex/_generated/api"
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation } from "convex/react";

export default function Home() {
  const createProject = useMutation(api.projects.createProject);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <Button onClick={() => {
          createProject({
            id: 1,
            name: "Collaborate",
            description: "New Ilionx project",
            customerId: 1,
            isCompleted: false,
          })
        }}>Create Project</Button>
      </Authenticated>
    </main>
  );
}
