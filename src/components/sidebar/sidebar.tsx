import {
	Bell,
	Bookmark,
	Home,
	Mail,
	MoreHorizontal,
	Search,
	User,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';

function Sidebar() {
	const navList = [
		{
			title: '主页',
			icon: <Home className="h-5 w-5" />,
		},
		{
			title: '探索',
			icon: <Search className="h-5 w-5" />,
		},
		{
			title: '个人资料',
			icon: <User className="h-5 w-5" />,
		},
		{
			title: '更多',
			icon: <MoreHorizontal className="h-5 w-5" />
		}
	];

	return (
		<div className="w-64 fixed h-screen border-r p-4 hidden md:block">
			<div className="flex flex-col h-full">
				<div className="text-2xl font-bold mb-8">Next Social</div>
				<nav className="space-y-2 flex-1">
					{navList.map((navItem) => (
						<Button
							variant="ghost"
							className="w-full justify-start gap-3"
							key={navItem.title}
						>
							{navItem.icon}
							<span>{navItem.title}</span>
						</Button>
					))}
				</nav>

				<Button className="w-full mt-4">登录</Button>
				<div className="mt-auto pt-4">
					<div className="flex items-center gap-2 p-2 rounded-full cursor-pointer">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<div className="flex justify-between w-full">
									<div className="flex gap-2">
										<Avatar>
											<AvatarImage src="https://github.com/shadcn.png" />
											<AvatarFallback>用</AvatarFallback>
										</Avatar>
										<div className="flex-1 overflow-hidden">
											<p className="font-medium text-sm">
												当前用户
											</p>
											<p className="text-xs text-muted-foreground truncate">
												@username
											</p>
										</div>
									</div>

									<MoreHorizontal className="h-4 w-4" />
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-56">
								<DropdownMenuItem>Log out</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
