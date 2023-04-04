import Link from "next/link";
import React from "react";
import Tasky_weblogo from "public/Tasky_header.svg";
import Head from "next/head";
import Image from "next/image";


const Navbar = () => {
  return (
    <nav>
        {/* トップ バー ------------ */}
          <header className="flex justify-between items-center z-50 m-0 py-4 shadow-md h-16 fixed top-0 w-full">
            <div className="pl-4">
              <Link href="/" passHref={true}>
                <Image
                  src={Tasky_weblogo}
                  className="w-28 h-auto"
                  alt={"TaskyWebLogo"}
                  priority
                />
              </Link>
            </div>
            <div className="flex items-center pr-8 space-x-12 font-bold">
              <Link href="/Dashboard" passHref={true}>
                <span className="text-xl transition-all duration-200 hover:text-blue-500 cursor-pointer">
                  ダッシュボード
                </span>
              </Link>
              <Link href="/Mytask" passHref={true}>
                <span className="text-xl transition-all duration-200 hover:text-blue-500 cursor-pointer">
                  タスク
                </span>
              </Link>
              <Link href="/Threedots" passHref={true}>
                <span className="text-xl transition-all duration-200 hover:text-blue-500 cursor-pointer">
                  メンバー
                </span>
              </Link>
              <Link href="/Dashboard" passHref={true}>
              <button className="rounded-full bg-blue-500 text-white p-2 mr-16">Login</button>
              </Link>
            </div>
        </header>
        <hr />
    </nav>
  );
};

export default Navbar;
