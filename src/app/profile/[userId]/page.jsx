"use client";

import useAxios from "@/hooks/useAxios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { formatDistanceToNow } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/ui/loading";
import { usePathname } from "next/navigation";

export default function Profile({ params }) {
  const api = useAxios();
  const pathname = usePathname();

  const { data: profile = {}, isLoading } = useQuery({
    queryKey: ["user-profile", pathname],
    queryFn: async () => {
      const { userId } = await params;
      const res = await api.get(`/profile/${userId}`);
      return res.data;
    },
  });

  return (
    <div className="w-full flex justify-center p-4">
      <Card className="w-full max-w-md rounded-2xl shadow-md">
        {!isLoading ? (
          <>
            <CardHeader className="flex flex-col items-center gap-3">
              <Avatar className="w-20 h-20">
                <AvatarImage src={profile?.imageUrl} />
                <AvatarFallback className="text-xl font-bold">
                  {profile?.first_name}
                </AvatarFallback>
              </Avatar>

              <CardTitle className="text-xl font-semibold text-center">
                {profile?.first_name} {profile?.last_name}
              </CardTitle>
              <CardDescription className="text-center text-sm opacity-80">
                Total donations: {profile?.total_donation}
                <br />
                Last donation:{" "}
                {new Date(profile?.last_donation).toLocaleString("en-US", {
                  dateStyle: "medium",
                })}{" "}
                (
                {profile?.last_donation
                  ? formatDistanceToNow(new Date(profile.last_donation), {
                      addSuffix: true,
                    })
                  : ""}
                )
                <br />
                Last Active:{" "}
                {new Date(profile?.last_active_at).toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}{" "}
                (
                {profile?.last_active_at
                  ? formatDistanceToNow(new Date(profile.last_active_at), {
                      addSuffix: true,
                    })
                  : ""}
                )
                <br />
                Last Sign In:{" "}
                {new Date(profile?.last_sign_in_at).toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}{" "}
                (
                {profile?.last_sign_in_at
                  ? formatDistanceToNow(new Date(profile.last_sign_in_at), {
                      addSuffix: true,
                    })
                  : ""}
                )
              </CardDescription>
            </CardHeader>
            <Separator className="my-1" />
            <CardDescription className="text-center text-2xl">
              <span className="text-black">{profile?.bio || "N/A"}</span>
            </CardDescription>
            <Separator className="my-1" />

            <CardContent className="flex flex-col gap-4 text-sm">
              <div className="flex flex-col">
                <span className="font-semibold">Email:</span>
                <span>{profile?.email || "No email available"}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold">Blood Group:</span>
                <span>{profile?.blood_group || "N/A"}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold">Phone:</span>
                <span>{profile?.phone_number || "N/A"}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold">Location:</span>
                <span>{profile?.location || "N/A"}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold">Joined:</span>
                <span>
                  {profile?.createdAt
                    ? new Date(profile.createdAt).toLocaleString("en-US", {
                        dateStyle: "medium",
                      })
                    : "Unknown"}{" "}
                  (
                  {profile?.createdAt
                    ? formatDistanceToNow(new Date(profile.createdAt), {
                        addSuffix: true,
                      })
                    : ""}
                  )
                </span>
              </div>
            </CardContent>
          </>
        ) : (
          <Loading />
        )}
      </Card>
    </div>
  );
}
