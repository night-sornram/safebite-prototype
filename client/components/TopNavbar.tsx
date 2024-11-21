"use client";

import {
  Button,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";

export default function TopNavbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Navbar shouldHideOnScroll className="shadow-md">
      <NavbarBrand>
        <div className="flex flex-row gap-2 items-center">
          <Image src="/safebite-logo.svg" width={40} height={40} />
          <h2 className="">
            <span className="font-extrabold text-blue-600">Safe</span>bite
          </h2>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#intro">
            Intro
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#advantage">
            Benefit
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#feature">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#product">
            Product
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem className="hidden">
          <Button as={Link} color="default" href="#" variant="flat">
            <h5>Sign Up</h5>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
