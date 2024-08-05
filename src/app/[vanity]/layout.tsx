import { ViewBootstrap } from "@/types/viewBootstrap";

export default async function Layout({
  member_view,
  public_view,
}: {
  member_view: React.ReactNode;
  public_view: React.ReactNode;
}) {
  const res = await fetch('http://localhost:3000/api/view-bootstrap');
  const bootstrapData: ViewBootstrap = await res.json();
  return <>{bootstrapData.view === 'member' ? member_view : public_view}</>
}