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
          <Link color="foreground" href="#">
            Intro
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Advantage
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="default" href="#" variant="flat">
            <h5>Sign Up</h5>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
