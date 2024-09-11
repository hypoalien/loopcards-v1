import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ProfilePreviewProps {
  data: {
    firstName: string;
    lastName: string;
    company: string;
    title: string;
    website: string;
    about: string;
    email: string;
    phone: string;
    profilePicture?: string;
    bannerPicture?: string;
    socialLinks: { platform: string; username: string }[];
  };
}

const ProfilePreview: React.FC<ProfilePreviewProps> = ({ data }) => {
  return (
    <Card className="w-full border rounded-xl overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-32 bg-gray-200"
      >
        {data.bannerPicture && (
          <img
            src={data.bannerPicture}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>
      <CardHeader className="relative">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -top-16 left-4"
        >
          <Avatar className="w-32 h-32 border-4 border-white">
            <AvatarImage src={data.profilePicture} />
            <AvatarFallback>{data.firstName[0]}{data.lastName[0]}</AvatarFallback>
          </Avatar>
        </motion.div>
        <CardTitle className="mt-16">{data.firstName} {data.lastName}</CardTitle>
        <p className="text-sm text-gray-500">{data.title} at {data.company}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="font-semibold">About</h3>
          <p className="text-sm">{data.about}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="font-semibold">Contact</h3>
          <p className="text-sm">{data.email}</p>
          <p className="text-sm">{data.phone}</p>
          {data.website && (
            <a href={data.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
              {data.website}
            </a>
          )}
        </motion.div>
        {data.socialLinks.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="font-semibold">Social Media</h3>
            <ul className="text-sm">
              {data.socialLinks.map((link, index) => (
                <li key={index}>
                  {link.platform}: {link.username}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfilePreview;