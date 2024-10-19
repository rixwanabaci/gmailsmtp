"use client";

import ContactForm from "./components/ContactForm";
export const runtime = "edge";

export default function Home() {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
}
