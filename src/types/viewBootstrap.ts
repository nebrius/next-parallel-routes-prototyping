interface BaseBootstrap {
  name: string;
}

export interface MemberBootstrap extends BaseBootstrap {
  view: 'member';
  memberSince: number;
}

export interface PublicBootstrap extends BaseBootstrap {
  view: 'public';
  plegeCost: number;
}

export type ViewBootstrap = MemberBootstrap | PublicBootstrap;