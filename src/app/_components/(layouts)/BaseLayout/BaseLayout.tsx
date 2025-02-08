"use client";

import React, { ReactNode } from "react";
import { TopBar, Footer } from "@/app/_components";
import "./BaseLayout.scss";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TopBar />
      <>{children}</>
      <Footer />
    </>
  );
};

export default BaseLayout;
