"use client";

import Loading from "@/components/ui/loading";
import UserCard from "@/components/ui/user-card";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const bloodGroups = [
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
];

export default function Page() {
  const api = useAxios();
  const [group, setGroup] = useState("");

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["blood-groups", group],
    queryFn: async () => {
      const res = await api.get(
        `/blood-groups?group=${encodeURIComponent(group)}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <Select
          value={group}
          onValueChange={(value) => {
            setGroup(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select blood group" />
          </SelectTrigger>

          <SelectContent>
            {bloodGroups.map((group) => (
              <SelectItem key={group.value} value={group.value}>
                {group.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {users.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">
            No users found
          </div>
        ) : (
          users.map((user, index) => <UserCard key={index} user={user} />)
        )}
      </div>
    </>
  );
}
