import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Users,
  Briefcase,
  Search,
  UserCheck,
  Building,
  Code,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import HeroCarousel from "@/components/HomeCarousel";
import WorkforceManagement from "@/components/WorkForce";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroCarousel />
      <WorkforceManagement />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>

        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Connecting the Right People with Right Opportunities
              </h1>
              <p className="text-lg md:text-xl">
                Full-service staffing and talent management solutions to help
                our clients fulfill their talent hunt.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <Image
                src="https://www.digimoksha.com/assets/people-services.png"
                alt="Talent Management"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">80+</p>
              <p className="text-sm text-muted-foreground">
                Years of Experience
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">1000+</p>
              <p className="text-sm text-muted-foreground">
                Successful Placements
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">200+</p>
              <p className="text-sm text-muted-foreground">Client Companies</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">
                Industry Verticals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <Image
                src="https://media.licdn.com/dms/image/v2/D5612AQHIY1yzlo0LDg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711980639162?e=2147483647&v=beta&t=tTli_I8X-xJWzChCWzXVObIG1NS6wiyjS_BbOqh2-3g"
                alt="About Expius Infotech"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                About Us
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Building Knowledge and Practice Through Technology
              </h2>
              <p className="text-lg text-muted-foreground">
                Since inception, Expius Infotech's aim has been towards
                connecting the right people with the right opportunity. We offer
                full-service staffing and talent management solutions to help
                our clients fulfill their talent hunt.
              </p>
              <p className="text-lg text-muted-foreground">
                Our management team has 80+ Man Years of experience in
                Information Technology; having our DNA into IT staffing and
                human capital solutions.
              </p>
              <Button asChild>
                <Link href="/about" className="inline-flex items-center">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tailored Staffing Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Our services are tailored as per clients' needs to suit their
              business process best.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Permanent Staffing</h3>
              <p className="mb-4 text-muted-foreground">
                Find the perfect permanent employees to grow your business with
                our expert recruitment services.
              </p>
              <Link
                href="/services/permanent-staffing"
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <UserCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Contract Staffing</h3>
              <p className="mb-4 text-muted-foreground">
                Flexible workforce solutions with skilled professionals for
                short-term projects and seasonal demands.
              </p>
              <Link
                href="/services/contract-staffing"
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Executive Search</h3>
              <p className="mb-4 text-muted-foreground">
                Specialized recruitment for senior leadership and executive
                positions across various industries.
              </p>
              <Link
                href="/services/executive-search"
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Recruitment Process</h3>
              <p className="mb-4 text-muted-foreground">
                End-to-end recruitment process outsourcing to streamline your
                hiring and reduce time-to-fill.
              </p>
              <Link
                href="/services/recruitment-process"
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Practice Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Industry Practice
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Specialized Across Multiple Sectors
            </h2>
            <p className="text-lg text-muted-foreground">
              Being a diversified staffing solution provider, we operate in a
              number of sectors and market segments.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Industry Verticals</h3>
              <p className="mb-4 text-muted-foreground">
                We serve diverse industry verticals including IT, Finance,
                Healthcare, Manufacturing, and more with specialized recruitment
                expertise.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Information Technology</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Banking & Finance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Healthcare & Pharma</span>
                </li>
              </ul>
              <Link
                href="/industry-practice/verticals"
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                View All Verticals <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Technologies</h3>
              <p className="mb-4 text-muted-foreground">
                Our expertise spans across various technologies, enabling us to
                find the right talent for your specific technical requirements.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Web & Mobile Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Cloud & DevOps</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Data Science & AI</span>
                </li>
              </ul>
              <Link
                href="/industry-practice/technologies"
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                View All Technologies <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to
              say about our services.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 italic text-muted-foreground">
                "Expius Infotech has been instrumental in helping us build our
                tech team. Their understanding of our requirements and the
                quality of candidates they provide is exceptional."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20"></div>
                <div>
                  <p className="font-medium">Rajesh Kumar</p>
                  <p className="text-sm text-muted-foreground">
                    CTO, TechSolutions Ltd
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 italic text-muted-foreground">
                "We've been working with Expius for our contract staffing needs.
                Their ability to quickly provide qualified professionals has
                helped us meet project deadlines consistently."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20"></div>
                <div>
                  <p className="font-medium">Priya Sharma</p>
                  <p className="text-sm text-muted-foreground">
                    HR Director, GlobalFinance
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 italic text-muted-foreground">
                "The executive search team at Expius Infotech helped us find the
                perfect CTO for our startup. Their industry knowledge and
                network is impressive."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20"></div>
                <div>
                  <p className="font-medium">Amit Patel</p>
                  <p className="text-sm text-muted-foreground">
                    CEO, InnovateNow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-xl bg-primary p-8 md:p-12 text-primary-foreground">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to Find Your Perfect Match?
                </h2>
                <p className="text-lg opacity-90">
                  Whether you're looking for talent or your next career
                  opportunity, we're here to help.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/careers/job-search">Browse Jobs</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
