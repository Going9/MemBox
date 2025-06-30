import type { Route } from "./+types/posts-page";
import type { MetaFunction } from "react-router";

export function loader({ request }: Route.LoaderArgs) {
  return { title: "전체 게시글" };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "전체 게시글 - MemBox" },
    { name: "description", content: "커뮤니티의 전체 게시글을 확인하세요!" }
  ];
};

export default function PostsPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">전체 게시글</h1>
      <p className="text-muted-foreground mb-8">커뮤니티의 전체 게시글을 확인하세요!</p>
      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <p className="text-lg">이 페이지는 개발 중입니다.</p>
      </div>
    </div>
  );
}
