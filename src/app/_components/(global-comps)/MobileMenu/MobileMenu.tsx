"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoospireBeta } from "@/app/_assets";
import "./MobileMenu.scss";

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  const [activePath, setActivePath] = useState("home");

  const updateActivePathHash = (hash: string) => {
    setActivePath(hash);
    closeMenu();
  };

  return (
    <div className="mobile-menu">
      <div className="app-container">
        <div className="top-row">
          <Image
            src={MoospireBeta}
            alt="moospire-logo"
            width={120}
            height={45}
          />

          <div className="icon icon-times" onClick={closeMenu}></div>
        </div>

        {/* NAVIGATION AREA */}
        <div className="bottom-row">
          <Link
            href="/#home"
            onClick={() => updateActivePathHash("home")}
            className={`nav-item ${
              activePath === "home" ? "nav-item--active" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="#features"
            onClick={() => updateActivePathHash("features")}
            className={`nav-item ${
              activePath === "features" ? "nav-item--active" : ""
            }`}
          >
            Features
          </Link>

          <Link
            href="#plan"
            onClick={() => updateActivePathHash("plan")}
            className={`nav-item ${
              activePath === "plan" ? "nav-item--active" : ""
            }`}
          >
            Plan
          </Link>

          <Link
            href="/#how-it-works"
            onClick={() => updateActivePathHash("howItWorks")}
            className={`nav-item ${
              activePath === "howItWorks" ? "nav-item--active" : ""
            }`}
          >
            How it works
          </Link>

          <Link
            href="/#faq"
            onClick={() => updateActivePathHash("faq")}
            className={`nav-item ${
              activePath === "faq" ? "nav-item--active" : ""
            }`}
          >
            FAQs
          </Link>

          <button className="btn btn-primary btn-md">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
