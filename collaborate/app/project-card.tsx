import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Doc } from "@/convex/_generated/dataModel";

export function ProjectCard({ project }: {project: Doc<"projects">} ) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>phases: {project.phases.toString()}</p>
      </CardContent>
      <CardFooter>
        <Button variant={"secondary"}>View</Button>
      </CardFooter>
    </Card>
  );
}
