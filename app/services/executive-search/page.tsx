import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, CheckCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExecutiveSearchPage() {
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
            Executive Search
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Identify and attract top-tier leadership talent with our premium
            executive search services designed to find transformative leaders
            for your organization.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">Request Consultation</Link>
          </Button>
        </div>
        <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://www.weareams.com/wp-content/uploads/guide-to-recruitment-process-outsourcing-why-hire-rpo.png"
            alt="Executive Search"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          The Expius Executive Search Advantage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg border">
            <Trophy className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Industry Expertise</h3>
            <p className="text-muted-foreground">
              Our executive search consultants bring deep industry knowledge and
              sector-specific expertise to identify the right leadership talent
              for your organization.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <Trophy className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Extensive Network</h3>
            <p className="text-muted-foreground">
              We maintain relationships with top-performing executives across
              industries, giving us access to passive candidates not available
              through traditional recruitment channels.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <Trophy className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Comprehensive Assessment</h3>
            <p className="text-muted-foreground">
              Our rigorous evaluation process goes beyond skills and experience
              to assess leadership capabilities, cultural fit, and long-term
              potential.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <Trophy className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Confidential Approach</h3>
            <p className="text-muted-foreground">
              We understand the sensitivity of executive searches and maintain
              complete confidentiality throughout the entire process.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Our Executive Search Methodology
        </h2>
        <div className="bg-muted p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="font-bold mb-2">Discovery</h3>
              <p className="text-sm text-muted-foreground">
                Understanding your organization, culture, and leadership needs
              </p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-0.5 bg-border"></div>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="font-bold mb-2">Strategy</h3>
              <p className="text-sm text-muted-foreground">
                Developing a targeted search strategy and candidate profile
              </p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-0.5 bg-border"></div>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="font-bold mb-2">Execution</h3>
              <p className="text-sm text-muted-foreground">
                Conducting a thorough market search and candidate assessment
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-start-2 text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">4</span>
              </div>
              <h3 className="font-bold mb-2">Selection</h3>
              <p className="text-sm text-muted-foreground">
                Presenting a shortlist of qualified candidates and facilitating
                interviews
              </p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-0.5 bg-border"></div>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">5</span>
              </div>
              <h3 className="font-bold mb-2">Integration</h3>
              <p className="text-sm text-muted-foreground">
                Supporting the onboarding process to ensure successful
                leadership transition
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Executive Positions We Fill</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-card p-4 rounded-lg border">
            <CheckCircle className="h-5 w-5 text-primary mb-2" />
            <p className="font-medium">Chief Executive Officer (CEO)</p>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <CheckCircle className="h-5 w-5 text-primary mb-2" />
            <p className="font-medium">Chief Financial Officer (CFO)</p>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <CheckCircle className="h-5 w-5 text-primary mb-2" />
            <p className="font-medium">Chief Operating Officer (COO)</p>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <CheckCircle className="h-5 w-5 text-primary mb-2" />
            <p className="font-medium">Chief Technology Officer (CTO)</p>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <CheckCircle className="h-5 w-5 text-primary mb-2" />
            <p className="font-medium">Chief Marketing Officer (CMO)</p>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <CheckCircle className="h-5 w-5 text-primary mb-2" />
            <p className="font-medium">Chief Human Resources Officer (CHRO)</p>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <CheckCircle className="h-5 w-5 text-primary mb-2" />
            <p className="font-medium">Vice Presidents</p>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <CheckCircle className="h-5 w-5 text-primary mb-2" />
            <p className="font-medium">Directors</p>
          </div>
          <div className="bg-card p-4 rounded-lg border">
            <CheckCircle className="h-5 w-5 text-primary mb-2" />
            <p className="font-medium">Board Members</p>
          </div>
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Looking for exceptional leadership talent?
        </h2>
        <p className="text-muted-foreground mb-6">
          Partner with Expius Infotech to identify and attract transformative
          leaders who will drive your organization forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">Explore Other Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
