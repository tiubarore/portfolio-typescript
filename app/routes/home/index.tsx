import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My App | Welcome" },
    { name: "description", content: "my app" },
  ];
}

export default function Home() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Home</h2>
    </>
  );
}
