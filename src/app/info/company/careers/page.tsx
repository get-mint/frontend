import { Leaf } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Mint</h1>
          </div>
          <h2 className="text-base font-normal">Careers at Mint</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Join our team and help revolutionize the way people save money while shopping online. We're looking for passionate individuals who want to make a difference.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Mint?</h2>
          <p className="text-muted-foreground mb-4">
            At Mint, we're building the future of online shopping rewards. Here's what makes us special:
          </p>
          <ul className="list-disc ml-6 text-muted-foreground space-y-2">
            <li>Fast-paced, innovative environment</li>
            <li>Competitive compensation and benefits</li>
            <li>Remote-first culture</li>
            <li>Opportunity to make a real impact</li>
            <li>Work with cutting-edge technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Culture</h2>
          <p className="text-muted-foreground">
            We believe in fostering a culture of innovation, collaboration, and continuous learning. Our team is diverse, inclusive, and passionate about creating exceptional user experiences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc ml-6 text-muted-foreground space-y-2">
            <li>Competitive salary and equity packages</li>
            <li>Health, dental, and vision insurance</li>
            <li>Flexible work hours and locations</li>
            <li>Professional development budget</li>
            <li>Regular team events and meetups</li>
            <li>Generous vacation policy</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Engineering</h3>
              <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                <li>Senior Frontend Engineer</li>
                <li>Backend Engineer</li>
                <li>Full Stack Developer</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Product & Design</h3>
              <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                <li>Product Manager</li>
                <li>UI/UX Designer</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Business & Operations</h3>
              <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                <li>Business Development Manager</li>
                <li>Customer Success Manager</li>
                <li>Marketing Specialist</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
          <p className="text-muted-foreground">
            Interested in joining our team? Send your resume and a brief introduction to{" "}
            <a href="mailto:careers@getmint.lol" className="text-primary hover:underline">
              careers@getmint.lol
            </a>
            . Please include the position you're interested in and why you'd be a great fit for Mint.
          </p>
        </section>
      </div>
    </div>
  );
}
