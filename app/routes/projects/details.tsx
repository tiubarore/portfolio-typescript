import type { Route } from "./+types/details";
import type { Project } from "~/types";

export async function clientLoader({
  request,
  params,
}: Route.ClientLoaderArgs): Promise<Project> {
  const res = await fetch(`http://localhost:8000/projects/${params.id}`);

  if (!res.ok) throw new Response("Project not found", { status: 404 });
  const projects: Project = await res.json();
  return projects;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}

const details = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData;
  console.log(project);
  return <div>details</div>;
};
export default details;
