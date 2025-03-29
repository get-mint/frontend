import { Leaf } from "lucide-react";

import { InfoPage } from "@/components/templates/info-page";

const sections = [
  {
    title: "Join Our Team",
    content: (
      <p>
        While we're not actively hiring at the moment, we're always interested
        in connecting with talented individuals who share our passion for
        innovation in e-commerce and fintech.
      </p>
    ),
  },
  {
    title: "Our Culture",
    content: (
      <p>
        At Mint, we foster a culture of innovation, collaboration, and
        continuous learning. We believe in empowering our team members to take
        ownership of their work and make meaningful contributions to our
        mission.
      </p>
    ),
  },
  {
    title: "Future Opportunities",
    content: (
      <p>
        If you're excited about our mission and would like to be considered for
        future opportunities, feel free to reach out to us at{" "}
        <span className="text-primary">team@getmint.lol</span>. We'll keep your
        information on file and contact you when relevant positions become
        available.
      </p>
    ),
  },
  {
    title: "What We Value",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Passion for technology and innovation</li>
        <li>Strong problem-solving abilities</li>
        <li>Excellent communication skills</li>
        <li>User-centric mindset</li>
        <li>Ability to work independently and as part of a team</li>
        <li>Commitment to continuous learning and improvement</li>
      </ul>
    ),
  },
];

export default function CareersPage() {
  return <InfoPage title="Careers" icon={Leaf} sections={sections} />;
}
