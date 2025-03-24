import { ApplyForm } from "@/components/ApplyForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function ApplyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Apply to Expius Infotech
            </h1>
            <p className="max-w-[700px] text-lg">
              Take the first step towards joining our team. Fill out the
              application form below to be considered for our open positions.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="sticky top-20">
                <h2 className="text-2xl font-bold mb-4">Application Steps</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-3">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Personal Information</h3>
                      <p className="text-sm text-muted-foreground">
                        Basic details about you
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h3 className="font-medium mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you have any questions about the application process,
                    please contact our HR team.
                  </p>
                  <Button variant="outline" asChild size="sm">
                    <Link href="/contact">Contact HR</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Please provide your basic information to get started.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ApplyForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
