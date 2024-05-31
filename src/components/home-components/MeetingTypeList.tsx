import { BiCalendar, BiPlus, BiUser, BiVideo } from "react-icons/bi";
import MeetingCard from "./MeetingCard";

export default function MeetingTypeList(){
    return(
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <MeetingCard icon={<BiPlus className="text-white text-4xl"/>} title="New Meeting" subtitle="Start an instant meeting!" bgColor="bg-orange-500"/>
            <MeetingCard icon={<BiUser className="text-white text-4xl"/>} title="Join Meeting" subtitle="Via invitation link." bgColor="bg-blue-500"/>
            <MeetingCard icon={<BiVideo className="text-white text-4xl"/>} title="View Recordings" subtitle="Check out your recordings." bgColor="bg-purple-500"/>
            <MeetingCard icon={<BiCalendar className="text-white text-4xl"/>} title="Schedule Meeting" subtitle="Plain your meeting." bgColor="bg-yellow-500"/>
        </section>
    )
}