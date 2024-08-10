"use client";

import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import CustomGmap from "./_components/CustomGmap";
import { Chip } from "@nextui-org/react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <main>
        <CustomBreadcrumb title="Contact" img="/img/4.jpg" />

        <section className="p-4 md:p-20">
          <div className="mb-8 mt-8 text-center md:mt-0">
            <p className="mb-2 text-sm font-bold text-danger">CONTACT US</p>
            <h2 className="text-3xl font-bold">Contact For Any Query</h2>
          </div>

          <div className="box-center flex-col gap-10 px-4 pb-8 md:flex-row md:px-20 md:pb-0">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="h-96 w-full md:w-1/2"
            >
              <CustomGmap />
            </motion.div>

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="w-full md:w-1/2"
            >
              {"booking,general,technical".split(",").map((str) => (
                <div key={str} className="mb-4 bg-gray-100 p-4">
                  <p className="mb-2 font-bold uppercase">{str}</p>

                  <Chip
                    className="gap-2"
                    variant="light"
                    startContent={<Mail color="red" />}
                  >
                    {str}@example.com
                  </Chip>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
