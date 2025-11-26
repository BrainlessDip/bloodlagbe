"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-red-50 text-red-900 mt-10">
      <h1 className="text-center text-3xl font-bold pt-4">Blood Lagbe</h1>
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-red-100 border-none shadow-none">
          <CardContent>
            <CardTitle className="text-lg font-bold">Quick Links</CardTitle>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Button variant="link" className="p-0 hover:underline">
                  Home
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 hover:underline">
                  Donate Blood
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 hover:underline">
                  Request Blood
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 hover:underline">
                  About Us
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-red-100 border-none shadow-none">
          <CardContent>
            <CardTitle className="text-lg font-bold">Contact</CardTitle>
            <p className="mt-2 text-sm">
              Email:{" "}
              <a href="mailto:info@bloodlagbe.com" className="underline">
                info@bloodlagbe.com
              </a>
            </p>
            <p className="mt-1 text-sm">Phone: 01789239238984</p>
            <p className="mt-1 text-sm">Address: Gouripur, Mymensingh</p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-4" />

      <p className="text-center text-sm text-red-800 pb-4">
        &copy; {new Date().getFullYear()} BloodLagbe. All rights reserved.
      </p>
    </footer>
  );
}
