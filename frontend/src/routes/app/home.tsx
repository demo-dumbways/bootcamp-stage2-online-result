import { AuthProvider } from "../../context/auth";
import { Feeds } from "../../features/home/components/feeds";
import RightPanel from "../../features/home/components/right-panel";

export default function HomeRoute() {
  return (
    <AuthProvider>
      <Feeds />
      <RightPanel />
    </AuthProvider>
  );
}