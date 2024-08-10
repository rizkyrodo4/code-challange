"use client";

import Image from "next/image";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

interface CustomBreadcrumbProp {
  title: string;
  img: string;
}

export default function CustomBreadcrumb(props: CustomBreadcrumbProp) {
  const path = usePathname();

  return (
    <>
      <section className="relative px-20 py-10">
        <div className="absolute inset-0 z-10 bg-black/80" />

        {/* big img */}
        <Image
          alt={props.title}
          src={props.img}
          fill
          style={{ objectFit: "cover" }}
        />

        {/* content */}
        <div className="box-center relative z-10 h-52 w-full pt-16 text-white">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-bold">{props.title}</h1>

            <div className="box-center">
              <Breadcrumbs color="danger">
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href={path}>{props.title}</BreadcrumbItem>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
