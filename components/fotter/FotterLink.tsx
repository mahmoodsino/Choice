import Link from "next/link";
import React from "react";

const FotterLink = () => {
  return (
    <div className="flex flex-col space-y-4  justify-between  text-sm text-white underline py-5">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/products">
        <a>PRODUCTS</a>
      </Link>
      <Link href="/aboutus">
        <a>ABOUT US</a>
      </Link>
      <Link href="/contactus">
        <a>CONTACT US</a>
      </Link>
    </div>
  );
};

export default FotterLink;
