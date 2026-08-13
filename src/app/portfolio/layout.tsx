import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | CODFY",
  description: "Premium digital solutions for global and local brands.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
