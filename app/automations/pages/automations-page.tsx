import type { Route } from "./+types/automations-page";
import type { MetaFunction } from "react-router";

export function loader({ request }: Route.LoaderArgs) {
  return {
    title: "업무 자동화"
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "업무 자동화 - MemBox" },
    { name: "description", content: "반복적인 업무를 자동화하여 효율성을 높이세요." }
  ];
};

export default function AutomationsPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">업무 자동화</h1>
      <p className="text-muted-foreground mb-8">
        반복적인 업무를 자동화하여 효율성을 높이세요.
      </p>
      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <p className="text-lg">이 페이지는 개발 중입니다.</p>
      </div>
    </div>
  );
} 