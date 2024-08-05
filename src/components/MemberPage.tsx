'use client';

import { MemberBootstrap } from "@/types/viewBootstrap";

interface MemberPageProps {
  bootstrapData: MemberBootstrap;
}

export function MemberPage({bootstrapData}: MemberPageProps) {
  return (
    <div>
      <h1>{bootstrapData.name}</h1>
      <div>Member since: {new Date(bootstrapData.memberSince).toLocaleDateString()}</div>
    </div>
  );
}