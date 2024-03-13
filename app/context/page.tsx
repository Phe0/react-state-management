"use client";

import NameForm from "./components/NameForm";
import WelcomeUser from "./components/WelcomeUser";
import { NameProvider } from "./components/NameContext";

export default function ContextPage() {
  console.count("Page");

  return (
    <NameProvider>
      <main>
        <h1 className="font-mono text-6xl font-bold text-center text-white pt-40 pb-10">
          Context API
        </h1>
        <div className="flex justify-center gap-x-8">
          <section className="bg-light-gray p-6 rounded-lg">
            <NameForm />
          </section>
          <section className="bg-light-gray p-6 rounded-lg">
            <WelcomeUser />
          </section>
        </div>
      </main>
    </NameProvider>
  );
}
