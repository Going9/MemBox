import type { Route } from "./+types/employee-members-page";
import type { MetaFunction } from "react-router";

export function loader({ request }: Route.LoaderArgs) {
  return { title: "직원 담당 회원" };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "직원 담당 회원 - MemBox" },
    { name: "description", content: "직원이 담당하는 회원을 확인하세요!" }
  ];
};

export default function EmployeeMembersPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">직원 담당 회원</h1>
      <p className="text-muted-foreground mb-8">직원이 담당하는 회원을 확인하세요!</p>
      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <p className="text-lg">이 페이지는 개발 중입니다.</p>
      </div>
    </div>
  );
}
