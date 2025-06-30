import type { Route } from "./+types/performance-reports";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { BarChart3Icon, FileTextIcon, TrendingUpIcon } from "lucide-react";
import { Link } from "react-router";

export function loader({ request }: Route.LoaderArgs) {
  return {
    title: "성과 리포트"
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "성과 리포트 - MemBox" },
    { name: "description", content: "회원의 운동 성과를 그래프로 시각화 하고 당신의 포트폴리오를 만들어보세요." }
  ];
};

export default function PerformanceReportsPage({ loaderData, actionData }: Route.ComponentProps) {
  const features = [
    {
      icon: BarChart3Icon,
      title: "데이터 시각화",
      description: "회원의 운동 성과를 직관적인 차트와 그래프로 확인하세요."
    },
    {
      icon: TrendingUpIcon,
      title: "진행률 추적",
      description: "목표 대비 달성률과 개선 추세를 한눈에 파악하세요."
    },
    {
      icon: FileTextIcon,
      title: "포트폴리오 생성",
      description: "전문적인 성과 리포트를 생성하여 포트폴리오로 활용하세요."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            성과 리포트
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            회원의 운동 성과를 그래프로 시각화 하고 당신의 포트폴리오를 만들어보세요.
            데이터 기반의 전문적인 분석으로 더 나은 서비스를 제공하세요.
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
            성과 리포트 기능을 사용하려면 로그인이 필요합니다.
          </p>
          <Button size="lg" asChild>
            <Link to="/auth/signup">무료 회원가입</Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 