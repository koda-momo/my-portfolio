import { Links, Meta, Scripts, Outlet } from "@remix-run/react";
import "./tailwind.css";

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="min-h-[100vh] bg-gradient-to-t from-primary to-bg text-text">
          <Outlet />
        </main>
        <Scripts />
      </body>
    </html>
  );
}
