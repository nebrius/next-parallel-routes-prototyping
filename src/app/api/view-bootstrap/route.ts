import { ViewBootstrap } from "@/types/viewBootstrap";

export const dynamic = 'force-dynamic' // defaults to auto

const IS_MEMBER = true;

export async function GET(request: Request) {
  const data: ViewBootstrap = !IS_MEMBER ? {
    name: 'My Page',
    view: 'public',
    plegeCost: 5
  } : {
    name: 'My Page',
    view: 'member',
    memberSince: (new Date('2022/8/22')).getTime()
  }
  return Response.json(data)
}