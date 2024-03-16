"use client";

import { Name } from "@/types/Name";
import WelcomeUser from "./WelcomeUser";

interface MiddleComponentProps {
  name: Name;
}

export default function MiddleComponent({ name }: MiddleComponentProps) {
  console.count("MiddleComponent");
  return <WelcomeUser name={name} />;
}
