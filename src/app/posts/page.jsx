"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDistanceToNow } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "@/components/ui/loading";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Profile() {
  const api = useAxiosSecure();

  const [newPost, setNewPost] = useState("");
  const [posting, setPosting] = useState(false);

  const {
    data: posts = [],
    isLoading: postsLoading,
    refetch,
  } = useQuery({
    queryKey: ["user-posts"],
    queryFn: async () => {
      const res = await api.get(`/me/posts`);
      return res.data;
    },
  });

  const handlePostSubmit = async () => {
    if (!newPost.trim()) return;

    try {
      setPosting(true);
      const res = await api.post("/posts", { content: newPost });
      toast.success(res.data.message);
      setNewPost("");
      refetch();
    } catch (err) {
      console.error(err);
    } finally {
      setPosting(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center p-4 gap-6">
      <h3 className="text-lg font-semibold">Recent Posts</h3>
      <Card className="w-full max-w-md rounded-2xl shadow-md p-4">
        <div className="grid w-full gap-2">
          <Textarea
            className="w-full border rounded-md p-2 mb-2"
            rows={3}
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Type your message here."
          />
          <Button
            className="text-white px-4 py-2 rounded-md"
            onClick={handlePostSubmit}
            disabled={posting}
          >
            {posting ? "Posting..." : "Post"}
          </Button>
        </div>
      </Card>

      <Card className="w-full max-w-md rounded-2xl shadow-md p-4 flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Recent Posts</h3>
        <Separator />
        {postsLoading ? (
          <Loading />
        ) : posts.length ? (
          posts.map((post) => (
            <Card key={post.id} className="p-3 rounded-lg border">
              <p>{post.content}</p>
              <span className="text-xs text-gray-500">
                {new Date(post.createdAt).toLocaleString()} (
                {formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true,
                })}
                )
              </span>
            </Card>
          ))
        ) : (
          <p className="text-gray-500">No posts yet.</p>
        )}
      </Card>
    </div>
  );
}
