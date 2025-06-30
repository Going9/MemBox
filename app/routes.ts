import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("common/pages/home-page.tsx"),
    
    // 기능 소개 페이지 (랜딩페이지용)
    ...prefix("about/features", [
        route("member-data-management", "about/features/pages/member-data-management.tsx"),
        route("automated-messaging", "about/features/pages/automated-messaging.tsx"),
        route("performance-reports", "about/features/pages/performance-reports.tsx"),
    ]),
    
    // 회원관리
    ...prefix("management/members", [
        index("features/management/members/pages/members-page.tsx"),
        route("schedules", "features/management/members/pages/schedules-page.tsx"),
        route("attendances", "features/management/members/pages/attendances-page.tsx"),
        route("menus", "features/management/members/pages/menus-page.tsx"),
    ]),
    
    // 직원관리
    ...prefix("management/employees", [
        index("features/management/employees/pages/employees-page.tsx"),
        route("attendances", "features/management/employees/pages/attendances-page.tsx"),
        route("members", "features/management/employees/pages/employee-members-page.tsx"),
    ]),
    
    // 업무 자동화
    ...prefix("automations", [
        index("features/automations/pages/automations-page.tsx"),
        route("messages", "features/automations/messages/pages/messages-page.tsx"),
        route("messages/templates", "features/automations/messages/pages/templates-page.tsx"),
    ]),
    
    // 커뮤니티
    ...prefix("community", [
        index("features/community/pages/community-page.tsx"),
        route("posts", "features/community/pages/posts-page.tsx"),
        route("popular", "features/community/pages/popular-page.tsx"),
        route("recent", "features/community/pages/recent-page.tsx"),
        route("posts/create", "features/community/pages/create-post-page.tsx"),
    ]),
    
    // 데이터 시각화
    ...prefix("visualizations", [
        index("features/visualizations/pages/visualizations-page.tsx"),
    ]),
    
    // 인증
    ...prefix("auth", [
        index("auth/pages/login-page.tsx"),
        route("signup", "auth/pages/signup-page.tsx"),
        route("logout", "auth/pages/logout-page.tsx"),
    ]),
    
    // 마이페이지
    ...prefix("my", [
        index("my/pages/dashboard-page.tsx"),
        route("profile", "my/pages/profile-page.tsx"),
        route("settings", "my/pages/settings-page.tsx"),
        route("notifications", "my/pages/notifications-page.tsx"),
        route("messages", "my/pages/messages-page.tsx"),
    ]),

] satisfies RouteConfig;
