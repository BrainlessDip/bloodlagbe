import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

export default function UserCard({ user }) {
  return (
    <Card className="w-full max-w-sm shadow-lg border border-gray-200 rounded-2xl overflow-hidden">
      <CardHeader className="flex justify-between items-center bg-gray-50 px-4 py-3">
        <div>
          <CardTitle className="text-lg font-semibold">
            {user?.first_name} {user?.last_name}
          </CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Last donation: {new Date(user?.last_donation).toLocaleDateString()}
          </CardDescription>
        </div>
        <Badge
          variant="destructive"
          className="p-2 rounded-full font-bold text-sm"
        >
          {user?.blood_group}
        </Badge>
      </CardHeader>

      <CardContent className="px-4 py-3 space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-700">Phone:</span>
          <span className="text-gray-500">{user?.phone_number}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-700">Last Donation:</span>
          <span className="text-gray-500">
            {formatDistanceToNow(user?.last_donation, { addSuffix: true })}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-700">Location:</span>
          <span className="text-gray-500">{user?.location}</span>
        </div>
      </CardContent>

      <CardFooter className="px-4 py-3 bg-gray-50 flex justify-end">
        <Button variant="outline" size="sm">
          View
        </Button>
      </CardFooter>
    </Card>
  );
}
