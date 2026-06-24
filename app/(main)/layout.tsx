import SideBar from "@/app/sidbar";
import { ConvexClientProvider } from "./ConvexClientProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SideBar>{children}</SideBar>;
}
