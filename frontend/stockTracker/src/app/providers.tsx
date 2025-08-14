import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ToastProvider placement="top-center" toastOffset={50} />
      {children}
    </HeroUIProvider>
  );
}
