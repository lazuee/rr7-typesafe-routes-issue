import { index, route } from "@react-router/dev/routes";

import type { RouteConfig } from "@react-router/dev/routes";

export const routes: RouteConfig = [index("routes/home.tsx"), route("/theme", "theme/route.ts"), route("*", "routes/not-found.tsx")];
