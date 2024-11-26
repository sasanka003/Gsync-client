import SidePanelLayout from "@/components/dashboard/side-panel-layout";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidePanelLayout>{children}</SidePanelLayout>;
}
