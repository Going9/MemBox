import { Link } from "react-router";
import { Separator } from "./ui/separator";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";


const menus = [
    {
        name: "회원관리",
        to: "/members",
        items: [
            {
                name: "일정",
                description: "일정을 확인하세요!",
                to: "/members/schedules",
            },
            {
                name: "출석 현황",
                description: "출석 현황을 확인하세요!",
                to: "/members/attendances", 
            },
            {
                name: "식단 현황",
                description: "식단 현황을 확인하세요!",
                to: "/members/menus",
            },
        ]
    },
    {
        name: "직원관리",
        to: "/employees",
        items: [
            {
                name: "출근 현황",
                description: "출근 현황을 확인하세요!",
                to: "/employees/attendances",
            },
            {
                name: "직원 담당 회원",
                description: "직원이 담당하는 회원을 확인하세요!",
                to: "/employees/members",
            }
        ]
    },
    {
        name: "업무 자동화",
        to: "/automations",
        items: [
            {
                name: "메세지 자동화",
                description: "메세지를 자동으로 보내세요!",
                to: "/automations/messages",
            },
            {
                name: "메세지 템플릿 관리",
                description: "메세지 템플릿을 관리하세요!",
                to: "/messages/templates",
            },
        ]
    },
    {
        name: "DM",
        to: "/dm",  
        items: [
            {
                name: "DM 보내기",
                description: "DM을 보내세요!",
                to: "/dm/send",
            },
            {
                name: "안읽은 DM",
                description: "안읽은 DM을 확인하세요!",
                to: "/dm/unread",
            },
            {
                name: "전체 DM",
                description: "전체 DM을 확인하세요!",
                to: "/dm/all",
            },
        ]
    },
    {
        name: "커뮤니티",
        to: "/community",
        items: [
            {
                name: "전체 게시글",
                description: "커뮤니티의 전체 게시글을 확인하세요!",
                to: "/community/posts",
            },
            {
                name: "인기글",
                description: "커뮤니티의 인기글을 확인하세요!",
                to: "/community/popular",
            },
            {
                name: "최근 게시글",
                description: "커뮤니티의 최근 게시글을 확인하세요!",
                to: "/community/recent",
            },                
            {
                name: "게시글 작성",
                description: "커뮤니티의 게시글을 작성하세요!",
                to: "/community/posts/create",
            },
        ]
    },
]

export default function Navigation() {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
        <div className="flex items-center">
            <Link to="/" className="font-bold tracking-tighter text-lg">MemBox</Link>
            <Separator orientation="vertical" className="h-6 mx-4"/>
            <NavigationMenu>
                <NavigationMenuList>
                    {menus.map((menu) => (
                        <NavigationMenuItem key={menu.name}>
                            <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    </nav>
  );
}