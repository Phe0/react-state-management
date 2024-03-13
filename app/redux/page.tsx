"use client";

import StoreProvider from "../StoreProvider";
import NameForm from "./components/NameForm";
import WelcomeUser from "./components/WelcomeUser";

export default function ReduxPage() {
  return (
    <StoreProvider>
      <main>
        <h1 className="font-mono text-6xl font-bold text-center text-white pt-40 pb-10">
          Redux
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
    </StoreProvider>
  );
}
