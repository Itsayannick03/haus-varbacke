import type { Route } from "./+types/home";
import { Footer } from "../components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function footer() {
  return <Footer />;
}
