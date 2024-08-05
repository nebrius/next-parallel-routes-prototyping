'use client';

import { PublicBootstrap } from "@/types/viewBootstrap";

interface PublicPageProps {
  bootstrapData: PublicBootstrap;
}

export function PublicPage({bootstrapData}: PublicPageProps) {
  return (
    <div>
      <h1>{bootstrapData.name}</h1>
      <div>Join for ${bootstrapData.plegeCost}</div>
    </div>
  );
}