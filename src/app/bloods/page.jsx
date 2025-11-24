"use client";

import UserCard from "@/components/ui/user-card";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";

export default function Page() {
  const [users, setUsers] = useState([]);
  const api = useAxios();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/blood-groups");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchProfile();
  }, [api]);
  return (
    <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 ">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}
