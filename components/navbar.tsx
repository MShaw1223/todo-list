"use server";
import AuthButton from "./AuthButton";
import { Toggle } from "./ui/toggle";

export const NavBar = () => {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full flex justify-between items-center p-3 text-sm">
        <Toggle />
        <AuthButton />
      </div>
    </nav>
  );
};
