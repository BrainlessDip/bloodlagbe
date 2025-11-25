"use client";

import React, { useEffect, useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { ChevronDownIcon } from "lucide-react";
import Loading from "@/components/ui/loading";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const api = useAxiosSecure();

  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await api.get("/me");
      setForm(res.data);
      return res.data;
    },
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSocialChange = (key, value) => {
    setForm({ ...form, social_links: { ...form.social_links, [key]: value } });
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      delete form.email;
      delete form.clerkId;
      delete form.createdAt;

      const res = await api.patch("/me", form);

      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-xl">Manage Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isLoading ? (
            <>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <Input
                    value={form.first_name || ""}
                    onChange={(e) => handleChange("first_name", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <Input
                    value={form.last_name || ""}
                    onChange={(e) => handleChange("last_name", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Blood Group
                </label>
                <Select
                  value={form.blood_group || ""}
                  onValueChange={(value) => handleChange("blood_group", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
                      (bg) => (
                        <SelectItem key={bg} value={bg}>
                          {bg}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-row justify-between items-center gap-2">
                <div>
                  <label className="block text-sm font-medium mb-1 text-center">
                    Total Donation
                  </label>
                  <Input
                    min={0}
                    type="number"
                    className="w-35"
                    value={form.total_donation || ""}
                    onChange={(e) =>
                      handleChange("total_donation", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-center">
                    Last Donation
                  </label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date"
                        className="w-48 justify-between font-normal"
                      >
                        {form.last_donation
                          ? new Date(form.last_donation).toLocaleDateString()
                          : "Select date"}
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={
                          form.last_donation
                            ? new Date(form.last_donation)
                            : undefined
                        }
                        defaultMonth={
                          form.last_donation
                            ? new Date(form.last_donation)
                            : undefined
                        }
                        captionLayout="dropdown"
                        onSelect={(date) => {
                          handleChange("last_donation", date);
                          setOpen(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  value={form.phone_number || ""}
                  onChange={(e) => handleChange("phone_number", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Bio</label>
                <Textarea
                  value={form.bio || ""}
                  onChange={(e) => handleChange("bio", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Location
                </label>
                <Input
                  value={form.location || ""}
                  type="text"
                  onChange={(e) => handleChange("location", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Facebook
                  </label>
                  <Input
                    value={form.social_links?.facebook || ""}
                    onChange={(e) =>
                      handleSocialChange("facebook", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Telegram
                  </label>
                  <Input
                    value={form.social_links?.telegram || ""}
                    onChange={(e) =>
                      handleSocialChange("telegram", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    WhatsApp
                  </label>
                  <Input
                    value={form.social_links?.whatsapp || ""}
                    onChange={(e) =>
                      handleSocialChange("whatsapp", e.target.value)
                    }
                  />
                </div>
              </div>

              <Button
                className="w-full mt-4"
                onClick={handleUpdate}
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Profile"}
              </Button>
            </>
          ) : (
            <Loading />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
