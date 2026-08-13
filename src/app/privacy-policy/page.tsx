import { FooterCardSection } from "@/components/sections/FooterCardSection";

export const metadata = {
  title: "Privacy Policy | CODFY",
  description: "Privacy Policy for Codfy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-transparent text-[#050505] min-h-screen relative flex flex-col font-[family-name:var(--font-geist-sans)]">
      
      <div className="flex-grow flex flex-col items-center justify-start pt-20 pb-20 w-full max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="w-full text-left mb-16 border-b-2 border-black/10 pb-12">
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black tracking-tighter uppercase leading-[0.9]">
            PRIVACY <br/> <span className="text-[#f4c660]">POLICY.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-black/50 font-bold uppercase tracking-widest">
            Last Updated: August 2026
          </p>
        </div>

        <div className="w-full flex flex-col gap-12 text-lg md:text-xl font-medium leading-relaxed">
          <section className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">01. Introduction</h2>
            <p className="text-black/70">
              Welcome to Codfy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">02. Data We Collect</h2>
            <p className="text-black/70">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Technical Data, Usage Data, and Marketing and Communications Data.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">03. How We Use Your Data</h2>
            <p className="text-black/70">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you; Where it is necessary for our legitimate interests; Where we need to comply with a legal obligation.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">04. Data Security</h2>
            <p className="text-black/70">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
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
