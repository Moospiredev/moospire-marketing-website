import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoospireBeta } from "@/app/_assets";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="app-container footer-container">
        {/* TOP FOOTER */}
        <div className="top-footer">
          <div className="logo-area">
            <Image
              src={MoospireBeta}
              alt="moospire-logo"
              width={120}
              height={45}
            />
          </div>

          <div className="navigation-area">
            <div className="nav-list">
              <div className="nav-list-title">Operations</div>

              <div className="nav-list-items">
                <Link href="" className="nav-list-item">
                  Features
                </Link>

                <Link href="" className="nav-list-item">
                  How it works
                </Link>

                <Link href="" className="nav-list-item">
                  FAQs
                </Link>
              </div>
            </div>

            <div className="nav-list">
              <div className="nav-list-title">Other Links</div>

              <div className="nav-list-items">
                <Link href="" className="nav-list-item">
                  Terms of Service
                </Link>

                <Link href="" className="nav-list-item">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="nav-list">
              <div className="nav-list-title">Location</div>

              <div className="nav-list-items">
                <div className="nav-list-item">Scotland, United Kingdom</div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="bottom-footer">
          <div className="bottom-footer--left">&copy;MOOSPIRE 2024</div>

          <div className="bottom-footer--right">
            <Link href="" className="social-item">
              <div className="icon icon-facebook"></div>
            </Link>

            <Link href="" className="social-item">
              <div className="icon icon-twitter"></div>
            </Link>

            <Link href="" className="social-item">
              <div className="icon icon-instagram"></div>
            </Link>

            <Link href="" className="social-item">
              <div className="icon icon-youtube"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
