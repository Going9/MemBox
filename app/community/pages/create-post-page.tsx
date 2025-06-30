import type { Route } from "./+types/create-post-page";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";

export function loader({ request }: Route.LoaderArgs) {
  return { title: "게시글 작성" };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "게시글 작성 - MemBox" },
    { name: "description", content: "커뮤니티의 게시글을 작성하세요!" }
  ];
};

export default function CreatePostPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">게시글 작성</h1>
      <p className="text-muted-foreground mb-8">커뮤니티의 게시글을 작성하세요!</p>
      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <p className="text-lg mb-4">게시글 작성 기능은 개발 중입니다.</p>
        <Button>게시글 작성</Button>
      </div>
    </div>
  );
}
