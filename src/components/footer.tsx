"use client";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle, XCircle, Loader2, Mail } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import React from "react";
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

export function Footer() {
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Simulated axios call
      // await axios.post('https://api.example.com/subscribe', data);
      console.log(data);
      toast("Subscribed", {
        description: "You've successfully subscribed to our newsletter.",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      });
      form.reset();
    } catch (error) {
      console.error("Error subscribing:", error);
      toast("Error!", {
        description: "There was an error subscribing. Please try again.",
        icon: <XCircle className="h-5 w-5 text-red-500" />,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center items-center gap-2 text-foreground sm:justify-start">
              <Icons.logo className="h-8 w-8" />

              <h2 className="text-2xl font-bold">{siteConfig.name}</h2>
            </div>
            {/* <Link
              href="/"
              className="mr-4 flex items-center space-x-2 lg:mr-6  "
            >
              <Icons.logo className="h-6 w-6" />
              <span className="font-bold  text-nowrap">{siteConfig.name}</span>
            </Link> */}

            <p className="mt-6 max-w-md text-center leading-relaxed text-muted-foreground sm:max-w-xs sm:text-left">
              Building dreams, one project at a time. Quality construction
              services for residential and commercial needs.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-foreground">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-muted-foreground transition hover:text-foreground"
                    href="#"
                  >
                    Company History
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted-foreground transition hover:text-foreground"
                    href="#"
                  >
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted-foreground transition hover:text-foreground"
                    href="#"
                  >
                    Employee Handbook
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted-foreground transition hover:text-foreground"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-foreground">
                Our Services
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-muted-foreground transition hover:text-foreground"
                    href="#"
                  >
                    Residential Construction
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted-foreground transition hover:text-foreground"
                    href="#"
                  >
                    Commercial Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted-foreground transition hover:text-foreground"
                    href="#"
                  >
                    Renovations
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted-foreground transition hover:text-foreground"
                    href="#"
                  >
                    Project Management
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-foreground">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-muted-foreground transition hover:text-foreground"
                    href="#"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted-foreground transition hover:text-foreground"
                    href="#"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted-foreground transition hover:text-foreground"
                    href="/contact"
                  >
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:gap-8 sm:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 XYZ constructions. All rights reserved.
            </p>
            <ul className="flex gap-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition hover:opacity-75"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition hover:opacity-75"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition hover:opacity-75"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="mt-8 flex justify-center sm:mt-0">
            <form className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="min-w-0"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div> */}
          <div className="mt-8 flex justify-center sm:mt-0">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full max-w-md gap-2"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }: any) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="min-w-0"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Subscribe
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </footer>
  );
}
