"use client";

import Image from "next/image";
import car from "./experience/car.jpg";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <>
      <section className="grid items-center gap-10 p-4 md:grid-cols-2 md:p-20">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative"
        >
          <div className="absolute -right-4 -top-4 bg-black/50 px-10 py-4 text-white">
            <b className="text-3xl">15</b>{" "}
            <span className="text-xl">Years</span>
            <br />
            <span className="text-xl">Experience</span>
          </div>
          <Image src={car} alt="Front Cars" />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="pb-8"
        >
          <p className="mb-4 text-danger">ABOUT US</p>

          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            <span className="text-danger">Car Rental</span> is the best place
            for your holiday!
          </h2>

          <p className="mb-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            blanditiis.
          </p>

          <div className="box-equal mb-4 gap-4">
            <p className="box-center h-14 w-14 bg-gray-200">01</p>

            <div>
              <p className="font-bold">Professional Wash</p>
              <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="box-equal mb-4 gap-4">
            <p className="box-center h-14 w-14 bg-gray-200">02</p>

            <div>
              <p className="font-bold">Quality Service</p>
              <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="box-equal mb-8 gap-4">
            <p className="box-center h-14 w-14 bg-gray-200">03</p>

            <div>
              <p className="font-bold">Award Winning</p>
              <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <Button color="danger" size="lg" endContent={<ArrowRight />}>
            READ MORE
          </Button>
        </motion.div>
      </section>
    </>
  );
}
