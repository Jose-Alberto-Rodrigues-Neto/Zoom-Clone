"use client";
import { BiCalendar, BiPlus, BiUser, BiVideo } from "react-icons/bi";
import MeetingCard from "./MeetingCard";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export default function MeetingTypeList() {
  const newMeetingCard = (
    <MeetingCard
      icon={<BiPlus className="text-white text-4xl" />}
      title="New Meeting"
      subtitle="Start an instant meeting!"
      bgColor="bg-orange-500"
    />
  );
  const joinMeetingCard = (
    <MeetingCard
      icon={<BiUser className="text-white text-4xl" />}
      title="Join Meeting"
      subtitle="Via invitation link."
      bgColor="bg-blue-500"
    />
  );
  const viewRecordingsCard = (
    <MeetingCard
      icon={<BiVideo className="text-white text-4xl" />}
      title="View Recordings"
      subtitle="Check out your recordings."
      bgColor="bg-purple-500"
    />
  );
  const scheduleMeetingCard = (
    <MeetingCard
      icon={<BiCalendar className="text-white text-4xl" />}
      title="Schedule Meeting"
      subtitle="Plain your meeting."
      bgColor="bg-yellow-400"
    />
  );

  const { toast } = useToast();
  const router = useRouter();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });

  const [callDetails, setCallDetails] = useState<Call>();
  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      if (!values.dateTime) {
        toast({
          title: "Please select a date and time!",
        });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Faild to create call");
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }

      toast({
        title: "Meeting created",
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Failed to create meeting!",
      });
    }
  };
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <MeetingModal
        triggerComponent={newMeetingCard}
        title="Start an Instant Meeting"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
      <MeetingModal
        triggerComponent={joinMeetingCard}
        title="Start an Instant Meeting"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
      <MeetingModal
        triggerComponent={viewRecordingsCard}
        title="Start an Instant Meeting"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
      <MeetingModal
        triggerComponent={scheduleMeetingCard}
        title="Start an Instant Meeting"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
}
