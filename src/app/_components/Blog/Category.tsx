import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, className }: {link: string, name: string, active: boolean, className?: string}) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2  md:py-2 px-6  md:px-10   rounded-full border-2 border-solid border-dark hover:scale-105 transition-all ease duration-200 m-2",
        className ? className : "",
        active ? "bg-dark text-light" : "bg-light text-dark"
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;