import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, CheckCircle, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RecruitmentProcessPage() {
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
            Recruitment Process Outsourcing
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Optimize your hiring workflow with our end-to-end recruitment
            process solutions designed to streamline your talent acquisition
            strategy.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">Request Consultation</Link>
          </Button>
        </div>
        <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://www.weareams.com/wp-content/uploads/guide-to-recruitment-process-outsourcing-definition.png"
            alt="Recruitment Process"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Why Choose Our Recruitment Process Outsourcing?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border">
            <BarChart className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Scalability</h3>
            <p className="text-muted-foreground">
              Our RPO solutions scale with your business needs, whether you're
              hiring for a single department or across the entire organization.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <BarChart className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Cost Efficiency</h3>
            <p className="text-muted-foreground">
              Reduce your recruitment costs and improve ROI with our streamlined
              processes and economies of scale.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <BarChart className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Quality of Hire</h3>
            <p className="text-muted-foreground">
              Improve the quality of your hires with our data-driven approach
              and comprehensive candidate assessment methodologies.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Our Comprehensive RPO Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4">End-to-End Recruitment</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <p>Job requirement analysis and position profiling</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <p>Strategic sourcing and talent pipeline development</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <p>Candidate screening and preliminary interviews</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <p>Skills assessment and technical evaluations</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <p>Interview coordination and feedback management</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <p>Offer management and negotiation support</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <p>Onboarding coordination and new hire integration</p>
              </li>
            </ul>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4">
              Strategic Recruitment Consulting
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <p>Talent market analysis and competitive intelligence</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <p>Employer branding and candidate experience optimization</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <p>Recruitment technology assessment and implementation</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <p>Diversity and inclusion recruitment strategies</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <p>Recruitment metrics and performance analytics</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <p>Process optimization and efficiency improvements</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <p>Hiring manager training and best practices</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Our RPO Implementation Process
        </h2>

        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2"></div>

          <div className="relative mb-12 grid md:grid-cols-2 gap-8">
            <div className="absolute -left-4 md:left-1/2 -translate-x-1/2 top-1/3 h-4 w-4 rounded-full bg-primary"></div>
            <div className="md:text-right px-2">
              <h3 className="font-bold text-lg">Assess & Discovery</h3>
              <p className="text-muted-foreground">
                We analyze your current recruitment processes, challenges, and
                objectives to design a tailored RPO solution.
              </p>
            </div>
            <div className="hidden md:block"></div>
          </div>
          <div className="relative mb-12 grid md:grid-cols-2 gap-8">
            <div className="absolute -left-4 md:left-1/2 -translate-x-1/2 top-1/3 h-4 w-4 rounded-full bg-primary"></div>
            <div className="md:text-left px-2 order-2">
              <h3 className="font-bold text-lg">Solution Design</h3>
              <p className="text-muted-foreground">
                We develop a customized RPO strategy aligned with your business
                goals, culture, and specific hiring needs.
              </p>
            </div>
            <div className="hidden md:block"></div>
          </div>
          <div className="relative mb-12 grid md:grid-cols-2 gap-8">
            <div className="absolute -left-4 md:left-1/2 -translate-x-1/2 top-1/3 h-4 w-4 rounded-full bg-primary"></div>
            <div className="md:text-right px-2">
              <h3 className="font-bold text-lg">Implementation</h3>
              <p className="text-muted-foreground">
                We seamlessly integrate our RPO team and technologies with your
                existing systems and processes.
              </p>
            </div>
            <div className="hidden md:block"></div>
          </div>

          <div className="relative mb-12 grid md:grid-cols-2 gap-8">
            <div className="absolute -left-4 md:left-1/2 -translate-x-1/2 top-1/3 h-4 w-4 rounded-full bg-primary"></div>
            <div className="md:text-left px-2 order-2">
              <h3 className="font-bold text-lg">Optimization</h3>
              <p className="text-muted-foreground">
                We handle all administrative aspects of contractor management,
                from onboarding to payroll, allowing you to focus on your
                projects.
              </p>
            </div>
            <div className="hidden md:block"></div>
          </div>

          <div className="relative mb-12 grid md:grid-cols-2 gap-8">
            <div className="absolute -left-4 md:left-1/2 -translate-x-1/2 top-1/3 h-4 w-4 rounded-full bg-primary"></div>
            <div className="md:text-right px-2">
              <h3 className="font-bold text-lg">Partnership & Growth</h3>
              <p className="text-muted-foreground">
                We evolve our partnership to address changing business needs and
                expand our services as your organization grows.
              </p>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Ready to transform your recruitment process?
        </h2>
        <p className="text-muted-foreground mb-6">
          Partner with Expius Infotech to streamline your talent acquisition
          strategy and improve your hiring outcomes.
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
