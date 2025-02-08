"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoospireBeta } from "@/app/_assets";
import { MobileMenu } from "@/app/_components";
import "./TopBar.scss";

const TopBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("home");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="top-bar">
      <div className="app-container top-bar-container">
        {/* LOGO AREA */}
        <div className="logo-area">
          <Link href="/#home" onClick={() => setActivePath("home")}>
            <Image
              src={MoospireBeta}
              alt="moospire-logo"
              width={120}
              height={45}
            />
          </Link>
        </div>

        {/* NAV AREA */}
        <div className="nav-area">
          <Link
            href="/#home"
            onClick={() => setActivePath("home")}
            className={`nav-item ${
              activePath === "home" ? "nav-item--active" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="#features"
            onClick={() => setActivePath("features")}
            className={`nav-item ${
              activePath === "features" ? "nav-item--active" : ""
            }`}
          >
            Features
          </Link>

          <Link
            href="#plan"
            onClick={() => setActivePath("plan")}
            className={`nav-item ${
              activePath === "plan" ? "nav-item--active" : ""
            }`}
          >
            Plan
          </Link>

          <Link
            href="#how-it-works"
            onClick={() => setActivePath("howItWorks")}
            className={`nav-item ${
              activePath === "howItWorks" ? "nav-item--active" : ""
            }`}
          >
            How it works
          </Link>

          <Link
            href="#faq"
            onClick={() => setActivePath("faq")}
            className={`nav-item ${
              activePath === "faq" ? "nav-item--active" : ""
            }`}
          >
            FAQ
          </Link>
        </div>

        {/* ACTION AREA */}
        <div className="action-area">
          <button className="btn submit-btn">Submit UI Design</button>
          <button className="btn btn-md btn-primary get-started-btn">
            Get Started
          </button>

          <div
            className="icon icon-menu menu-btn"
            onClick={toggleMobileMenu}
          ></div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && <MobileMenu closeMenu={toggleMobileMenu} />}
    </div>
  );
};

export default TopBar;
