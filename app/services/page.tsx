import Link from "next/link";
import { Users, Clock, Search, GitMerge } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Expius Infotech offers comprehensive staffing solutions to meet your
          organization's unique needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <ServiceCard
          icon={<Users className="h-10 w-10 text-primary" />}
          title="Permanent Staffing"
          description="Find the perfect long-term talent for your organization with our permanent staffing solutions."
          href="/services/permanent-staffing"
        />

        <ServiceCard
          icon={<Clock className="h-10 w-10 text-primary" />}
          title="Contract Staffing"
          description="Access specialized skills for project-based needs with our flexible contract staffing services."
          href="/services/contract-staffing"
        />

        <ServiceCard
          icon={<Search className="h-10 w-10 text-primary" />}
          title="Executive Search"
          description="Identify and attract top-tier leadership talent with our executive search expertise."
          href="/services/executive-search"
        />

        <ServiceCard
          icon={<GitMerge className="h-10 w-10 text-primary" />}
          title="Recruitment Process"
          description="Optimize your hiring workflow with our end-to-end recruitment process solutions."
          href="/services/recruitment-process"
        />
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to transform your workforce?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Partner with Expius Infotech for all your staffing needs and
          experience the difference our expertise makes.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description, href }) {
  return (
    <div className="bg-card rounded-lg p-8 shadow-sm border hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Button asChild variant="outline">
        <Link href={href}>Learn More</Link>
      </Button>
    </div>
  );
}
