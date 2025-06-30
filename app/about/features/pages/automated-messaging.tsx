import type { Route } from "./+types/automated-messaging";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { ClockIcon, MessageSquareIcon, ZapIcon } from "lucide-react";
import { Link } from "react-router";

export function loader({ request }: Route.LoaderArgs) {
  return {
    title: "자동화된 메시지"
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "자동화된 메시지 - MemBox" },
    { name: "description", content: "정해진 시간에 자동으로 메시지를 보내고, 회원의 변화에 맞춰 개인화된 피드백을 제공하세요." }
  ];
};

export default function AutomatedMessagingPage({ loaderData, actionData }: Route.ComponentProps) {
  const features = [
    {
      icon: ClockIcon,
      title: "스케줄 메시지",
      description: "정해진 시간에 자동으로 운동 알림, 식단 체크 메시지를 전송하세요."
    },
    {
      icon: MessageSquareIcon,
      title: "개인화된 피드백",
      description: "회원의 진행 상황에 맞춰 맞춤형 격려 메시지를 자동으로 보내세요."
    },
    {
      icon: ZapIcon,
      title: "즉시 알림",
      description: "중요한 일정이나 변경사항을 실시간으로 회원들에게 알려주세요."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            자동화된 메시지
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            정해진 시간에 자동으로 메시지를 보내고, 회원의 변화에 맞춰 개인화된 피드백을 제공하세요.
            반복적인 업무를 자동화하여 시간을 절약하세요.
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
            자동화된 메시지 기능을 사용하려면 로그인이 필요합니다.
          </p>
          <Button size="lg" asChild>
            <Link to="/auth/signup">무료 회원가입</Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 