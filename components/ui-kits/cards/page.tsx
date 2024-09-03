"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { selectedItemsState } from "../../../recoil/atoms";

import { Card, CardBody } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const items = [
  { key: "school", value: "School" },
  { key: "bicycle", value: "Bicycle" },
  { key: "elephant", value: "Elephant" },
  { key: "umbrella", value: "Umbrella" },
  { key: "guitar", value: "Guitar" },
  { key: "telescope", value: "Telescope" },
  { key: "pineapple", value: "Pineapple" },
  { key: "lighthouse", value: "Lighthouse" },
  { key: "volcano", value: "Volcano" },
  { key: "butterfly", value: "Butterfly" },
  { key: "cactus", value: "Cactus" },
  { key: "submarine", value: "Submarine" },
  { key: "kangaroo", value: "Kangaroo" },
  { key: "typewriter", value: "Typewriter" },
  { key: "tornado", value: "Tornado" },
  { key: "igloo", value: "Igloo" },
  { key: "flamingo", value: "Flamingo" },
  { key: "waterfall", value: "Waterfall" },
  { key: "zeppelin", value: "Zeppelin" },
  { key: "octopus", value: "Octopus" },
];

export default function App() {
  const [selectedKeys, setSelectedKeys] = useRecoilState(selectedItemsState);

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleSelectionChange = (keys: any) => {
    setSelectedKeys(new Set(keys));
  };

  const clearSelection = () => {
    setSelectedKeys(new Set());
  };

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-full"
      shadow="sm"
    >
      <CardBody>
        <div className="flex gap-6 items-end justify-start">
          <div className="flex-1 w-100">
            <Input
              type="url"
              variant="bordered"
              label="URL"
              placeholder="Paste URL here"
            />
          </div>
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="capitalize flex-initial w-64"
              >
                {Array.from(selectedKeys).join(", ") || "Choose an item"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Multiple selection example"
              variant="flat"
              closeOnSelect={false}
              disallowEmptySelection
              selectionMode="multiple"
              selectedKeys={selectedKeys}
              onSelectionChange={handleSelectionChange}
              style={{ maxHeight: "200px", overflowY: "scroll" }}
            >
              {items.map((item) => (
                <DropdownItem key={item.key}>{item.value}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Button
            className="flex-none w-14"
            variant="bordered"
            onClick={clearSelection}
          >
            Clear
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
