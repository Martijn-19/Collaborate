'use client'
import { Button } from "@/components/ui/button";
import { api } from "../convex/_generated/api"
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  const createProject = useMutation(api.projects.createProject);
  const getProject = useQuery(api.projects.getProject);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  );
}
