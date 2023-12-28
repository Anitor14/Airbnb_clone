import React from "react";
import { Container, Logo, Search, UserMenu } from "..";
import { SafeUser } from "@/app/types";

type NavbarProps = {
  currentUser?: SafeUser | null;
};

const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm">
      <div className="w-full py-4 border-b">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
