import type { Route } from "./+types/community-page";
import type { MetaFunction } from "react-router";

export function loader({ request }: Route.LoaderArgs) {
  return {
    title: "커뮤니티"
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "커뮤니티 - MemBox" },
    { name: "description", content: "트레이너들과 소통하고 정보를 공유하세요." }
  ];
};

export default function CommunityPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">커뮤니티</h1>
      <p className="text-muted-foreground mb-8">
        트레이너들과 소통하고 정보를 공유하세요.
      </p>
      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <p className="text-lg">이 페이지는 개발 중입니다.</p>
      </div>
    </div>
  );
} 