'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
    className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={"#"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
            </Link>
            <MenuItem
            setActive={setActive} active={active} item="My Projects"
            >
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/projects">
               All Projects
               </HoveredLink>
            <HoveredLink href="/projects">
              Blogging Website
            </HoveredLink>
            <HoveredLink href="/projects">
              E-commerce Store
            </HoveredLink>
            <HoveredLink href="/projects">
            Profile Cards
            </HoveredLink>
            <HoveredLink href="/projects">
            Interactive Carousel
            </HoveredLink>
               </div>
            </MenuItem>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Me">
            </MenuItem>
            </Link>
            <Link href={"/About Me"}>
            <MenuItem setActive={setActive} active={active} item="About Me">
            </MenuItem>
            </Link>
        </Menu>
        </div>
    )
}

export default Navbar