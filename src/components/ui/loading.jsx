"use client";

import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Spinner className="w-12 h-12 text-primary" />
    </div>
  );
}
