import type { Route } from "./+types/home-page";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";

export function loader({ request }: Route.LoaderArgs) {
  return {
    message: "Welcome to MemBox"
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "MemBox - Home" },
    { name: "description", content: "Welcome to MemBox - Your Membership Management Solution" }
  ];
};

export default function HomePage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{loaderData.message}</h1>
      <div className="space-y-4">
        <p className="text-lg text-gray-600">
          Manage your memberships efficiently with MemBox.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
} 