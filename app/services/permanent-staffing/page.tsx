import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PermanentStaffingPage() {
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
            Permanent Staffing Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Build your dream team with our comprehensive permanent staffing
            services designed to find the perfect long-term talent for your
            organization.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">Request Consultation</Link>
          </Button>
        </div>
        <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Permanent Staffing"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          How Our Permanent Staffing Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="font-bold text-primary">01</span>
            </div>
            <h3 className="font-bold mb-2">Understand Your Needs</h3>
            <p className="text-muted-foreground">
              We begin by thoroughly understanding your organization, culture,
              and specific role requirements.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="font-bold text-primary">02</span>
            </div>
            <h3 className="font-bold mb-2">Source & Screen</h3>
            <p className="text-muted-foreground">
              Our recruiters leverage industry networks and advanced tools to
              identify and rigorously screen candidates.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="font-bold text-primary">03</span>
            </div>
            <h3 className="font-bold mb-2">Present & Place</h3>
            <p className="text-muted-foreground">
              We present only the most qualified candidates and support you
              through the hiring and onboarding process.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Benefits of Our Permanent Staffing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
            <p>
              Access to a vast network of pre-screened, qualified candidates
            </p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
            <p>Reduced time-to-hire with our streamlined recruitment process</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
            <p>Improved retention rates through better candidate matching</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
            <p>Comprehensive skill assessment and cultural fit evaluation</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
            <p>Industry-specific expertise across multiple sectors</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
            <p>Ongoing support throughout the hiring and onboarding process</p>
          </div>
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Ready to build your dream team?
        </h2>
        <p className="text-muted-foreground mb-6">
          Let Expius Infotech help you find the perfect permanent employees for
          your organization.
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
