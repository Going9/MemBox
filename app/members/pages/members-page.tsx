import type { Route } from "./+types/members-page";
import type { MetaFunction } from "react-router";

export function loader({ request }: Route.LoaderArgs) {
  return {
    title: "회원관리"
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "회원관리 - MemBox" },
    { name: "description", content: "회원들의 정보를 체계적으로 관리하세요." }
  ];
};

export default function MembersPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">회원관리</h1>
      <p className="text-muted-foreground mb-8">
        회원들의 정보를 체계적으로 관리하세요.
      </p>
      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <p className="text-lg">이 페이지는 개발 중입니다.</p>
      </div>
    </div>
  );
} 