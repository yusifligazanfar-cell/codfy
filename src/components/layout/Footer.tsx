import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-[#fdc448]/20 bg-[#fdc448] pt-20 pb-10 overflow-hidden">
      {/* Decorative highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#DD3636] flex items-center justify-center">
                <span className="text-white font-bold text-lg font-geist">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#02021e] font-geist">
                CODFY<span className="text-[#DD3636]">.</span>
              </span>
            </Link>
            <p className="text-[#02021e]/80 text-sm leading-relaxed mb-8 max-w-sm font-medium">
              We engineer world-class digital experiences that help companies grow, scale, and innovate in the modern era.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="#" icon={<TwitterIcon />} />
              <SocialLink href="#" icon={<LinkedinIcon />} />
              <SocialLink href="#" icon={<GithubIcon />} />
              <SocialLink href="https://www.instagram.com/codfy.tech?igsh=MXJ2endnNDVpb2kwOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" icon={<InstagramIcon />} />
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-[#02021e] font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/portfolio">Portfolio</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[#02021e] font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <FooterLink href="/services">Web Development</FooterLink>
              <FooterLink href="/services">AI Solutions</FooterLink>
              <FooterLink href="/services">Mobile Apps</FooterLink>
              <FooterLink href="/services">UI/UX Design</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-[#02021e] font-bold mb-6">Stay Updated</h3>
            <p className="text-[#02021e]/80 font-medium text-sm mb-4">
              Subscribe to our newsletter for the latest tech insights and news.
            </p>
            <form className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/90 border-none rounded-full py-2.5 pl-4 pr-12 text-sm text-[#02021e] placeholder:text-[#02021e]/50 focus:outline-none focus:ring-2 focus:ring-[#DD3636]/50 transition-all shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-1.5 w-8 h-8 rounded-full bg-[#DD3636] flex items-center justify-center text-white hover:bg-[#c22d2d] transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#02021e]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#02021e]/70 font-medium text-sm">
            © {new Date().getFullYear()} Codfy Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[#02021e]/70 font-medium text-sm hover:text-[#02021e] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#02021e]/70 font-medium text-sm hover:text-[#02021e] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, target, rel }: { href: string; icon: React.ReactNode; target?: string; rel?: string }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="w-10 h-10 rounded-full bg-white/80 border-none flex items-center justify-center text-[#02021e] hover:text-white hover:bg-[#DD3636] transition-all shadow-sm"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[#02021e]/80 font-medium text-sm hover:text-[#DD3636] transition-colors">
        {children}
      </Link>
    </li>
  );
}

function TwitterIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
}

function LinkedinIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
}

function GithubIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;
}

function InstagramIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
}
