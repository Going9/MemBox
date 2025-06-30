import type { Route } from "./+types/logout-page";
import type { MetaFunction } from "react-router";
import { useEffect } from "react";
import { redirect } from "react-router";

export function loader({ request }: Route.LoaderArgs) {
  // 실제로는 여기서 로그아웃 처리를 하고 홈으로 리다이렉트
  return redirect("/");
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "로그아웃 - MemBox" },
    { name: "description", content: "로그아웃 중입니다." }
  ];
};

export default function LogoutPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">로그아웃 중...</h1>
        <p className="text-muted-foreground">잠시만 기다려주세요.</p>
      </div>
    </div>
  );
} 