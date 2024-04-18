import { Inter } from "next/font/google";
import TitleBar from "@/components/titleBar/TitleBar";
import NavigationMenu from "@/components/navigationMenu/NavigationMenu";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({ children }) {
  return (
    <div className="md:flex block flex-1 justify-start align-middle gap-3 mx-3 ">
      <NavigationMenu />
      <div className="flex flex-1 flex-col justify-start gap-4">
        <TitleBar />
        {children}
      </div>
    </div>
  );
}
