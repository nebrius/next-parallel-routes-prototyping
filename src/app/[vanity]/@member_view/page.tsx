import { MemberPage } from "@/components/MemberPage";
import { ViewBootstrap } from "@/types/viewBootstrap";

export default async function MemberView() {
  const res = await fetch('http://localhost:3000/api/view-bootstrap');
  const bootstrapData: ViewBootstrap = await res.json();
  if (bootstrapData.view !== 'member') {
    return null;
  }
  return <MemberPage bootstrapData={bootstrapData} />
}