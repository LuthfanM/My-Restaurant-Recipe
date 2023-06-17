import "../config/interceptors";
import MyComponent from "@/components/main/MyComponent";
import ContainerApp from "@/components/screens/ContainerApp";
import NotificationProvider from "@/components/providers/NotificationProvider";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <ContainerApp>
      <NotificationProvider>
        <MyComponent />
      </NotificationProvider>
      <Toaster />
    </ContainerApp>
  );
}
