import { PropsWithChildren } from "react";
import { Sidebar } from "../_components/sidebar";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex w-screen ">
      <Sidebar>sidebar</Sidebar>
      <div className="m-8 flex-1 rounded-2xl border border-default-200 p-8 py-0 transition-all">
        {children}
      </div>
    </div>
  );
}
