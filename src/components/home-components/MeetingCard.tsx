import { ReactNode } from "react";

interface MeetingCardProps {
  title: string;
  subtitle: string;
  bgColor: string;
  icon: ReactNode;
}

export default function MeetingCard({
  title,
  subtitle,
  bgColor,
  icon,
}: MeetingCardProps) {
  return (
    <div
      className={`${bgColor} px-4 py-6 flex flex-col justify-between w-full xl:max-w-72 min-h-64 rounded-xl cursor-pointer`}
    >
      <div className="flex justify-center items-center glassmorphism size-12 rounded">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="text-lg font-normal text-white">{subtitle}</p>
      </div>
    </div>
  );
}
