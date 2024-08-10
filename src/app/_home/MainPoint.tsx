"use client";

import { PenTool, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function MainPoint() {
  return (
    <>
      <section className="box-center flex-col gap-10 px-4 py-10 md:flex-row md:px-40 md:py-20">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="flex gap-4"
        >
          <Star size={40} color="red" />

          <div>
            <p className="mb-2 text-xl font-bold">Quality Service</p>
            <p className="mb-2">
            Our team’s deep knowledge and experience ensure that every aspect.
            </p>

            <a href="#" className="border-b border-dashed text-danger">
              Read More
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="flex gap-4"
        >
          <Users size={40} color="red" />

          <div>
            <p className="mb-2 text-xl font-bold">Expert Specialists</p>
            <p className="mb-2">
            Our team’s deep knowledge and experience ensure that every aspect.
            </p>

            <a href="#" className="border-b border-dashed text-danger">
              Read More
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="flex gap-4"
        >
          <PenTool size={40} color="red" />

          <div>
            <p className="mb-2 text-xl font-bold">Best Tools</p>
            <p className="mb-2">
            Our team’s deep knowledge and experience ensure that every aspect.
            </p>

            <a href="#" className="border-b border-dashed text-danger">
              Read More
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
