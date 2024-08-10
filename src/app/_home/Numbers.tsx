"use client";

import { CarFront, CheckSquare, Users2, UserSearch } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Numbers() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* big img */}
      <Image
        alt="Car Wash"
        src={`/img/3.jpg`}
        fill
        style={{ objectFit: "cover" }}
      />

      <div className="relative z-10 grid grid-cols-2 gap-4 px-4 py-4 text-white md:grid-cols-4 md:px-20 md:py-10">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="box-center flex-col gap-2"
        >
          <CheckSquare size={40} />
          <p className="text-2xl font-bold md:text-4xl">5</p>
          <p className="text-sm">Years Experience</p>
        </motion.div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="box-center flex-col gap-2"
        >
          <UserSearch size={40} />
          <p className="text-2xl font-bold md:text-4xl">20</p>
          <p className="text-sm">Expert Technicians</p>
        </motion.div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="box-center flex-col gap-2"
        >
          <Users2 size={40} />
          <p className="text-2xl font-bold md:text-4xl">1122</p>
          <p className="text-sm">Satisfied Clients</p>
        </motion.div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="box-center flex-col gap-2"
        >
          <CarFront size={40} />
          <p className="text-2xl font-bold md:text-4xl">3234</p>
          <p className="text-sm">Complete Projects</p>
        </motion.div>
      </div>
    </section>
  );
}
