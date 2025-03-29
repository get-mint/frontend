import { LucideIcon } from "lucide-react";

export function InfoPage({
  title,
  icon: Icon,
  sections,
}: {
  title: string;
  icon: LucideIcon;
  sections: {
    title: string;
    content: React.ReactNode;
  }[];
}) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon className="size-8 text-primary" />
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
      </div>

      <div className="space-y-8 text-muted-foreground">
        {sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {section.title}
            </h2>
            {section.content}
          </section>
        ))}
      </div>
    </div>
  );
}
