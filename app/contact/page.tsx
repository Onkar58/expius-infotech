"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, Fragment, useState } from "react";
import { toast } from "sonner";
import Loading from "../loading";
import Link from "next/link";
export default function ContactPage() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    Array.from(e.target).forEach((element: any) => {
      data.set(element.name, element.value);
    });
    const response = await fetch("/api/contact/", {
      method: "POST",
      body: data,
    });
    setLoading(false);
    if (response.status === 500) {
      toast.error("Something went wrong", {
        duration: 5000,
      });

      return;
    }
    toast("Message sent", {
      duration: 5000,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h1>
            <p className="max-w-[700px] text-lg">
              Have questions or want to learn more about our services? We're
              here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      name="phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                    <Select name="inquiryType">
                      <SelectTrigger id="inquiry-type">
                        <SelectValue placeholder="Select an inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="support">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="careers">Careers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>How did you hear about us?</Label>
                    <RadioGroup defaultValue="search" name="referrer">
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="search" id="source-search" />
                          <Label
                            htmlFor="source-search"
                            className="font-normal"
                          >
                            Search Engine
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="social" id="source-social" />
                          <Label
                            htmlFor="source-social"
                            className="font-normal"
                          >
                            Social Media
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="referral"
                            id="source-referral"
                          />
                          <Label
                            htmlFor="source-referral"
                            className="font-normal"
                          >
                            Referral
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="source-other" />
                          <Label htmlFor="source-other" className="font-normal">
                            Other
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe how we can help you"
                      className="min-h-[120px]"
                      name="message"
                      required
                    />
                  </div>
                  <Button disabled={isLoading} type="submit" className="w-full">
                    {!isLoading ? (
                      <Fragment>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Fragment>
                    ) : (
                      <Loading />
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="text-muted-foreground">
                        No. 9, 3rd Main, 2nd Cross Mattadhalli, R T Nagar,
                        Bangalore - 560032,
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="shrink-0 h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="text-muted-foreground">
                        Office no-501 , 5th Floor Shri Tower building New DP Rd,
                        Vishal Nagar, Pimple Nilakh, Pimpri-Chinchwad - 411027
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="text-muted-foreground">
                        23A Royd Steet, Room No. 201, 2nd Floor, Kolkata -
                        700016
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+91 9145 257 778</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">
                        careers@expiusinfotech.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
                <p className="text-muted-foreground mb-4">
                  Follow us on social media to stay updated with our latest news
                  and announcements.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Link
                      href="https://www.linkedin.com/company/expius-infotech-pvt-ltd/"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
