'use client'
import { Button } from "@/components/ui/button";
import { api } from "../convex/_generated/api"
import {  useMutation, useQuery } from "convex/react";
import { ProjectCard } from "./project-card";
import CreateProjectButton from "@/components/ui/create-project-button";

export default function Home() {
  const projects = useQuery(api.projects.getProject);
  const createProject = useMutation(api.projects.createProject);
  
  return (
    <main className="p-24 space-y-8">
      <div className="flex justify-between items-center">
      <h1 className="text-4xl text-bold">My projects</h1>
      <CreateProjectButton/>
      
      </div>
      <div className="grid grid-cols-4 gap-4">
        {projects?.map((project) => (
          <ProjectCard project={project} key={project._id} />
        ))}
      </div>
    </main>
  );
}
