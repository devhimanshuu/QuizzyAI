import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <p className="rounded-lg border-2 border-b-4 border-r-4 border-black pr-2 py-1 text-xl font-bold transition-all hover:translate-y-[2px] md:block dark:border-white">
        QuizzyAI
      </p>
    </Link>
  );
};

export default Logo;
