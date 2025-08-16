"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/use-disclosure";
import { Input, Textarea } from "@heroui/input";
import { createPost } from "../dashboard/bulletin/actions";

export default function CreatePostDrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Create Post</Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Create Post
              </DrawerHeader>
              <DrawerBody>
                <form id="postForm" action={createPost}>
                  <p>Title</p>
                  <Input
                    id="title"
                    name="title"
                    placeholder="js buy nvda"
                    color="default"
                    variant="bordered"
                  />
                  <p>Content</p>
                  <Textarea
                    id="content"
                    name="content"
                    placeholder="type here"
                    color="default"
                    variant="bordered"
                    minRows={20}
                  />
                </form>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  type="submit"
                  form="postForm"
                  color="primary"
                  onPress={onClose}
                >
                  Submit
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
