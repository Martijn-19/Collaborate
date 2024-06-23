'use client'

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient("https://focused-fish-27.convex.cloud");

export function Providers({ children }: { children: React.ReactNode }) {
  return <ClerkProvider publishableKey={"pk_test_cG93ZXJmdWwtZG92ZS03OC5jbGVyay5hY2NvdW50cy5kZXYk"}>
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  </ClerkProvider>
}