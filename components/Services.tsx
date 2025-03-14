"use client";

import { Briefcase, ChevronRight, Search, User, UserCheck } from "lucide-react";
import Link from "next/link";
import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

export type ServicesProps = {};

export const Services: FC<ServicesProps> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section className="py-16 md:py-24 bg-muted" ref={ref}>
      <div className="container">
        {/* Header Animation */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
          initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Our Services
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tailored Staffing Solutions
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Our services are tailored as per clients' needs to suit their
            business process best.
          </motion.p>
        </motion.div>

        {/* Services Cards with Staggered Animation */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, ease: "easeOut" },
            },
          }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              icon: <Briefcase className="h-6 w-6 text-primary" />,
              title: "Permanent Staffing",
              description:
                "Find the perfect permanent employees to grow your business with our expert recruitment services.",
              link: "/services/permanent-staffing",
            },
            {
              icon: <UserCheck className="h-6 w-6 text-primary" />,
              title: "Contract Staffing",
              description:
                "Flexible workforce solutions with skilled professionals for short-term projects and seasonal demands.",
              link: "/services/contract-staffing",
            },
            {
              icon: <Search className="h-6 w-6 text-primary" />,
              title: "Executive Search",
              description:
                "Specialized recruitment for senior leadership and executive positions across various industries.",
              link: "/services/executive-search",
            },
            {
              icon: <User className="h-6 w-6 text-primary" />,
              title: "Recruitment Process",
              description:
                "End-to-end recruitment process outsourcing to streamline your hiring and reduce time-to-fill.",
              link: "/services/recruitment-process",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-lg"
              initial={{ opacity: 0, y: 40, scale: 0.9, rotateY: -10 }}
              animate={
                isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : {}
              }
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 3,
                boxShadow: "0px 12px 24px rgba(0,0,0,0.15)",
              }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="mb-4 text-muted-foreground">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
