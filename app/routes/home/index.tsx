import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My App | Welcome" },
    { name: "description", content: "my app" },
  ];
}

export default function Home() {
  return <section></section>;
}
