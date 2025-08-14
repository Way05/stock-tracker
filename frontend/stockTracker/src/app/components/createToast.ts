import { addToast } from "@heroui/toast";

export function createToast(
  msg: string,
  clr:
    | "default"
    | "foreground"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined,
) {
  addToast({
    title: msg,
    color: clr,
  });
}
