import { BarChart3Icon, BellIcon, LogOutIcon, MessageCircleIcon, SettingsIcon, UserIcon } from "lucide-react";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { Separator } from "./ui/separator";

const USER_ROLES = {
    ADMIN: "ADMIN",
    MANAGER: "MANAGER",
    MEMBER: "MEMBER",
} as const;

type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES];

interface NavigationProps {
    isLoggedIn: boolean;
    role?: UserRole;
    hasNotifications?: boolean;
    hasMessages?: boolean;
}

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
    {
        name: "통계",
        to: "/statistics",
    }
]

export default function Navigation({
    isLoggedIn,
    role,
    hasNotifications,
    hasMessages,
}: NavigationProps) {
  const filteredMenus = isLoggedIn && role ? menus.filter(menu => {
    switch (role) {
      case USER_ROLES.ADMIN:
        return true;
      case USER_ROLES.MANAGER:
        return menu.name !== "직원관리";
      case USER_ROLES.MEMBER:
        return menu.name === "통계";
      default:
        return false;
    }
  }) : [];

  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
        <div className="flex items-center">
            <Link to="/" className="font-bold tracking-tighter text-lg">MemBox</Link>
            {isLoggedIn ? (
                <>
                    <Separator orientation="vertical" className="h-6 mx-4 "/>
                    <NavigationMenu>
                        <NavigationMenuList>
                            {filteredMenus.map((menu) => (
                                <NavigationMenuItem key={menu.name}>
                                    {menu.items ? (
                                        <>
                                            <Link to={menu.to}>
                                                <NavigationMenuTrigger className="cursor-pointer">
                                                    {menu.name}
                                                </NavigationMenuTrigger>
                                            </Link>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[600px] font-light gap-3 p-4 grid-cols-2">
                                                    {menu.items?.map((item) => (
                                                        <NavigationMenuItem 
                                                            key={item.name} 
                                                            className="select-none rounded-md transition-colors hover:bg-accent/50 focus:bg-accent/50"
                                                        >
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    className="p-3 space-y-1 block leading-none no-underline outline-none"
                                                                    to={item.to}
                                                                >
                                                                    <span className="text-sm font-medium leading-none">
                                                                        {item.name}
                                                                    </span>                                                
                                                                    <p className="text-sm leading-snug text-muted-foreground">
                                                                        {item.description}
                                                                    </p>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </NavigationMenuItem>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                                            {menu.name}
                                        </Link>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </>
            ) : (
                null
            )}
        </div>
        {isLoggedIn ? 
        <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" asChild className="relative"> 
                <Link to="/my/notifications">
                    <BellIcon className="w-4 h-4" />
                    {hasNotifications ? (
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
                    ) : null}
                </Link>
            </Button>
            <Button size="icon" variant="ghost" asChild className="relative">
                <Link to="/my/messages">
                    <MessageCircleIcon className="w-4 h-4" />
                    {hasMessages ? (
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
                    ) : null}
                </Link>
            </Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="cursor-pointer">
                    <Avatar>
                        <AvatarImage src="https://github.com/Going9.png" />
                        <AvatarFallback>L</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel className="flex flex-col">
                        <span className="font-medium">iggyu</span>
                        <span className="text-xs text-muted-foreground">
                            @userName 
                        </span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link to="/my/dashboard">
                                <BarChart3Icon className="w-4 h-4 mr-2" />
                                대시보드
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link to="/my/profile">
                                <UserIcon className="w-4 h-4 mr-2" />   
                                프로필
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link to="/my/settings">
                                <SettingsIcon className="w-4 h-4 mr-2" />
                                세팅
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link to="/auth/logout">
                                <LogOutIcon className="w-4 h-4 mr-2" />
                                로그아웃
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

        : (
            <div className="flex items-center gap-4">
                <Button asChild variant="outline" size="sm" className="cursor-pointer">
                    <Link to="/auth/login">로그인</Link>
                </Button>
                <Button asChild size="sm" className="cursor-pointer">
                    <Link to="/auth/signup">회원가입</Link>
                </Button>
            </div>
        )}
    </nav>
  );
}