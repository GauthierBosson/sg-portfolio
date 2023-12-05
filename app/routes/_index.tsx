import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Navbar />
    </h1>
  );
}
