"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { UserAuthForm } from "@/components/user-auth-form";
import { auth } from "@/auth";
import { redirect, useRouter } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import Image from "next/image";
import { LockClosedIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { AlertTriangle } from "lucide-react";
import axios from "axios";

// export const metadata = {
//   title: "Create an account",
//   description: "Create an account to get started.",
// };

export default function Activate() {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      const token = new URLSearchParams(window.location.search).get("token");
      console.log("tokebn", token);
      if (!token) {
        throw new Error("Token not found");
      }

      if (session?.user) {
        // Make axios call to the backend with userId
        await axios.post("/api/your-endpoint", {
          userId: session.user.id,
          token: token,
        });
        toast.success("Card activated successfully");
      } else {
        // Redirect to login page if user is not authenticated
        window.location.href = `/login?token=${token}`;
      }
    } catch (error) {
      toast.error("Error", {
        description:
          error instanceof Error ? error.message : "An unknown error occurred",
        icon: <AlertTriangle className="text-red-500" />,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-background to-secondary">
      <Card className="w-full max-w-lg shadow-xl">
        <CardHeader className="text-center space-y-1">
          <div className="flex items-center justify-center space-x-2">
            <Image
              src="/logo.png"
              alt="Loop Cards"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <h2 className="text-3xl font-bold tracking-tight">Loopcards</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Activate your card and start enjoying the benefits
          </p>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="relative w-full aspect-[1.586/1] overflow-hidden rounded-xl shadow-md">
            <Image
              src="/card.png"
              alt="Credit Card"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <button
              type="submit"
              className={cn(buttonVariants({ variant: "default" }), "w-full")}
              disabled={isLoading}
            >
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <LockClosedIcon className="mr-2 h-4 w-4" />
              )}{" "}
              Activate your card
            </button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the terms and conditions
            </label>
          </div>
          <Button variant="link" className="text-sm p-0 h-auto">
            Need help?
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
