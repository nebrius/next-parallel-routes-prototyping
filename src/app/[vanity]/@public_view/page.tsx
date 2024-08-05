import { PublicPage } from "@/components/PublicPage";
import { ViewBootstrap } from "@/types/viewBootstrap";

export default async function MemberView() {
  const res = await fetch('http://localhost:3000/api/view-bootstrap');
  const bootstrapData: ViewBootstrap = await res.json();
  if (bootstrapData.view !== 'public') {
    return null;
  }
  return <PublicPage bootstrapData={bootstrapData} />
}