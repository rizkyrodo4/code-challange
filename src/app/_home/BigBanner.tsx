"use client";

import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import mercedes from "./big-banner/car.png";
import { motion } from "framer-motion";
import { createClient } from "contentful";
import { useEffect, useState } from "react";

export default function BigBanner() {
  const [collection, setCollection] = useState([]) as any;

  useEffect(() => {
    async function getData() {
      try {
        const client = createClient({
          space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
        });
        const response = (await client.getEntries({
          content_type:
            process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_CAR_RENTAL || "",
        })) as any;

        setCollection(response?.items[0]?.fields);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  if (!collection?.photos?.fields?.file?.url) return null;

  return (
    <section className="relative px-4 py-8 md:px-20 md:py-10">
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* big img */}
      <Image
        alt="Car Wash"
        // src={`/img/1.jpg`}
        src={`https:${collection?.photos?.fields?.file?.url}`}
        fill
        style={{ objectFit: "cover" }}
      />

      {/* content */}
      <div className="box-center relative z-10 h-screen w-full text-white">
        <div className="box-equal w-full flex-col gap-10 md:flex-row">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-left md:w-1/2"
          >
            <p className="mb-2 text-sm">CAR RENTAL</p>

            <h1 className="mb-4 text-5xl font-bold md:text-7xl">
              Trusted Car Rental Center
            </h1>

            <Button color="danger" endContent={<ArrowRight />}>
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="md:w-1/2"
          >
            <Image alt="Mercedes Car" src={mercedes} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
