import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  href: string;
}

export default function Card({ title, description, href }: CardProps) {
  return (
    <Link
      href={href}
      className="hover:-translate-y-4 focus:-translate-y-4 active:-translate-y-4 transition-all"
    >
      <li className="border-4 border-white p-5 rounded-lg">
        <h2 className="font-mono font-bold text-white text-lg pb-5">{title}</h2>
        <p className="font-mono text-white text-base">{description}</p>
      </li>
    </Link>
  );
}
