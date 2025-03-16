import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContractStaffingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/services"
        className="flex items-center text-muted-foreground hover:text-foreground mb-8"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Services
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            Contract Staffing Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Access specialized skills and flexible workforce solutions with our
            contract staffing services designed for project-based and temporary
            needs.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">Request Consultation</Link>
          </Button>
        </div>
        <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Contract Staffing"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Why Choose Contract Staffing?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="font-bold mb-2">Flexibility</h3>
            <p className="text-muted-foreground">
              Scale your workforce up or down based on project demands and
              business cycles without long-term commitments.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="font-bold mb-2">Specialized Skills</h3>
            <p className="text-muted-foreground">
              Access niche expertise and specialized talent for specific
              projects or initiatives on demand.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="font-bold mb-2">Cost Efficiency</h3>
            <p className="text-muted-foreground">
              Reduce overhead costs associated with full-time employees while
              maintaining productivity and quality.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Our Contract Staffing Process
        </h2>
        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2"></div>

          <div className="relative mb-12 grid md:grid-cols-2 gap-8">
            <div className="absolute -left-4 md:left-1/2 -translate-x-1/2 top-1/3 h-4 w-4 rounded-full bg-primary"></div>
            <div className="md:text-right px-2">
              <h3 className="font-bold text-lg">Requirement Analysis</h3>
              <p className="text-muted-foreground">
                We work closely with you to understand your project
                requirements, timeline, and specific skill needs.
              </p>
            </div>
            <div className="hidden md:block"></div>
          </div>
          <div className="relative mb-12 grid md:grid-cols-2 gap-8">
            <div className="absolute -left-4 md:left-1/2 -translate-x-1/2 top-1/3 h-4 w-4 rounded-full bg-primary"></div>
            <div className="md:text-left px-2 order-2">
              <h3 className="font-bold text-lg">Talent Sourcing</h3>
              <p className="text-muted-foreground">
                Our recruiters tap into our extensive network to identify
                contractors with the exact skills and experience you need.{" "}
              </p>
            </div>
            <div className="hidden md:block"></div>
          </div>
          <div className="relative mb-12 grid md:grid-cols-2 gap-8">
            <div className="absolute -left-4 md:left-1/2 -translate-x-1/2 top-1/3 h-4 w-4 rounded-full bg-primary"></div>
            <div className="md:text-right px-2">
              <h3 className="font-bold text-lg">Screening & Selection</h3>
              <p className="text-muted-foreground">
                We rigorously assess candidates' technical abilities,
                experience, and availability to ensure they meet your
                requirements.
              </p>
            </div>
            <div className="hidden md:block"></div>
          </div>

          <div className="relative mb-12 grid md:grid-cols-2 gap-8">
            <div className="absolute -left-4 md:left-1/2 -translate-x-1/2 top-1/3 h-4 w-4 rounded-full bg-primary"></div>
            <div className="md:text-left px-2 order-2">
              <h3 className="font-bold text-lg">Onboarding & Management</h3>
              <p className="text-muted-foreground">
                We handle all administrative aspects of contractor management,
                from onboarding to payroll, allowing you to focus on your
                projects.
              </p>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Industries We Serve
        </h2>
        <div className="flex flex-wrap gap-6">
          {[
            "Information Technology",
            "Finance & Banking",
            "Healthcare",
            "Manufacturing",
            "Engineering",
            "Retail",
            "Energy & Utilities",
            "Telecommunications",
          ].map((industry, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border text-center shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-lg text-gray-800">{industry}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Need specialized talent for your project?
        </h2>
        <p className="text-muted-foreground mb-6">
          Let Expius Infotech provide you with skilled contractors to meet your
          temporary staffing needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">Explore Other Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
