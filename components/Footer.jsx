"use client"

import Link from "next/link";
import { footerLinks } from "@/constant";

const FooterColumn = ({ title, links }) => (
  <div className="flex-1 flex flex-col gap-3 text-sm min-w-max">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
          {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
      </ul>
  </div>
);

export default function Footer(){
  return (
        <section className=" px-3 pt-2 flexStart flex-col paddings w-full gap-20 bg-teal-500/10 shadow-sm">
          <div className="flex flex-col gap-12 w-full">
              <div className="flex items-start flex-col">
                  <div className="bg-gradient-to-r from-teal-600 to-teal-400 text-transparent bg-clip-text font-bold text-xl">JOBNUT.AI</div>
  
                  <p className="text-start text-sm font-normal mt-5 max-w-xs">
                      Jobnut.AI is the world&apos;s most innovative way for hiring and getting hired.
                  </p>
              </div>
              <div className="flex flex-wrap gap-12">
                  <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />
  
                  <div className="flex-1 flex flex-col gap-4">
                      <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
                      <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
                  </div>
  
                  <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />
  
                  <div className="flex-1 flex flex-col gap-4">
                      <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
                      <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
                  </div>
                  
                  <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
              </div>
          </div>
  
          <div className="flexBetween max-sm: flex-col w-full text-sm font-normal">
              <p>@ 2023 Jobnut Studio. All rights reserved</p>
              <p className="text-gray">
                  <span className="text-black font-semibold">231</span> jobs posted
              </p>
          </div>
      </section>
  );
} 
