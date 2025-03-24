"use client";
import Link from "next/link";
import { FC, FormEvent, useCallback, useRef } from "react";
import { toast } from "sonner";
import { FileUpload } from "./FileUpload";
import { Button, Input, Label } from "./ui";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

export type ApplyFormProps = {};

export const ApplyForm: FC<ApplyFormProps> = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting");
    if (formRef.current) {
      const data = new FormData();
      Array.from(e.target).forEach((element: any) => {
        if (element.name === "resume") {
          console.log("Resume found", element.files[0]);
          data.set(element.name, element.files[0]);
          return;
        }
        data.set(element.name, element.value);
      });
      const response = await fetch("/api/apply/", {
        method: "POST",
        body: data,
      });
      console.log("Received data");
      if (response.status === 500) {
        toast.error("Something went wrong", {
          duration: 5000,
        });

        return;
      }

      toast("Message sent", {
        duration: 5000,
      });
    }
  }, []);
  return (
    <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input
            id="first-name"
            placeholder="Enter your first name"
            name="fname"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            id="last-name"
            placeholder="Enter your last name"
            name="lname"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          required
          name="email"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            required
            name="phone"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Current Location</Label>
          <Input
            id="location"
            placeholder="City, Country"
            name="location"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="position">Position Applying For</Label>
        <Select name="position">
          <SelectTrigger id="position">
            <SelectValue placeholder="Select a position" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Senior Full Stack Developer",
              "UI/UX Designer",
              "Devops Engineer",
              "Sales Executive",
              "Other",
            ].map((role) => (
              <SelectItem value={role} key={role}>
                {role}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Are you willing to relocate?</Label>
        <RadioGroup
          defaultValue="yes"
          name="relocate"
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="relocate-yes" />
            <Label htmlFor="relocate-yes" className="font-normal">
              Yes
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="relocate-no" />
            <Label htmlFor="relocate-no" className="font-normal">
              No
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="maybe" id="relocate-maybe" />
            <Label htmlFor="relocate-maybe" className="font-normal">
              Maybe
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>Work Authorization</Label>
        <RadioGroup
          defaultValue="citizen"
          className="flex flex-col space-y-2"
          name="authorization"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="citizen" id="auth-citizen" />
            <Label htmlFor="auth-citizen" className="font-normal">
              I am a citizen or permanent resident
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="visa" id="auth-visa" />
            <Label htmlFor="auth-visa" className="font-normal">
              I have a work visa
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sponsorship" id="auth-sponsorship" />
            <Label htmlFor="auth-sponsorship" className="font-normal">
              I require sponsorship
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <FileUpload />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cover-letter">Cover Letter (Optional)</Label>
        <Textarea
          name="cover-letter"
          id="cover-letter"
          placeholder="Tell us why you're interested in this position and what makes you a great fit"
          className="min-h-[120px]"
        />
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox id="terms" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="terms" className="font-normal text-sm">
            I agree to the{" "}
            <Link href="/terms" className="text-primary hover:underline">
              terms and conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              privacy policy
            </Link>
          </Label>
        </div>
      </div>
      <Button type="submit">Apply</Button>
    </form>
  );
};
