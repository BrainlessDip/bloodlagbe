"use client";

import Loading from "@/components/ui/loading";
import UserCard from "@/components/ui/user-card";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";

export default function Page() {
  const api = useAxios();
  const pathname = usePathname();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["blood-groups", pathname],
    queryFn: async () => {
      const res = await api.get("/blood-groups");
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
    <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}
