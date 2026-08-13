import { FooterCardSection } from "@/components/sections/FooterCardSection";
import Link from 'next/link';

import { ContactClient } from "./ContactClient";

export const metadata = {
  title: "Contact Us | CODFY",
  description: "Get in touch with Codfy to start your next big project.",
};

export default function ContactPage() {
  return <ContactClient />;
}
