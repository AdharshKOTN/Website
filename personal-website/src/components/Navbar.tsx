import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 font-mono">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Adharsh Rajendran ( AJ )
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/aboutme">About Me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
