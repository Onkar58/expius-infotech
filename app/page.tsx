import { AboutUs } from "@/components/AboutUs";
import { HeroSection } from "@/components/HeroSection";
import HeroCarousel from "@/components/HomeCarousel";
import { IndustryTech } from "@/components/IndustryTech";
import { Services } from "@/components/Services";
import { Stats } from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import WorkforceManagement from "@/components/WorkForce";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <HeroSection />
      <Stats />
      <AboutUs />
      <WorkforceManagement />
      <Services />
      <IndustryTech />
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
