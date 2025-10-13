import { Event } from "@/types/eventType";

export const events : Event[] = [
  {
    id: "tech1",
    name: "Innovation Web",
    description: `
        This event focuses on web development and design. This event aims to evaluate both theoretical understanding and practical skills of students on web development.<br><br>

        <b>Round 1</b><br>
        <b>Duration:</b> 30 mins (Anytime between 10 am to 1 pm)<br>
        <b>Description:</b> Participants will be given MCQs covering the web development domain. The questions will test their knowledge of frontend, backend technologies, scripting languages, and frameworks.<br><br>

        <b>Round 2</b><br>
        <b>Duration:</b> 1.5 hrs (2 pm to 3:30 pm)<br>
        <b>Description:</b> Participants will be given an on-spot topic and must develop a website using any tech stack of their choice. The website should be functional, user-friendly, and creative.
      `,
    date: "2025-10-05",
    time: "Round 1 : 10 am to 1 pm, Round 2 : 2 pm to 3:30 pm",
    members: "2 - 3",
    location: "CEG Auditorium",
    prizePool: "$500",
    inChargeName: "Alice Johnson",
    inChargeNumber: "+91 9876543210",
    category: "tech"
  }
]
