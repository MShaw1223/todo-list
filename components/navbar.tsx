import AuthButton from "./AuthButton";
import { ModeToggle } from "./ui/toggle";

export const NavBar = () => {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <ModeToggle />
        <AuthButton />
      </div>
    </nav>
  );
};
