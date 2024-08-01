import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { User } from "next-auth";
import React from "react";
import { DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";

type Props = {
  user: Pick<User, "name" | "email" | "image">;
};

const UserAccountNav = ({ user }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger></DropdownMenuTrigger>{" "}
      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium ">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-zinc-700">
                {user.email}
              </p>
            )}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
