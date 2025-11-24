"use client";

import * as React from "react";
import Link from "next/link";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/nextjs";
import Image from "next/image";

const bloodGroups = [
  {
    title: "A+",
    href: "/blood/a-plus",
    description:
      "Compatible with A+ and AB+ recipients. Common and widely donated.",
  },
  {
    title: "A-",
    href: "/blood/a-minus",
    description:
      "Can donate to A and AB groups. Useful for emergency blood stocks.",
  },
  {
    title: "B+",
    href: "/blood/b-plus",
    description:
      "Can donate to B+ and AB+. Fairly common in South Asian populations.",
  },
  {
    title: "B-",
    href: "/blood/b-minus",
    description:
      "Rare type, compatible with B and AB groups. Highly valuable for banks.",
  },
  {
    title: "O+",
    href: "/blood/o-plus",
    description:
      "Most common type worldwide. Can donate to any positive blood group.",
  },
  {
    title: "O-",
    href: "/blood/o-minus",
    description:
      "Universal donor for all groups. Critical in emergency medicine.",
  },
  {
    title: "AB+",
    href: "/blood/ab-plus",
    description: "Universal plasma donor. Can receive blood from all groups.",
  },
  {
    title: "AB-",
    href: "/blood/ab-minus",
    description: "Very rare group. Can donate to AB- and AB+ recipients.",
  },
];

export function Navbar() {
  const isMobile = useIsMobile();
  const { signOut } = useClerk();
  const { user } = useUser();
  return (
    <NavigationMenu
      viewport={isMobile}
      className="max-w-7xl mx-auto p-3 sticky top-0 z-50"
    >
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      Blood Lagbe ?
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      A simple way to request and find blood donors in Gouripur.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="About">
                This site is developed by Dip (aka Brainless Dip) for learning
                purposes
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <SignedOut>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={"/login"}>Login</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={"/register"}>Register</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </SignedOut>

        <SignedIn>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <NavigationMenuItem>
                <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="from-muted/50 to-muted flex h-full w-full flex-col items-center rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                          href="/"
                        >
                          {user?.hasImage ? (
                            <img
                              src={user.imageUrl}
                              alt={user.fullName || "User image"}
                              width={48}
                              height={48}
                              className="rounded-full object-cover"
                            />
                          ) : null}
                          <div className="mb-2 text-lg font-medium sm:mt-4">
                            {user?.fullName}
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            {user?.emailAddresses[0]?.emailAddress}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <ListItem
                        href="#"
                        title="Logout"
                        onClick={(e) => {
                          e.preventDefault();
                          signOut();
                        }}
                      ></ListItem>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={"/manage-blood-group"}>Manage Blood Group</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </SignedIn>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Find Blood Group</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {bloodGroups.map((group) => (
                <ListItem
                  key={group.title}
                  title={group.title}
                  href={group.href}
                >
                  {group.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
