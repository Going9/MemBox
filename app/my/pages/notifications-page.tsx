import type { Route } from "./+types/notifications-page";
import type { MetaFunction } from "react-router";

export function loader({ request }: Route.LoaderArgs) {
  return { title: "알림" };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "알림 - MemBox" },
    { name: "description", content: "알림을 확인하세요." }
  ];
};

export default function NotificationsPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">알림</h1>
      <p className="text-muted-foreground mb-8">알림을 확인하세요.</p>
      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <p className="text-lg">이 페이지는 개발 중입니다.</p>
      </div>
    </div>
  );
}
