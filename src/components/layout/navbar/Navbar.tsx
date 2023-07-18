import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

const routes = [
  { name: "Live", path: "/", icon: "blob red" },
  { name: "Fixtures", path: "/fixtures", icon: "fi fi-rr-football" },
  { name: "Leagues", path: "/leagues", icon: "fi fi-rr-trophy-star" },
  { name: "News", path: "/news", icon: "fi fi-rr-blog-text" },
];

const Navbar: FC = () => {
  const { pathname, push } = useRouter();

  return (
    <nav className="main-nav">
      <div className="left">
        <Link href="/" className="logo">
          <img src="/logo.svg" height="40" alt="" />
        </Link>

        <ul className="links">
          {routes.map((item, i) => {
            return (
              <li key={i}>
                <Link
                  className={`${
                    pathname.slice(1) !== item.path.slice(1) ? "" : "active"
                  } }`}
                  href={item.path}
                >
                  <i className={item.icon}></i> {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right">
        <ul className="links">
          <li>
            <Link href="/login">
              <i className="fi fi-rr-user"></i> Login / Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
