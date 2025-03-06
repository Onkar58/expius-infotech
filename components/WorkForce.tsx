"use client";
import { Globe, Lightbulb, LucideIcon, Users } from "lucide-react";
import React from "react";

type CardProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const InfoCard: React.FC<CardProps> = ({ Icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center border hover:shadow-lg hover:scale-[1.01]">
      {<Icon className="mx-auto size-16 text-primary" />}
      <h3 className="text-xl font-light text-primary">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a href="#" className="text-primary font-medium mt-4 inline-block">
        LEARN MORE →
      </a>
    </div>
  );
};

const WorkforceManagement: React.FC = () => {
  return (
    <section className="my-20 py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-[400] text-center">
        <span className="font-[500] text-black">EXPIUS INFOTECH</span> -
        WORKFORCE MANAGEMENT
      </h2>
      <p className="text-gray-700 text-center mt-4">
        Expius Infotech provides end-to-end HR Solutions to clients globally. We
        deliver the entire gamut of staffing solutions from permanent hires to
        contract staff, contract to hire, temporary help to project placements,
        and strategic partnerships.
      </p>
      <p className="text-gray-700 text-center mt-2">
        Our aim is to partner with our clients to integrate flexibility into
        their workforce and take care of their people management activities.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <InfoCard
          Icon={Users}
          title="ABOUT US"
          description="Since inception, Expius Infotech's aim has been towards connecting the right people with the right opportunity."
        />
        <InfoCard
          Icon={Globe}
          title="MISSION & VISION"
          description="The mission of Expius is to help our clients achieve their business objectives in the most productive and efficient manner possible."
        />
        <InfoCard
          Icon={Lightbulb}
          title="CORE VALUE"
          description="Expius Infotech takes pride in building long-term relationships with our Clients and job seekers to fully understand their needs and goals."
        />
      </div>
    </section>
  );
};

export default WorkforceManagement;
