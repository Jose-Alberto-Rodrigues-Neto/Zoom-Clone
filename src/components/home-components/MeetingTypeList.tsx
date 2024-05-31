"use client"
import { BiCalendar, BiPlus, BiUser, BiVideo } from "react-icons/bi";
import MeetingCard from "./MeetingCard";
import MeetingModal from "./MeetingModal";

export default function MeetingTypeList(){
    const newMeetingCard = <MeetingCard icon={<BiPlus className="text-white text-4xl"/>} title="New Meeting" subtitle="Start an instant meeting!" bgColor="bg-orange-500"/>
    const joinMeetingCard = <MeetingCard icon={<BiUser className="text-white text-4xl"/>} title="Join Meeting" subtitle="Via invitation link." bgColor="bg-blue-500"/>
    const viewRecordingsCard = <MeetingCard icon={<BiVideo className="text-white text-4xl"/>} title="View Recordings" subtitle="Check out your recordings." bgColor="bg-purple-500"/>
    const scheduleMeetingCard = <MeetingCard icon={<BiCalendar className="text-white text-4xl"/>} title="Schedule Meeting" subtitle="Plain your meeting." bgColor="bg-yellow-400"/>
    
    const createMeeting = () => {
        
    }
    return(
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <MeetingModal
                    triggerComponent = {newMeetingCard}
                    title = "Start an Instant Meeting"
                    buttonText = "Start Meeting"
                    handleClick = {createMeeting}
                />
                <MeetingModal
                    triggerComponent = {joinMeetingCard}
                    title = "Start an Instant Meeting"
                    buttonText = "Start Meeting"
                    handleClick = {createMeeting}
                />
                <MeetingModal
                    triggerComponent = {viewRecordingsCard}
                    title = "Start an Instant Meeting"
                    buttonText = "Start Meeting"
                    handleClick = {createMeeting}
                />
                <MeetingModal
                    triggerComponent = {scheduleMeetingCard}
                    title = "Start an Instant Meeting"
                    buttonText = "Start Meeting"
                    handleClick = {createMeeting}
                />
        </section>
    )
}