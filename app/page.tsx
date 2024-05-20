import WelcomeMessage from "@/components/Welcome";
import { NavBar } from "@/components/navbar";
export default async function Index() {
  return (
    <>
      <div className="flex-1 w-full">
        <NavBar />
        <div className="animate-in flex-1 flex flex-col gap-20 px-3">
          <WelcomeMessage />
        </div>
      </div>
    </>
  );
}
