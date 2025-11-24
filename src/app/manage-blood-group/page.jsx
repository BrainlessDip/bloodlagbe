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
import { toast } from "sonner";

export default function Page() {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const api = useAxiosSecure();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/me");
        setProfile(res.data);
        setForm(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, [api]);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSocialChange = (key, value) => {
    setForm({ ...form, social_links: { ...form.social_links, [key]: value } });
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await api.patch("/me", form);
      setProfile(res.data);
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-xl">Manage Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {profile ? (
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
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input value={form.email || ""} disabled />
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
            <p className="text-center font-bold text-3xl">Loading profile...</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
