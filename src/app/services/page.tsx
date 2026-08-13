import { ServicesListSection } from "@/components/sections/ServicesListSection";
import { FooterCardSection } from "@/components/sections/FooterCardSection";

export const metadata = {
  title: "Services | CODFY",
  description: "Explore our comprehensive software development and digital transformation services.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesListSection />
      <FooterCardSection />
    </div>
  );
}
