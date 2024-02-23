import { Header } from "@/components/header/header";
import { Sidebar } from "@/components/sidebar/sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="font-inter">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="bg-slate-100 w-full">
          <div className="ml-6 font-inter">{children}</div>
        </div>
      </div>
    </div>
  );
}
