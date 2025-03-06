import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-8">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Expius Infotech</h3>
            <p className="mb-4 text-sm">
              Connecting the right people with right opportunity. We offer
              full-service staffing and talent management solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground hover:text-accent">
                <span className="sr-only">LinkedIn</span>
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
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-primary-foreground hover:text-accent">
                <span className="sr-only">Twitter</span>
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/industry-practice" className="hover:text-accent">
                  Industry Practice
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-accent">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/permanent-staffing"
                  className="hover:text-accent"
                >
                  Permanent Staffing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/contract-staffing"
                  className="hover:text-accent"
                >
                  Contract Staffing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/executive-search"
                  className="hover:text-accent"
                >
                  Executive Search
                </Link>
              </li>
              <li>
                <Link
                  href="/services/recruitment-process"
                  className="hover:text-accent"
                >
                  Recruitment Process
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>123 Business Park, Suite 101, Mumbai, India 400001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@expiusinfotech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Expius Infotech. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
