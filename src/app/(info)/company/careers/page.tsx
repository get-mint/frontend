import { Leaf } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Leaf className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Careers</h1>
        </div>
      </div>

      <div className="space-y-8 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Join Our Team</h2>
          <p>
            While we're not actively hiring at the moment, we're always interested in connecting with talented individuals who share our passion for innovation in e-commerce and fintech.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Culture</h2>
          <p>
            At Mint, we foster a culture of innovation, collaboration, and continuous learning. We believe in empowering our team members to take ownership of their work and make meaningful contributions to our mission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Future Opportunities</h2>
          <p>
            If you're excited about our mission and would like to be considered for future opportunities, feel free to reach out to us at{" "}
            <span className="text-primary">team@getmint.lol</span>. We'll keep your information on file and contact you when relevant positions become available.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">What We Value</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Passion for technology and innovation</li>
            <li>Strong problem-solving abilities</li>
            <li>Excellent communication skills</li>
            <li>User-centric mindset</li>
            <li>Ability to work independently and as part of a team</li>
            <li>Commitment to continuous learning and improvement</li>
          </ul>
        </section>
      </div>
    </div>
  );
} 