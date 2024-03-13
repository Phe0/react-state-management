"use client";

import { Name } from "@/types/Name";
import { createContext, useState } from "react";

interface NameContextType {
  name: Name;
  setName: (name: Name) => void;
}

export const NameContext = createContext<NameContextType>({
  name: {} as Name,
  setName: () => {},
});

export function NameProvider({ children }: { children: React.ReactNode }) {
  console.count("NameProvider");

  const [name, setName] = useState<Name>({
    firstName: "",
    lastName: "",
  });

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
}
