import type { Route } from "./+types/home";
import { House } from "../components/about-house";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function house() {
  return <House />;
}
