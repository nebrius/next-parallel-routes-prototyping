import { ViewBootstrap } from "@/types/viewBootstrap";

export const dynamic = 'force-dynamic' // defaults to auto

let isMember = true;
let flipViewTimeout: NodeJS.Timeout | undefined = undefined;
function flipView() {
  if (flipViewTimeout) {
    return;
  }
  flipViewTimeout = setTimeout(() => {
    isMember = !isMember;
    flipViewTimeout = undefined;
  }, 200)
}

export async function GET(request: Request) {
  const data: ViewBootstrap = !isMember ? {
    name: 'My Page',
    view: 'public',
    plegeCost: 5
  } : {
    name: 'My Page',
    view: 'member',
    memberSince: (new Date('2022/8/22')).getTime()
  }
  flipView();
  return Response.json(data)
}