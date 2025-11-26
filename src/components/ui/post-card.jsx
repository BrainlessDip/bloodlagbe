import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function PostCard({ post }) {
  return (
    <Card className="w-full max-w-md bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <CardTitle className="text-lg font-semibold text-gray-900 ">
          <Link href={`profile/${post?.clerkId}`}>
            {post?.first_name} {post?.last_name}
          </Link>
        </CardTitle>
        <span className="text-sm text-gray-500 ">
          {new Date(post?.createdAt).toLocaleDateString()}
        </span>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-gray-700 ">
          {post?.content}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
