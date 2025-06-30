import type { Route } from "./+types/login-page";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";

export function loader({ request }: Route.LoaderArgs) {
  return {
    title: "로그인"
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "로그인 - MemBox" },
    { name: "description", content: "MemBox에 로그인하세요." }
  ];
};

export default function LoginPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">로그인</h1>
          <p className="text-muted-foreground mt-2">
            MemBox에 로그인하세요.
          </p>
        </div>
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <p className="text-lg mb-4">로그인 기능은 개발 중입니다.</p>
          <Button>로그인</Button>
        </div>
      </div>
    </div>
  );
} 