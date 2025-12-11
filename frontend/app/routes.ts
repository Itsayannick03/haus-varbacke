import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("house", "routes/aboutHouse.tsx"), route("umgebung", "routes/umgebung.tsx"), route("guestbook", "pages/guestbook.tsx")] satisfies RouteConfig;
