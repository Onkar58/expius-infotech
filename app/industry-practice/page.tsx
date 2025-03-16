import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building2,
  CheckSquare,
  Cloud,
  Code,
  Database,
  FlaskRoundIcon as Flask,
  Rocket,
  Server,
  Shield,
  ShoppingCart,
  Smartphone,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

export default async function IndustryPracticesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const defaultTab = (await searchParams)?.tab as string;
  console.log({ defaultTab });
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Industry Practices
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Expius Infotech delivers specialized staffing solutions across diverse
          industries and cutting-edge technologies.
        </p>
      </div>

      <Tabs defaultValue={defaultTab ?? "industries"} className="mb-16">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="industries">Industry Verticals</TabsTrigger>
          <TabsTrigger value="technologies">Technologies</TabsTrigger>
        </TabsList>

        <TabsContent value="industries" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryCard
              icon={<Server className="h-10 w-10 text-primary" />}
              title="Information Technology"
              description="Specialized staffing solutions for the dynamic IT sector."
              points={[
                "Software Development & Engineering",
                "IT Infrastructure & Operations",
                "Data Science & Analytics",
                "Cybersecurity & Compliance",
                "Product Management & Design",
              ]}
            />

            <IndustryCard
              icon={<ShoppingCart className="h-10 w-10 text-primary" />}
              title="FMCG"
              description="Talent solutions for the fast-paced consumer goods industry."
              points={[
                "Sales & Marketing Professionals",
                "Supply Chain & Logistics Experts",
                "Brand & Product Management",
                "Retail Operations Specialists",
                "Consumer Insights & Research Analysts",
              ]}
            />

            <IndustryCard
              icon={<Rocket className="h-10 w-10 text-primary" />}
              title="Startups"
              description="Agile recruitment for high-growth startup environments."
              points={[
                "Technical Co-founders & CTOs",
                "Full-stack Developers & Engineers",
                "Growth Hackers & Digital Marketers",
                "Product Managers & UX Specialists",
                "Operations & Finance Leaders",
              ]}
            />

            <IndustryCard
              icon={<Building2 className="h-10 w-10 text-primary" />}
              title="Banking & Financial Services"
              description="Expert staffing for the complex financial sector."
              points={[
                "Investment Banking Professionals",
                "Risk Management & Compliance Experts",
                "FinTech Specialists",
                "Wealth Management Advisors",
                "Financial Analysts & Controllers",
              ]}
            />

            <IndustryCard
              icon={<Flask className="h-10 w-10 text-primary" />}
              title="Pharmaceuticals & Life Sciences"
              description="Specialized recruitment for the life sciences industry."
              points={[
                "R&D Scientists & Researchers",
                "Clinical Trial Managers",
                "Regulatory Affairs Specialists",
                "Quality Assurance Professionals",
                "Pharmaceutical Sales Representatives",
              ]}
            />

            <IndustryCard
              icon={<Stethoscope className="h-10 w-10 text-primary" />}
              title="Healthcare"
              description="Comprehensive staffing solutions for healthcare organizations."
              points={[
                "Healthcare Administrators",
                "Medical Professionals & Specialists",
                "Health Information Technology Experts",
                "Healthcare Consultants",
                "Patient Care Coordinators",
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="technologies" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TechnologyCard
              icon={<Code className="h-10 w-10 text-primary" />}
              title="Application Development"
              description="Expert talent for building robust software applications."
              points={[
                "Front-end Development (React, Angular, Vue)",
                "Back-end Development (Node.js, Python, Java)",
                "Mobile App Development (iOS, Android, React Native)",
                "Full-stack Development",
                "DevOps & CI/CD Implementation",
                "Microservices Architecture",
              ]}
            />

            <TechnologyCard
              icon={<Database className="h-10 w-10 text-primary" />}
              title="ERP Solutions"
              description="Specialized professionals for enterprise resource planning."
              points={[
                "SAP Implementation & Support",
                "Oracle ERP Specialists",
                "Microsoft Dynamics Experts",
                "ERP Integration Consultants",
                "Business Process Analysts",
                "ERP Project Managers",
              ]}
            />

            <TechnologyCard
              icon={<CheckSquare className="h-10 w-10 text-primary" />}
              title="Quality Assurance"
              description="Dedicated QA professionals to ensure software excellence."
              points={[
                "Manual Testing Specialists",
                "Automated Testing Engineers",
                "Performance Testing Experts",
                "Security Testing Professionals",
                "QA Managers & Team Leads",
                "Test Automation Framework Developers",
              ]}
            />

            <TechnologyCard
              icon={<Cloud className="h-10 w-10 text-primary" />}
              title="Cloud Computing"
              description="Cloud specialists for modern infrastructure needs."
              points={[
                "AWS Certified Architects & Developers",
                "Microsoft Azure Specialists",
                "Google Cloud Platform Experts",
                "Cloud Migration Consultants",
                "Cloud Security Professionals",
                "DevOps Engineers",
              ]}
            />

            <TechnologyCard
              icon={<Shield className="h-10 w-10 text-primary" />}
              title="Cybersecurity"
              description="Security experts to protect your digital assets."
              points={[
                "Security Architects & Engineers",
                "Penetration Testers & Ethical Hackers",
                "Security Operations Center (SOC) Analysts",
                "Compliance & Risk Management Specialists",
                "Identity & Access Management Experts",
                "Security Awareness Trainers",
              ]}
            />

            <TechnologyCard
              icon={<Smartphone className="h-10 w-10 text-primary" />}
              title="Digital Transformation"
              description="Talent to drive your organization's digital journey."
              points={[
                "Digital Strategy Consultants",
                "UX/UI Designers & Researchers",
                "Digital Marketing Specialists",
                "Data Scientists & Analysts",
                "AI & Machine Learning Engineers",
                "Blockchain Developers",
              ]}
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Tailored Staffing Solutions for Your Industry
            </h2>
            <p className="text-muted-foreground mb-6">
              At Expius Infotech, we understand the unique challenges and
              requirements of different industries and technology domains. Our
              specialized recruiters have deep domain knowledge and extensive
              networks to find the perfect talent for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Discuss Your Requirements</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[250px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Industry Expertise"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  points: String[];
};

const IndustryCard: FC<CardProps> = ({ icon, title, description, points }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Expertise Areas</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 mt-2">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

const TechnologyCard: FC<CardProps> = ({
  icon,
  title,
  description,
  points,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Specialized Skills</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 mt-2">
                {points.map((point, index) => (
                  <li key={`tech-card-${index}`} className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};
