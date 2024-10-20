import { Outlet } from "react-router";

import type { HeadersArgs, LoaderFunctionArgs, ShouldRevalidateFunctionArgs } from "react-router";
import { cacheHeader } from "pretty-cache-header";

import { ErrorLayout } from "./components/layout/error";
import { RootLayout } from "./components/layout/root";
import { getTheme } from "./theme/route";

import.meta.glob("./styles/*.scss", { eager: true });

export function headers(_args: HeadersArgs) {
  return {
    "Cache-Control": cacheHeader({ public: true, maxAge: "1year" }),
    Vary: "Cookie",
  };
}

export function shouldRevalidate({ formData, defaultShouldRevalidate }: ShouldRevalidateFunctionArgs) {
  return formData?.get("theme") ? true : defaultShouldRevalidate;
}

export async function loader({ context, request }: LoaderFunctionArgs) {
  const { clientIp, env } = context;
  const theme = await getTheme(request);

  return {
    clientIp,
    env,
    theme,
  };
}

export default function App() {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
}

export function ErrorBoundary() {
  return (
    <RootLayout>
      <ErrorLayout />
    </RootLayout>
  );
}

export function HydrateFallback() {
  return <h1>Loading...</h1>;
}
