import { SessionProvider } from "next-auth/react";
import React from "react";

type Props = {
  chidren: React.ReactNode;
};

const Providers = ({ chidren }: Props) => {
  return <SessionProvider>{chidren}</SessionProvider>;
};

export default Providers;
