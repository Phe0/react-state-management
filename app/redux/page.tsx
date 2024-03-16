"use client";

import StoreProvider from "../StoreProvider";
import MiddleComponent from "./components/MiddleComponent";
import NameForm from "./components/NameForm";

export default function ReduxPage() {
  console.count("Page");
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
            <MiddleComponent />
          </section>
        </div>
      </main>
    </StoreProvider>
  );
}
