"use client";

import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { Users, Globe, Lightbulb } from "lucide-react";

type InfoCardProps = {
  Icon: ReactNode;
  title: string;
  description: string;
};

const InfoCard: FC<InfoCardProps> = ({ Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
      whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{
        scale: 1.08,
        rotateY: 5,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
      }}
      className="p-6 bg-white rounded-lg shadow-lg text-center"
    >
      <div className="flex justify-center">
        <span className="p-3 bg-gray-200 rounded-full">{Icon}</span>
      </div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

const WorkforceManagement: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="my-20 py-12 px-6 max-w-5xl mx-auto"
    >
      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl font-[400] text-center"
      >
        <span className="font-[500] text-black">EXPIUS INFOTECH</span> -
        WORKFORCE MANAGEMENT
      </motion.h2>

      {/* Animated Paragraphs */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-gray-700 text-center mt-4"
      >
        Expius Infotech provides end-to-end HR Solutions to clients globally...
        Expius Infotech provides end-to-end HR Solutions to clients globally. We
        deliver the entire gamut of staffing solutions from permanent hires to
        contract staff, contract to hire, temporary help to project placements,
        and strategic partnerships.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="text-gray-700 text-center mt-2"
      >
        Our aim is to partner with our clients to integrate flexibility into
        their workforce and take care of their people management activities.
      </motion.p>

      {/* Animated Cards with Stagger Effect */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, ease: "easeOut" },
          },
        }}
        className="mt-12 grid md:grid-cols-3 gap-6"
      >
        <InfoCard
          Icon={<Users size={24} />}
          title="ABOUT US"
          description="Since inception, Expius Infotech's aim has been towards connecting the right people with the right opportunity."
        />
        <InfoCard
          Icon={<Globe size={24} />}
          title="MISSION & VISION"
          description="The mission of Expius is to help our clients achieve their business objectives in the most productive and efficient manner possible."
        />
        <InfoCard
          Icon={<Lightbulb size={24} />}
          title="CORE VALUE"
          description="Expius Infotech takes pride in building long-term relationships with our Clients and job seekers to fully understand their needs and goals."
        />
      </motion.div>
    </motion.section>
  );
};

export default WorkforceManagement;
