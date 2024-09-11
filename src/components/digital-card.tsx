/**
 * v0 by Vercel.
 * @see https://v0.dev/t/15v2Zk5aMI8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
export default function DigitalCard() {
  const [isConnected, setIsConnected] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const card = {
    id: "12345678",
    connected: true,
    image: "/placeholder.svg?height=200&width=300",
  };
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <CollapsibleTrigger asChild>
        {!isOpen && (
          <div className="flex items-center justify-between p-4 bg-card rounded-md">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <NfcIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-lg font-semibold">
                  Digital Business Card
                </div>
                <div className="text-muted-foreground">Card ID: {card.id}</div>
              </div>
            </div>
            <Badge
              variant={card.connected ? "default" : "destructive"}
              className="px-3 py-1 text-xs font-medium"
            >
              {card.connected ? "Connected" : "Disconnected"}
            </Badge>
          </div>
        )}
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-2">
        <Card className="w-full max-w-sm p-6 grid gap-6">
          <div
            className="flex items-center justify-between"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <NfcIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xl font-semibold">
                  Digital Business Card
                </div>
                <div className="text-muted-foreground">Card ID: 12345678</div>
              </div>
            </div>
            <Badge
              variant={isConnected ? "default" : "destructive"}
              className="px-3 py-1 text-xs font-medium"
            >
              {isConnected ? "Connected" : "Disconnected"}
            </Badge>
          </div>
          <div>
            <img
              src="/card.png"
              alt="Business Card Image"
              className="rounded-md object-cover w-full aspect-[3/2]"
              width="300"
              height="auto"
            />
          </div>
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsConnected(!isConnected)}
            >
              {isConnected ? (
                <>
                  <UnplugIcon className="mr-2 h-4 w-4" />
                  Disconnect
                </>
              ) : (
                <>
                  <NetworkIcon className="mr-2 h-4 w-4" />
                  Connect
                </>
              )}
            </Button>
            <Button variant="outline" size="sm">
              <ShareIcon className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
}

function NetworkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function NfcIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
      <path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" />
      <path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
      <path d="M16.37 2a20.16 20.16 0 0 1 0 20" />
    </svg>
  );
}

function ShareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function UnplugIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 5 3-3" />
      <path d="m2 22 3-3" />
      <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
      <path d="M7.5 13.5 10 11" />
      <path d="M10.5 16.5 13 14" />
      <path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />
    </svg>
  );
}
// popup content
{
  /* <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">Share</div>
              <Button variant="ghost" size="icon" onClick={() => setIsSharePopoverOpen(false)}>
                <XIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Button variant="ghost" size="icon">
                <FacebookIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <TwitterIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <LinkedinIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <InstagramIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <PhoneIcon className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <CopyIcon className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg"
                alt="QR Code"
                className="rounded-md object-cover w-full aspect-square"
                width="150"
                height="150"
              />
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="sm">
                Download QR Code
              </Button>
            </div> */
}
