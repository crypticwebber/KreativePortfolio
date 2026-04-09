import type { ReactNode } from "react";
import Navbar from "../components/ui/Navbar";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className=" bg-neutral-950 text-neutral-100">
      <div className=" ">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
