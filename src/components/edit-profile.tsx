"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { X, Upload } from "lucide-react";
import { useS3Upload } from "@/hooks/useS3Upload";
import ProfilePage from "./user-profile";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  company: z.string().min(2, "Company/College must be at least 2 characters"),
  title: z.string().min(2, "Title must be at least 2 characters"),
  website: z.string().url().optional().or(z.literal("")),
  about: z.string().max(500, "About must not exceed 500 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(
      /^\d{3}-\d{3}-\d{4}$/,
      "Phone number must be in the format XXX-XXX-XXXX"
    ),
  profilePicture: z.string().url().optional().or(z.literal("")),
  bannerPicture: z.string().url().optional().or(z.literal("")),
  socialLinks: z.array(
    z.object({
      platform: z.string(),
      url: z.string().url("Invalid URL"),
    })
  ),
});

type FormValues = z.infer<typeof formSchema>;

const platforms = ["Twitter", "Facebook", "LinkedIn", "Instagram", "GitHub"];

const EditProfile: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      title: "",
      website: "",
      about: "",
      email: "",
      phone: "",
      socialLinks: [],
    },
  });

  const [previewData, setPreviewData] = useState<FormValues>(form.getValues());

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // Handle form submission here
  };

  const addSocialLink = () => {
    const currentLinks = form.getValues("socialLinks");
    form.setValue("socialLinks", [
      ...currentLinks,
      { platform: platforms[0], url: "" },
    ]);
  };

  const removeSocialLink = (index: number) => {
    const currentLinks = form.getValues("socialLinks");
    form.setValue(
      "socialLinks",
      currentLinks.filter((_, i) => i !== index)
    );
  };

  const { uploadToS3 } = useS3Upload();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>, field: "profilePicture" | "bannerPicture") => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const url = await uploadToS3(file, field);
        form.setValue(field, url);
        handleFormChange();
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleFormChange = () => {
    setPreviewData(form.getValues());
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2"
      >
        <Card className="w-full border rounded-xl">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Update your profile information. This will be displayed publicly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleFormChange} className="space-y-8">
                <FormField
                  control={form.control}
                  name="profilePicture"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profile Picture</FormLabel>
                      <FormControl>
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-24 h-24">
                            <AvatarImage src={field.value || "/placeholder-profile.jpg"} />
                            <AvatarFallback>
                              {field.value ? null : (
                                <Upload className="w-8 h-8 text-gray-400" />
                              )}
                            </AvatarFallback>
                          </Avatar>
                          <Button
                            onClick={() => {
                              const input = document.getElementById("profilePictureInput") as HTMLInputElement;
                              if (input) input.click();
                            }}
                            variant="outline"
                            type="button"
                          >
                            Choose Image
                          </Button>
                          <Input
                            id="profilePictureInput"
                            type="file"
                            className="hidden"
                            onChange={(e) => handleFileChange(e, "profilePicture")}
                            accept="image/*"
                          />
                        </div>
                      </FormControl>
                      <FormDescription>
                        Upload a profile picture (PNG, JPG, GIF up to 10MB)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bannerPicture"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Banner Picture</FormLabel>
                      <FormControl>
                        <div className="space-y-4">
                          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
                            {field.value ? (
                              <>
                                <img
                                  src={field.value}
                                  alt="Banner preview"
                                  className="w-full h-full object-cover"
                                />
                                <button
                                  onClick={() => {
                                    form.setValue("bannerPicture", "");
                                    handleFormChange();
                                  }}
                                  className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
                                  type="button"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </>
                            ) : (
                              <div className="flex items-center justify-center h-full text-gray-400">
                                No banner image
                              </div>
                            )}
                          </div>
                          <Button
                            onClick={() => {
                              const input = document.getElementById("bannerPictureInput") as HTMLInputElement;
                              if (input) input.click();
                            }}
                            variant="outline"
                            className="w-full"
                            type="button"
                          >
                            {field.value ? "Change Banner" : "Upload Banner"}
                          </Button>
                          <Input
                            id="bannerPictureInput"
                            type="file"
                            className="hidden"
                            onChange={(e) => handleFileChange(e, "bannerPicture")}
                            accept="image/*"
                          />
                        </div>
                      </FormControl>
                      <FormDescription>
                        Upload a banner picture (PNG, JPG, GIF up to 10MB)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company/College</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="CEO/Student/Developer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="about"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>About</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write a few sentences about yourself"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Write a few sentences about yourself.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john.doe@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="555-555-5555" {...field} />
                      </FormControl>
                      <FormDescription>Format: XXX-XXX-XXXX</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <FormLabel>Social Media Profiles</FormLabel>
                  {form.watch("socialLinks").map((link, index) => (
                    <div key={index} className="flex items-center space-x-2 mt-2">
                      <Select
                        onValueChange={(value) =>
                          form.setValue(`socialLinks.${index}.platform`, value)
                        }
                        defaultValue={link.platform}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                        <SelectContent>
                          {platforms.map((platform) => (
                            <SelectItem key={platform} value={platform}>
                              {platform}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        placeholder="URL"
                        {...form.register(`socialLinks.${index}.url`)}
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => removeSocialLink(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button type="button" onClick={addSocialLink} className="mt-2">
                    Add Social Profile
                  </Button>
                </div>

                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button">Cancel</Button>
                  <Button type="submit">Save Changes</Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2"
      >
        <ProfilePage profile={previewData} />
      </motion.div>
    </div>
  );
};

export default EditProfile;
