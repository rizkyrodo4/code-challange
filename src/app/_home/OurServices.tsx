"use client";

import { Button, Chip } from "@nextui-org/react";
import {
  ArrowRight,
  Car,
  CarFront,
  Check,
  GlassWater,
  ShipWheel,
} from "lucide-react";
import { useState } from "react";
import img1 from "./our-services/1.jpg";
import img2 from "./our-services/2.jpg";
import img3 from "./our-services/3.jpg";
import img4 from "./our-services/4.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const menus = [
  { name: "Diagnostic Test", icon: <Car />, img: img1 },
  { name: "Engine Service", icon: <CarFront />, img: img2 },
  { name: "Tires Replacement", icon: <ShipWheel />, img: img3 },
  { name: "Oil Change", icon: <GlassWater />, img: img4 },
];

const contents = [
  {
    title: "15 Years of Diagnostic Test",
    desc: "The diagnostic test for rental cars is a critical procedure designed to ensure that the vehicle is in optimal condition before being rented out to customers. This test helps identify and address potential issues or malfunctions that may not be immediately visible. By performing regular diagnostic tests.",
    points: ["Quality Service", "Expert Workers", "Modern Equipment"],
  },
  {
    title: "4 Years of Engine Service",
    desc: "The engine test is a comprehensive evaluation designed to assess the performance, efficiency, and overall condition of a vehicle’s engine. This test is crucial for identifying potential issues that may affect the vehicle's reliability and performance.",
    points: ["Expert Workers", "Quality Service", "Modern Equipment"],
  },
  {
    title: "11 Years of Tires Replacement",
    desc: "Tire replacement is a vital maintenance procedure that ensures the safety, performance, and comfort of a vehicle. Over time, tires wear out due to regular use, environmental factors, and road conditions.",
    points: ["Quality Service", "Modern Equipment", "Expert Workers"],
  },
  {
    title: "9 Years of Oil Change",
    desc: "An oil change is a crucial maintenance task that helps ensure the longevity and optimal performance of a vehicle's engine. Regularly changing the engine oil and filter helps to keep the engine clean.",
    points: ["Modern Equipment", "Expert Workers", "Quality Service"],
  },
];

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="p-4 md:p-20">
        <div className="mb-8 mt-8 text-center md:mt-0">
          <p className="mb-2 text-sm font-bold text-danger">OUR SERVICES</p>
          <h2 className="text-3xl font-bold">Explore Our Services</h2>
        </div>

        <div className="grid gap-8 pb-10 md:grid-cols-3 md:pb-0">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            {menus.map((menu, i) => (
              <Button
                key={menu.name}
                size="lg"
                color={activeIndex === i ? "danger" : "default"}
                className="mb-4 w-full justify-start font-bold"
                startContent={menu.icon}
                onClick={() => setActiveIndex(i)}
              >
                {menu.name}
              </Button>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <Image src={menus[activeIndex].img} alt={menus[activeIndex].name} />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <p className="mb-2 text-2xl font-bold">
              {contents[activeIndex].title}
            </p>

            <p className="mb-4 text-gray-500">{contents[activeIndex].desc}</p>

            {contents[activeIndex].points.map((point) => (
              <div key={point}>
                <Chip startContent={<Check color="green" />} variant="light">
                  {point}
                </Chip>
              </div>
            ))}

            <Button
              className="mt-8 font-bold"
              endContent={<ArrowRight />}
              color="danger"
            >
              READ MORE
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
