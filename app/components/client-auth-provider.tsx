import { useEffect, useState } from "react";
import { AuthProvider } from "react-oauth2-code-pkce";
import { authConfig } from "~/config/oauth2-config";

// Delay rendering until we're in the browser
export function ClientAuthProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  if (!ready) return null;           // or a spinner/loading UI

  return <AuthProvider authConfig={authConfig}>{children}</AuthProvider>;
}
