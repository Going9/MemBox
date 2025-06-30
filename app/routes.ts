import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("common/pages/home-page.tsx"),
    
    // 기능 소개 페이지 (랜딩페이지용)
    route("about/features/member-data-management", "about/features/pages/member-data-management.tsx"),
    route("about/features/automated-messaging", "about/features/pages/automated-messaging.tsx"),
    route("about/features/performance-reports", "about/features/pages/performance-reports.tsx"),
    
    // 회원관리
    route("members", "members/pages/members-page.tsx"),
    route("members/schedules", "members/pages/schedules-page.tsx"),
    route("members/attendances", "members/pages/attendances-page.tsx"),
    route("members/menus", "members/pages/menus-page.tsx"),
    
    // 직원관리
    route("employees", "employees/pages/employees-page.tsx"),
    route("employees/attendances", "employees/pages/attendances-page.tsx"),
    route("employees/members", "employees/pages/employee-members-page.tsx"),
    
    // 업무 자동화
    route("automations", "automations/pages/automations-page.tsx"),
    route("automations/messages", "automations/pages/messages-page.tsx"),
    
    // 메시지 관리
    route("messages/templates", "messages/pages/templates-page.tsx"),
    
    // 커뮤니티
    route("community", "community/pages/community-page.tsx"),
    route("community/posts", "community/pages/posts-page.tsx"),
    route("community/popular", "community/pages/popular-page.tsx"),
    route("community/recent", "community/pages/recent-page.tsx"),
    route("community/posts/create", "community/pages/create-post-page.tsx"),
    
    // 데이터 시각화
    route("visualizations", "visualizations/pages/visualizations-page.tsx"),
    
    // 인증
    route("auth/login", "auth/pages/login-page.tsx"),
    route("auth/signup", "auth/pages/signup-page.tsx"),
    route("auth/logout", "auth/pages/logout-page.tsx"),
    
    // 마이페이지
    route("my/dashboard", "my/pages/dashboard-page.tsx"),
    route("my/profile", "my/pages/profile-page.tsx"),
    route("my/settings", "my/pages/settings-page.tsx"),
    route("my/notifications", "my/pages/notifications-page.tsx"),
    route("my/messages", "my/pages/messages-page.tsx"),
] satisfies RouteConfig;
