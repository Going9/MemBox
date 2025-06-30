import type { Route } from "./+types/member-data-management";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { CheckIcon, CalendarIcon, ClipboardListIcon, UtensilsIcon } from "lucide-react";
import { Link } from "react-router";

export function loader({ request }: Route.LoaderArgs) {
  return {
    title: "회원 데이터 통합 관리"
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "회원 데이터 통합 관리 - MemBox" },
    { name: "description", content: "회원 일정, 출석, 식단 등 회원관리에 필요한 모든 데이터를 한눈에 확인하고 관리하세요." }
  ];
};

export default function MemberDataManagementPage({ loaderData, actionData }: Route.ComponentProps) {
  const features = [
    {
      icon: CalendarIcon,
      title: "일정 관리",
      description: "회원들의 운동 일정을 체계적으로 관리하고 알림을 설정하세요."
    },
    {
      icon: ClipboardListIcon,
      title: "출석 현황",
      description: "회원들의 출석률을 추적하고 패턴을 분석하세요."
    },
    {
      icon: UtensilsIcon,
      title: "식단 관리",
      description: "개인별 맞춤 식단을 계획하고 진행 상황을 모니터링하세요."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            회원 데이터 통합 관리
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            회원 일정, 출석, 식단 등 회원관리에 필요한 모든 데이터를 한눈에 확인하고 관리하세요.
            흩어진 정보를 하나로 통합하여 효율적인 관리가 가능합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/auth/signup">무료로 시작하기</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/auth/login">로그인</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 기능 상세 */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="p-6 border rounded-lg bg-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-muted/50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
          <p className="text-muted-foreground mb-6">
            회원 데이터 통합 관리 기능을 사용하려면 로그인이 필요합니다.
          </p>
          <Button size="lg" asChild>
            <Link to="/auth/signup">무료 회원가입</Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 