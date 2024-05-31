import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import {
  IoCheckbox,
  IoDuplicate,
  IoHome,
  IoToday,
  IoVideocam,
} from "react-icons/io5";

interface NavItemProps {
  path: string;
  name: string;
  icon: ReactNode;
  className?: string;
}

export const navItemData: NavItemProps[] = [
  {
    path: "/",
    name: "Home",
    icon: <IoHome />,
  },
  {
    name: "Upcoming",
    icon: <IoToday />,
    path: "/upcoming",
  },
  {
    name: "Previous",
    icon: <IoCheckbox />,
    path: "/previous",
  },
  {
    name: "Recordings",
    icon: <IoVideocam />,
    path: "/recordings",
  },
  {
    name: "Personal Room",
    icon: <IoDuplicate />,
    path: "/personal-room",
  },
];

export function SidebarItems({ name, icon, path, className }: NavItemProps) {
  return (
    <div className={`${className}`}>
      <Link
        href={path}
        className="flex flex-row gap-4 items-center text-lg w-full p-4 rounded-sm hover:bg-cyan-500 hover:rounded-xl"
      >
        {icon}
        {name}
      </Link>
    </div>
  );
}

export default function Sidebar() {
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-2 pt-20 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col">
        {navItemData.map((key) => {
          return (
            <SidebarItems
              key={key.name}
              name={key.name}
              icon={key.icon}
              path={key.path}
              className="p-1"
            />
          );
        })}
      </div>
    </section>
  );
}
