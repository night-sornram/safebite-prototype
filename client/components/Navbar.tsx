"use client";

import { Button, Card, Divider, Image, Link } from "@nextui-org/react";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  return (
    <Card
      className="col-span-full bg-gradient-to-l from-primary-500 to-slate-100 sm:to-white sm:p-20 p-10"
      shadow="none"
      isBlurred
    >
      <div className="flex items-center gap-2">
        <Image src={"/safebite-logo.svg"} width={60} height={52} alt="logo" />
        <h2 className="font-extrabold">
          <span className="text-blue-600">Safe</span>bite
        </h2>
      </div>
      <div className=" grid-cols-1 hidden sm:grid-cols-5 max-w-screen-lg sm:max-w-screen-xl mx-auto gap-5">
        <div className="col-span-full justify-start sm:pb-10">
          <div className="flex items-center gap-2">
            <Image
              src={"/safebite-logo.svg"}
              width={60}
              height={52}
              alt="logo"
            />
            <h2 className="font-extrabold">
              <span className="text-blue-600">Safe</span>bite
            </h2>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 flex flex-col gap-4 h-auto">
          <div className="flex gap-2">
            <MapPin size={36} />
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </h5>
          </div>
        </div>
        <div className="col-span-1 gap-3  flex flex-col">
          <div className=" flex flex-row gap-3 items-center">
            <PhoneCall size={16} />
            <h5>+66-12-345-6789</h5>
          </div>
          <div className=" flex flex-row items-center gap-3">
            <Mail size={16} />
            <div className="">example@fylo.com</div>
          </div>
        </div>
        <div className="  col-span-1 gap-5 flex flex-col">
          <Link href={"#"} className="hover:underline text-slate-600">
            <h5>About Us</h5>
          </Link>
          <Link href={"#"} className="hover:underline text-slate-600">
            <h5>Jobs</h5>
          </Link>
          <Link href={"#"} className="hover:underline text-slate-600">
            <h5>Press</h5>
          </Link>
          <Link href={"#"} className="hover:underline text-slate-600">
            <h5>Blog</h5>
          </Link>
        </div>
        <div className=" col-span-1 flex gap-5 flex-col">
          <Link href={"#"} className="hover:underline text-slate-600">
            Contact Us
          </Link>
          <Link href={"#"} className="hover:underline text-slate-600">
            Term
          </Link>
          <Link href={"#"} className="hover:underline text-slate-600">
            Policy
          </Link>
        </div>
        <div className="col-span-full flex">
          <Divider />
        </div>
        <div className=" col-span-1 flex">
          <div className="flex gap-5">
            <Button
              startContent={<Facebook />}
              variant="flat"
              radius="full"
              color="default"
              isIconOnly
            ></Button>
            <Button
              startContent={<Instagram />}
              variant="flat"
              radius="full"
              color="default"
              isIconOnly
            ></Button>
            <Button
              startContent={<Twitter />}
              variant="flat"
              radius="full"
              color="default"
              isIconOnly
            ></Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
