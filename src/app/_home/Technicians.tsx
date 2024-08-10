"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";

export interface User {
  id: { value: string };
  picture: { large: string };
  name: { first: string; last: string; title: string };
}

export default function Technicians() {
  const { isPending, data } = useQuery({
    queryKey: ["technicians"],
    queryFn: () => axios.get(`https://randomuser.me/api/?results=4`),
  });

  const { results = [] } = data?.data ?? {};

  return (
    <>
      <section className="p-4 md:p-20">
        <div className="mb-10 text-center font-bold">
          <p className="text-sm text-danger">OUR TECHNICIANS</p>
          <h2 className="text-3xl">Our Expert Technicians</h2>
        </div>

        <div className="box-center flex-wrap gap-10 pb-10 md:px-20 md:pb-0">
          {isPending
            ? [1, 2, 3, 4].map((num) => (
                <div key={num} className="w-40">
                  <div className="relative h-40 w-40 bg-gray-100" />

                  <div className="bg-gray-200 p-2 text-center text-sm">
                    <div className="mx-auto mb-1 h-4 w-4/5 rounded bg-gray-300" />
                    <div className="mx-auto h-4 w-2/5 rounded bg-gray-300" />
                  </div>
                </div>
              ))
            : null}

          {results.map((res: User, i: number) => (
            <motion.div
              key={`technician-${i}`}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="w-40"
            >
              <div className="relative h-40 w-40 bg-gray-100">
                <Image
                  src={res.picture.large}
                  alt="Avatar"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="bg-gray-200 p-2 text-center text-sm">
                <p className="font-bold">
                  {res.name.first} {res.name.last}
                </p>

                <p className="text-gray-500">{res.name.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
