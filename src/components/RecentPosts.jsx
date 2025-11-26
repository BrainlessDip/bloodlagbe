"use client";

import { useQuery } from "@tanstack/react-query";
import { PostCard } from "./ui/post-card";
import useAxios from "@/hooks/useAxios";
import Loading from "./ui/loading";

export default function RecentPosts() {
  const api = useAxios();
  const { data: posts = {}, isLoading } = useQuery({
    queryKey: ["home-page-posts"],
    queryFn: async () => {
      const res = await api.get(`/posts`);
      return res.data;
    },
  });
  return (
    <section className="w-full py-24 bg-red-50">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-red-700 text-center">
          Recent Posts From Users
        </h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          Real requests from real people. Every second matters when someone
          needs blood.
        </p>

        {isLoading ? (
          <div className="mt-10">
            <Loading />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
