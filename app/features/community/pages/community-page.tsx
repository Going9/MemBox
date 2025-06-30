import type { Route } from "./+types/community-page";
import Hero from "~/common/components/hero";


export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Community | MemBox" },
    { name: "description", content: "트레이너들과 소통하고 정보를 공유하세요." }
  ];
};

export default function CommunityPage() {
  return (
    <div>
      <Hero 
        title="Community" 
        description="트레이너들과 소통하고 정보를 공유하세요." 
      />
    </div>
  );
} 