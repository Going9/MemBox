import type { Route } from "./+types/home-page";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Separator } from "~/common/components/ui/separator";
import { ArrowRightIcon, CheckIcon, StarIcon, TrendingUpIcon } from "lucide-react";
import { useState, useEffect } from "react";

export function loader({ request }: Route.LoaderArgs) {
  return {
    message: "MemBox"
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "MemBox - 트레이너를 위한 회원관리 솔루션" },
    { name: "description", content: "MemBox는 트레이너의 업무 효율을 높이고 회원의 운동 성과를 가시화하는 회원관리 솔루션입니다." }
  ];
};

export default function HomePage({ loaderData, actionData }: Route.ComponentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: CheckIcon,
      title: "회원 데이터 통합 관리",
      description: "체중, 골격근량 등 회원의 모든 데이터를 한눈에 확인하고 관리하세요. 차트와 그래프로 변화를 시각화합니다.",
    },
    {
      icon: StarIcon,
      title: "자동화된 메시지",
      description: "정해진 시간에 자동으로 메시지를 보내고, 회원의 변화에 맞춰 개인화된 피드백을 제공하세요.",
    },
    {
      icon: TrendingUpIcon,
      title: "성과 리포트",
      description: "회원의 운동 성과를 그래프로 확인하고, 맞춤형 피드백을 제공하세요. PDF 리포트 생성도 가능합니다.",
    }
  ];

  const stats = [
    { value: "30%", label: "업무 시간 절약" },
    { value: "50%", label: "회원 기록 지속성 향상" },
    { value: "99%", label: "메시지 전송 성공률" }
  ];

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl font-bold mb-6 text-foreground">
            트레이너를 위한<br />
            스마트한 회원관리 솔루션
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            카카오톡으로 흩어진 회원 데이터를 한곳에서 관리하세요.<br />
            자동화된 메시지로 업무 시간을 절약하고, 회원의 성과를 데이터로 확인하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            >
              무료로 시작하기
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="transform transition-all duration-200 hover:scale-105"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              더 알아보기
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* 주요 기능 섹션 */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">주요 기능</h2>
          <p className="text-xl text-muted-foreground">트레이너의 업무를 효율적으로 만드는 핵심 기능들</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === index;
            return (
              <div 
                key={feature.title}
                className={`group p-8 rounded-xl border bg-card hover:shadow-lg transition-all duration-500 cursor-pointer ${
                  isActive ? 'ring-2 ring-primary/50 shadow-lg' : ''
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${
                  isActive ? 'scale-110' : ''
                }`}>
                  <Icon className={`h-6 w-6 text-primary transition-all duration-300 ${
                    isActive ? 'animate-pulse' : ''
                  }`} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-muted/50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">수치로 보는 MemBox의 효과</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-foreground">지금 바로 시작하세요</h2>
          <p className="text-xl text-muted-foreground mb-8">
            14일 무료 체험으로 MemBox의 모든 기능을 경험해보세요.<br />
            신용카드 등록 없이 바로 시작할 수 있습니다.
          </p>
          <Button 
            size="lg" 
            className="group transform transition-all duration-200 hover:scale-105 hover:shadow-xl animate-bounce"
          >
            무료 체험 시작하기
            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">MemBox</h3>
              <p className="text-muted-foreground text-sm">
                트레이너를 위한 스마트한 회원관리 솔루션
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">제품</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/features" className="hover:text-foreground transition-colors">기능</a></li>
                <li><a href="/pricing" className="hover:text-foreground transition-colors">요금제</a></li>
                <li><a href="/demo" className="hover:text-foreground transition-colors">데모</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">지원</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/help" className="hover:text-foreground transition-colors">도움말</a></li>
                <li><a href="/contact" className="hover:text-foreground transition-colors">문의하기</a></li>
                <li><a href="/api" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">회사</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-foreground transition-colors">회사소개</a></li>
                <li><a href="/terms" className="hover:text-foreground transition-colors">이용약관</a></li>
                <li><a href="/privacy" className="hover:text-foreground transition-colors">개인정보처리방침</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 MemBox. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 