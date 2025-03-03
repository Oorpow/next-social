import {
	Home,
	MoreHorizontal,
	Search,
	User,
} from 'lucide-react';
import { signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import SignIn from '../oauth/GithubSignIn';

interface SidebarProps {
	session: Session | null;
}

function Sidebar(props: SidebarProps) {
	const { session } = props;

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
			icon: <MoreHorizontal className="h-5 w-5" />,
		},
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

				{session?.user ? (
					<div className="mt-auto pt-4">
						<div className="flex items-center gap-2 p-2 rounded-full cursor-pointer">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<div className="flex justify-between w-full">
										<div className="flex gap-2">
											<Avatar>
												<AvatarImage
													src={session?.user?.image ?? ''}
												/>
												<AvatarFallback>
													{session?.user?.name}
												</AvatarFallback>
											</Avatar>
											<div className="flex-1 overflow-hidden">
												<p className="font-medium text-sm">
													当前用户
												</p>
												<p className="text-xs text-muted-foreground truncate">
													{session?.user?.name}
												</p>
											</div>
										</div>

										<MoreHorizontal className="h-4 w-4" />
									</div>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-56">
									<DropdownMenuItem onClick={() => signOut()}>
										logout
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
				) : (
					<SignIn />
				)}
			</div>
		</div>
	);
}

export default Sidebar;
