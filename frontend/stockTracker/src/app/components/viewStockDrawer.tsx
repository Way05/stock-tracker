import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/use-disclosure";

type ViewStockDrawerProps = {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  ticker: string;
  company: string;
};

export default function ViewStockDrawer(props: ViewStockDrawerProps) {
  return (
    <div>
      <Drawer
        isOpen={props.isOpen}
        placement="bottom"
        onOpenChange={props.onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                {props.ticker}
              </DrawerHeader>
              <DrawerBody>
                <p>{props.company}</p>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
