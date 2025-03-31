import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Briefcase, Clock, MapPin, Search } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Join Our Team
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl">
              Be part of a dynamic team that's shaping the future of technology.
              Explore opportunities to grow, innovate, and make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" variant="secondary">
                <Link href="#positions">View Open Positions</Link>
              </Button>
              {/*
                <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
                >
                    Learn About Our Culture
                </Button>
            */}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20" id="positions">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Find Your Perfect Role
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Search through our current openings and find a position that
              matches your skills and career goals.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8">
            <div className="grid gap-4 p-6 border rounded-lg shadow-sm bg-background">
              <div className="grid gap-4 md:grid-cols-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search jobs..." className="pl-9" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="hr">Human Resources</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fulltime">Full-time</SelectItem>
                    <SelectItem value="parttime">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full md:w-auto md:self-end">
                Search Jobs
              </Button>
            </div>

            {/* Job Listings */}
            <div className="flex flex-col items-center text-center space-y-4 py-10">
              <Briefcase className="h-10 w-10 text-muted-foreground" />
              <h2 className="text-2xl font-semibold">No Current Openings</h2>
              <p className="text-muted-foreground max-w-md">
                We're not hiring at the moment, but check back soon or reach out
                to us for future opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Why Join Expius Infotech?
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              We offer more than just a job. Join a culture that values
              innovation, growth, and work-life balance.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Growth & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Continuous learning opportunities, mentorship programs, and a
                  clear career progression path to help you reach your full
                  potential.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Innovation Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Work on cutting-edge technologies and contribute to projects
                  that are shaping the future of various industries.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Flexible work arrangements, generous time off, and wellness
                  programs to ensure you maintain a healthy balance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Inclusive Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  A diverse and inclusive workplace where every voice is heard
                  and respected, fostering creativity and innovation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Competitive Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Comprehensive health insurance, retirement plans, and other
                  benefits to support you and your family.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Global Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Opportunities to work with international clients and teams,
                  expanding your horizons and professional network.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Application Process
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              We've designed a straightforward process to help you find your
              place at Expius Infotech.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Apply Online</h3>
              <p className="text-muted-foreground">
                Submit your application through our careers portal with your
                resume and cover letter.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Initial Screening</h3>
              <p className="text-muted-foreground">
                Our HR team will review your application and reach out for an
                initial phone interview.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Technical Assessment</h3>
              <p className="text-muted-foreground">
                Depending on the role, you may be asked to complete a skills
                assessment or technical interview.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Final Interview</h3>
              <p className="text-muted-foreground">
                Meet with the team and leadership to discuss your experience,
                skills, and cultural fit.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button size="lg" asChild>
              <Link href="/careers/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Job Card Component
function JobCard({ job }: { job: JobType }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>{job.department}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            {job.location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Briefcase className="mr-1 h-4 w-4" />
            {job.type}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-1 h-4 w-4" />
            Posted {job.posted}
          </div>
        </div>
        <p className="text-muted-foreground">{job.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/careers/job/${job.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

// Sample job listings data
export type JobType = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Freelance";
  posted: string;
  description?: string;
};
const jobListings: JobType[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-time",
    posted: "2 days ago",
    description:
      "We're looking for an experienced Full Stack Developer to join our engineering team and help build scalable web applications.",
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "Mumbai",
    type: "Full-time",
    posted: "1 week ago",
    description:
      "Join our design team to create intuitive and engaging user experiences for our products and services.",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    posted: "3 days ago",
    description:
      "Help us build and maintain our cloud infrastructure and deployment pipelines to ensure smooth operations.",
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Delhi",
    type: "Full-time",
    posted: "5 days ago",
    description:
      "Drive our digital marketing efforts to increase brand awareness and generate leads for our products.",
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    location: "Hyderabad",
    type: "Full-time",
    posted: "1 week ago",
    description:
      "Lead product development initiatives from conception to launch, working closely with engineering and design teams.",
  },
  {
    id: 6,
    title: "Sales Executive",
    department: "Sales",
    location: "Bangalore",
    type: "Full-time",
    posted: "3 days ago",
    description:
      "Join our sales team to build relationships with clients and help grow our business across various sectors.",
  },
];
