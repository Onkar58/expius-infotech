import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Target, Eye, Brain } from "lucide-react";
import { HeartHandshake, ShieldCheck, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                About Expius Infotech
              </h1>
              <p className="text-lg text-muted-foreground">
                Since inception, Expius Infotech's aim has been towards
                connecting the right people with the right opportunity.
              </p>
            </div>
            <div className="relative  lg:h-98 md:h-80">
              <Image
                src="https://cdnwebsite.databox.com/wp-content/uploads/2020/12/01062702/about-us-page-examples.png"
                alt="About Expius Infotech"
                fill
                className="object-cover rounded-lg aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <Image
                src="/our_story.webp"
                alt="Our Story"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                We offer full-service staffing and talent management solutions
                to help our clients fulfill their talent hunt; and being one of
                the few companies in India who works towards building knowledge
                and practice through the upcoming technology demand.
              </p>
              <p className="text-lg text-muted-foreground">
                Expius Infotech's services are tailored as per clients' needs to
                suit their business process best. Our management team has 80+
                Man Years of experience in Information Technology; having our
                DNA into IT staffing and human capital solution.
              </p>
              <p className="text-lg text-muted-foreground">
                Being a diversified Staffing solution provider we operate in a
                number of sectors and market segments and are therefore able to
                assist a wide range of demands. Our service delivery team
                members are handpicked from the markets to suite our clients
                satisfaction and on time delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted" id="mission">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card rounded-lg p-8 shadow-md">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="mb-6 text-muted-foreground">
                The mission of Expius is to help our clients achieve their
                business objectives in the most productive and efficient manner
                possible, while aligning our job candidates with opportunities
                that allow them to enjoy career satisfaction by attaining their
                professional goals.
              </p>
              <Button asChild variant="outline">
                <Link
                  href="/about/mission"
                  className="inline-flex items-center"
                >
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-md">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
              <p className="mb-6 text-muted-foreground">
                To be successful in our mission, we tirelessly seek to obtain a
                clear and complete understanding of our clients’ challenges and
                of our candidates’ strengths and preferences. We believe that
                only through aligning these two tiers of understanding can we
                ensure the mutual satisfaction of our clients and candidates —
                and continue to drive our own business growth.
              </p>
              <Button asChild variant="outline">
                <Link href="/about/vision" className="inline-flex items-center">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-md">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Brain className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">
                Philosophy and Culture
              </h2>
              <p className="mb-6 text-muted-foreground">
                Expius isn’t just any IT staffing and recruiting firm. We firmly
                believe in the importance of people. Personal relationships are
                incredibly valuable to what we do. We work hard to ensure both
                clients and employees are satisfied with their placement. We
                want our employees to shine and our clients to be satisfied. We
                trust our employees. We understand their needs. We make things
                happen. Our organized, unique approach has yielded quality
                results time after time. And, we’ll continue to do it this way.{" "}
              </p>
              <Button asChild variant="outline">
                <Link href="/about/vision" className="inline-flex items-center">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted" id="core-values">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-center text-muted-foreground">
            These values drive our success and define how we work.
          </p>
          <div className="mt-12 space-y-12">
            {[
              {
                icon: HeartHandshake,
                title: "Integrity",
                desc: "We conduct our business with outmost Integrity & Confidentiality: We make sure that we live up to the trust that our clients put in us and uphold the value of integrity & confidentiality.",
                img: "/integrity.webp",
                reverse: false,
              },
              {
                icon: ShieldCheck,
                title: "Ethical Practice",
                desc: "Ethical Practices: In spite of a world of cut throat competition, not letting go of our ethical practices is what helps us achieve our goals.",
                img: "/placeholder.svg?height=400&width=600",
                reverse: false,
              },
              {
                icon: Lightbulb,
                title: "Tailor-made solutions",
                desc: "Tailor-made solutions: We believe every client is unique in their own way and every requirement needs to be dealt with differently. Hence, we make sure we provide tailor made solutions to each client to help them get the best talent they need.",
                img: "/tailored_solutions.webp",
                reverse: false,
              },
            ].map(({ icon: Icon, title, desc, img, reverse }, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center justify-between`}
              >
                <div
                  className={`relative h-64 md:h-80 w-full max-w-md ${reverse ? "md:order-1 ml-auto" : ""}`}
                >
                  <Image
                    src={img}
                    alt={title}
                    layout="fill"
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="rounded-xl bg-primary p-8 md:p-12 text-primary-foreground">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to Work with Us?
                </h2>
                <p className="text-lg opacity-90">
                  Let's discuss how Expius Infotech can help you find the
                  perfect talent for your organization.
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
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
