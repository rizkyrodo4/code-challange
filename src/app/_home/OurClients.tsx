"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { User } from "./Technicians";
import { Avatar } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function OurClients() {
  const { isPending, data } = useQuery({
    queryKey: ["clients"],
    queryFn: () => axios.get(`https://randomuser.me/api/?results=3`),
  });

  const { results = [] } = data?.data ?? {};

  return (
    <>
      <section className="p-4 md:p-20">
        <div className="mb-10 text-center font-bold">
          <p className="text-sm text-danger">TESTIMONIALS</p>
          <h2 className="text-3xl">Our Clients Say!</h2>
        </div>

        <div className="box-center flex-col gap-10 px-20 pb-10 md:flex-row md:pb-0">
          {isPending
            ? [1, 2, 3].map((num) => (
                <div key={num} className="box-center w-60 flex-col gap-4">
                  <Avatar size="lg" />

                  <div>
                    <div className="mx-auto mb-1 h-4 w-20 rounded bg-gray-300" />
                    <div className="mx-auto h-4 w-10 rounded bg-gray-300" />
                  </div>

                  <div className="w-full bg-danger p-2">
                    <div className="mx-auto mb-1 h-4 w-3/4 rounded bg-red-300" />
                    <div className="mx-auto mb-1 h-4 w-4/5 rounded bg-red-300" />
                    <div className="mx-auto mb-1 h-4 w-5/6 rounded bg-red-300" />
                    <div className="mx-auto h-4 w-2/3 rounded bg-red-300" />
                  </div>
                </div>
              ))
            : null}

          {results.map((res: User) => (
            <motion.div
              key={res.id.value}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="box-center w-60 flex-col gap-4"
            >
              <Avatar size="lg" src={res.picture.large} />

              <div className="text-center">
                <p className="font-bold">
                  {res.name.first} {res.name.last}
                </p>

                <p className="text-gray-500">{res.name.title}</p>
              </div>

              <p className="w-full bg-danger p-2 text-center text-sm text-white">
              The booking process was straightforward, and the vehicle I received was in excellent condition.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
