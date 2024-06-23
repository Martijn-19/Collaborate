'use client'
import { Button } from "@/components/ui/button";
import { api } from "../convex/_generated/api"
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { getProject } from "@/convex/projects";
import { ProjectCard } from "./project-card";

export default function Home() {
  const projects = useQuery(api.projects.getProject);
  const createProject = useMutation(api.projects.createProject);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant={"destructive"} onClick={() =>
        {
          createProject({
            id: 2, 
            name: "Project 1", 
            description: "Description 1",
            phases: [1, 2, 3],
            customerId: 1,
            isCompleted: false
          })
        }
      }>Create project</Button>

      {projects?.map((project) => <ProjectCard project={project} key={project._id}/>)}

    </main>
  );
}
