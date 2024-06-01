"use client"
import MeetingRoom from "@/components/meeting-components/MeetingRoom";
import MeetingSetup from "@/components/meeting-components/MeetingSetup";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import useGetCallById from "../../../../../hooks/useGetCallById";
import Loader from "@/components/default-loader/Loader";

export default function Meeting({ params: id }: { params: { id: string } }) {
  const { user, isLoaded } = useUser();
  const [ isSetupComplete, setIsSetupComplete ] = useState(false)
  const { call, isCallLoading} = useGetCallById(id)

  if(!isLoaded || isCallLoading){
    return <Loader/>
  }
  return (
    <section className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? <MeetingSetup setIsSetupComplete ={ setIsSetupComplete }/> : <MeetingRoom/>}
        </StreamTheme>
      </StreamCall>
    </section>
  );
}
