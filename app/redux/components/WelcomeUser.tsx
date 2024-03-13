"use client";

import { useAppSelector } from "@/lib/hooks";

export default function WelcomeUser() {
  console.count("WelcomeUser");

  const name = useAppSelector((state) => state.name);

  return (
    <div>
      {name.firstName.length > 0 || name.lastName.length > 0 ? (
        <>
          <h2 className="font-mono text-xl font-bold text-white mb-6">
            Welcome, {name.firstName} {name.lastName}!
          </h2>
          <p className="font-mono text-base text-white mb-2">
            Are you enjoying the examples so far?
          </p>
          <p className="font-mono text-base text-white">I Hope so!</p>
        </>
      ) : (
        <h2 className="font-mono text-xl font-bold text-white">
          Hey, why don&apos;t you tell us your name?
        </h2>
      )}
    </div>
  );
}
