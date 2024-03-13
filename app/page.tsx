import Card from "@/components/Card";

const examples = [
  {
    title: "State + Props",
    description:
      "This is an example to abord topics like lifting state up and prop drilling",
    href: "/state-props",
  },
  {
    title: "Context API",
    description:
      "This is an example of how to use the Context API to manage state",
    href: "/context",
  },
  {
    title: "Redux",
    description: "This is an example of how to use the Redux to manage state",
    href: "/redux",
  },
];

export default function Home() {
  return (
    <main>
      <h1 className="font-mono text-6xl font-bold text-center text-white pt-40 pb-10">
        React State Management
      </h1>
      <p className="font-mono text-white text-center text-xl">
        This is a simple application built to show some examples of how React
        behaves with some state management methods
      </p>
      <section>
        <h2 className="font-mono text-4xl font-bold text-center text-white pt-20 pb-10">
          Examples
        </h2>
        <ul className="px-10 pb-10 grid gap-6 grid-cols-auto-fit-350 justify-center">
          {examples.map(({ title, description, href }) => (
            <Card
              key={title}
              title={title}
              description={description}
              href={href}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
