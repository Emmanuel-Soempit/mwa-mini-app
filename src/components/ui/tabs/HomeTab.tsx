"use client";

import { Button } from "../Button";
import { DiCode } from "react-icons/di";
import { Card } from "../Card";

/**
 * HomeTab component displays the main landing content for the mini app.
 *
 * This is the default tab that users see when they first open the mini app.
 * It provides a simple welcome message and placeholder content that can be
 * customized for specific use cases.
 *
 * @example
 * ```tsx
 * <HomeTab />
 * ```
 */
export function HomeTab() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-200px)] px-6">
      <div className="text-center w-full max-w-md mx-auto">
        <p className="text-lg mb-2">Put your content here!</p>

        <div className="flex flex-col gap-5 my-5">
          <p className="text-lg mb-2">Components Tester</p>
          <Card variant="rainbow-border">
            <Button variant="primary">Continue</Button>
            <Button variant="secondary">Skip for now.</Button>
          </Card>
          <Card variant="soft">
            <Button variant="gray">Rent This Book</Button>
            <Button variant="outline">Rent This Book</Button>
          </Card>
          <Button variant="green" leftIcon={<DiCode />}>
            Feeling Lucky? Reroll Task!
          </Button>
        </div>
        <p className="text-sm text-gray-500">Powered by Neynar 🪐</p>
      </div>
    </div>
  );
}
