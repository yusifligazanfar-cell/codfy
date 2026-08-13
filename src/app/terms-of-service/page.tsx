import { FooterCardSection } from "@/components/sections/FooterCardSection";

export const metadata = {
  title: "Terms of Service | CODFY",
  description: "Terms of Service for Codfy",
};

export default function TermsOfServicePage() {
  return (
    <div className="w-full bg-transparent text-[#050505] min-h-screen relative flex flex-col font-[family-name:var(--font-geist-sans)]">
      
      <div className="flex-grow flex flex-col items-center justify-start pt-20 pb-20 w-full max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="w-full text-left mb-16 border-b-2 border-black/10 pb-12">
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black tracking-tighter uppercase leading-[0.9]">
            TERMS OF <br/> <span className="text-[#f4c660]">SERVICE.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-black/50 font-bold uppercase tracking-widest">
            Last Updated: August 2026
          </p>
        </div>

        <div className="w-full flex flex-col gap-12 text-lg md:text-xl font-medium leading-relaxed">
          <section className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">01. Acceptance of Terms</h2>
            <p className="text-black/70">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">02. Intellectual Property</h2>
            <p className="text-black/70">
              The site and its original content, features, and functionality are owned by Codfy and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">03. Termination</h2>
            <p className="text-black/70">
              We may terminate your access to the site, without cause or notice, which may result in the forfeiture and destruction of all information associated with you. All provisions of this agreement that by their nature should survive termination shall survive termination.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">04. Limitation of Liability</h2>
            <p className="text-black/70">
              In no event shall Codfy, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for damages, direct or consequential, resulting from your use of the site, and you agree to defend, indemnify and hold us harmless from any claims, losses, liability costs and expenses.
            </p>
          </section>
        </div>
      </div>
      
      {/* Footer */}
      <div className="w-full">
        <FooterCardSection />
      </div>
    </div>
  );
}
