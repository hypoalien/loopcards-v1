import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
// import { CommandMenu } from "@/components/command-menu";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
// import { ModeToggle } from "@/components/mode-toggle"
import { Button, buttonVariants } from "@/components/ui/button";
import { SiteBanner } from "./site-banner";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* <SiteBanner /> */}
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none  ">
            {/* <CommandMenu /> */}
            <Link href={"/contact-us"}>
              {" "}
              <Button className="hidden md:block" variant={"default"}>
                {" "}
                Schedule a Consultation{" "}
              </Button>
            </Link>
            <Link
              href="/"
              className="mr-4 flex items-center space-x-2 lg:mr-6 justify-center md:hidden "
            >
              <Icons.logo className="h-6 w-6" />
              <span className="font-bold  text-nowrap">{siteConfig.name}</span>
            </Link>
          </div>
          <nav className="flex items-center">
            {/* add Links if needed */}
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "h-8 w-8 px-0"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "h-8 w-8 px-0"
                )}
              >
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link> */}
            {/* <ModeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
