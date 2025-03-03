'use client';

import { Mail, Users, Bookmark } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Heart from "./components/Heart";

export interface IPost {
    id: number
    user: Record<string, any>
    content: string
    likes: number
    comments: number
    reposts: number
    time: string
}

interface MiddleAreaProps {
    posts: Array<IPost>
}

function MiddleArea(props: MiddleAreaProps) {
    const { posts } = props

	return (
		<div className="flex-1 min-h-screen border-r md:ml-64">
			<div className="sticky top-0 bg-background/95 backdrop-blur p-4 border-b">
				<h1 className="text-xl font-bold">主页</h1>
			</div>

			{/* 发布框 */}
			<div className="p-4 border-b">
				<div className="flex gap-4">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>用户</AvatarFallback>
					</Avatar>
					<div className="flex-1">
						<Input
							className="border-none text-lg bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
							placeholder="有什么新鲜事？"
						/>
						<div className="flex justify-between items-center mt-4">
							<div className="flex gap-2">
								{/* 这里可以放置附加媒体的按钮 */}
							</div>
							<Button size="sm">发布</Button>
						</div>
					</div>
				</div>
			</div>

			{/* 帖子列表 */}
			<div>
				{posts.map((post) => (
					<div
						key={post.id}
						className="p-4 border-b hover:bg-muted/50"
					>
						<div className="flex gap-3">
							<Avatar>
								<AvatarImage src={post.user.avatar} />
								<AvatarFallback>
									{post.user.name[0]}
								</AvatarFallback>
							</Avatar>
							<div className="flex-1">
								<div className="flex items-center gap-1">
									<span className="font-bold">
										{post.user.name}
									</span>
									<span className="text-muted-foreground">
										@{post.user.handle}
									</span>
									<span className="text-muted-foreground">
										·
									</span>
									<span className="text-muted-foreground">
										{post.time}
									</span>
								</div>
								<p className="mt-1 mb-2">{post.content}</p>
								<div className="flex justify-between max-w-md text-muted-foreground">
									<button className="flex items-center gap-1 hover:text-primary">
										<Mail className="h-4 w-4" />
										<span>{post.comments}</span>
									</button>
									<button className="flex items-center gap-1 hover:text-green-500">
										<Users className="h-4 w-4" />
										<span>{post.reposts}</span>
									</button>
									<button className="flex items-center gap-1 hover:text-red-500">
                                        <Heart post={post} />
										<span>{post.likes}</span>
									</button>
									<button className="flex items-center gap-1 hover:text-primary">
										<Bookmark className="h-4 w-4" />
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default MiddleArea;
