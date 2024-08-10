"use client";

import { Button } from "@nextui-org/react";
import { ArrowRight, Car, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CustomHeader() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* mobile */}
      <nav className="box-between fixed inset-x-0 top-0 z-30 bg-white p-2 shadow-lg">
        <Button
          color="danger"
          variant="light"
          startContent={<Car />}
          className="text-xl font-bold"
          size="sm"
        >
          Car Rental
        </Button>

        <Button
          variant="light"
          size="sm"
          isIconOnly
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <Menu />
        </Button>
      </nav>

      {mobileMenu ? (
        <div className="fixed inset-x-0 top-12 z-30 h-screen bg-white">
          <div className="flex flex-col gap-4 p-4">
            {links.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className="text-sm font-bold tracking-widest"
                onClick={() => setMobileMenu(false)}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      {/* desktop */}
      <nav className="fixed inset-x-0 top-0 z-30 hidden items-center justify-between bg-white px-8 py-4 shadow-lg md:flex">
        <Button
          color="danger"
          variant="light"
          startContent={<Car />}
          className="text-xl font-bold"
        >
          Car Rental
        </Button>

        <div className="box-equal gap-4">
          {links.map((link) => (
            <Link
              key={link.link}
              href={link.link}
              className="text-sm font-bold tracking-widest"
            >
              {link.name.toUpperCase()}
            </Link>
          ))}

          <Button
            color="danger"
            className="ml-8 font-bold"
            endContent={<ArrowRight />}
          >
            Order
          </Button>
        </div>
      </nav>
    </>
  );
}

const links = [
  { name: "home", link: "/" },
  { name: "about", link: "/about" },
  { name: "services", link: "/services" },
  { name: "contact", link: "/contact" },
];
