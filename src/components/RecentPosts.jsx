import { CardDemo, PostCard } from "./ui/post-card";

export default function RecentPosts() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-red-700 text-center">
          Recent Posts From Users
        </h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          Real requests from real people. Every second matters when someone
          needs blood.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
        </div>
      </div>
    </section>
  );
}
