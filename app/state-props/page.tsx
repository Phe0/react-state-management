"use client";

import { Name } from "@/types/Name";
import { useState } from "react";
import NameForm from "./components/NameForm";
import WelcomeUser from "./components/WelcomeUser";

export default function StatePropsPages() {
  console.count("Page");

  const [savedName, setSavedName] = useState<Name>({
    firstName: "",
    lastName: "",
  });

  return (
    <main>
      <h1 className="font-mono text-6xl font-bold text-center text-white pt-40 pb-10">
        State + Props
      </h1>
      <div className="flex justify-center gap-x-8">
        <section className="bg-light-gray p-6 rounded-lg">
          <NameForm onSubmit={setSavedName} />
        </section>
        <section className="bg-light-gray p-6 rounded-lg">
          <WelcomeUser name={savedName} />
        </section>
      </div>
    </main>
  );
}
