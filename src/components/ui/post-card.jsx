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

export function PostCard() {
  return (
    <Card className="w-full max-w-sm hover:shadow-md">
      <CardHeader>
        <CardTitle>Dip Dey</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>thnaks kichu din age donnate korlam</CardDescription>
        <div className="flex justify-center mt-5">
          <Button
            type="submit"
            className="w-fit cursor-pointer bg-red-500 hover:bg-red-900"
          >
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
