"use client";

import React from "react";
import { Card, CardBody, Image, Slider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export default function App() {
  const [liked, setLiked] = React.useState(false);

  const variants = ["flat", "bordered", "underlined", "faded"];

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-full"
      shadow="sm"
    >
      <CardBody>
        <div className="grid md:grid-cols-3 gap-6  items-center justify-center">
          <div className="flex w-max-[10px] flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="email"
              variant="bordered"
              label="Email"
              placeholder="Paste the URL here"
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="email"
              variant="bordered"
              label="Email"
              placeholder="Paste the URL here"
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="email"
              variant="bordered"
              label="Email"
              placeholder="Paste the URL here"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
