'use client';

import { MoreHorizontal, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export interface ITrend {
    id: number
    name: string
    posts: string
}

export interface ISuggestion {
    id: number
    name: string
    [key: string]: any
}

interface RightSideProps {
    trends: Array<ITrend>
    suggestions: Array<ISuggestion>
}

function RightSide(props: RightSideProps) {
    const { trends, suggestions} = props

    return (
        <div className="w-80 p-4 hidden lg:block">
					<div className="sticky top-0 space-y-4">
						{/* 搜索框 */}
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								className="pl-10 bg-muted border-none"
								placeholder="搜索"
							/>
						</div>

						{/* 热门话题 */}
						<Card>
							<CardHeader className="pb-2">
								<h2 className="text-lg font-bold">热门话题</h2>
							</CardHeader>
							<CardContent className="space-y-4">
								{trends.map((trend) => (
									<div
										key={trend.id}
										className="flex justify-between"
									>
										<div>
											<p className="font-medium">
												{trend.name}
											</p>
											<p className="text-xs text-muted-foreground">
												{trend.posts}
											</p>
										</div>
										<button>
											<MoreHorizontal className="h-4 w-4" />
										</button>
									</div>
								))}
							</CardContent>
							<CardFooter>
								<Button
									variant="ghost"
									className="w-full text-primary"
								>
									显示更多
								</Button>
							</CardFooter>
						</Card>

						{/* 推荐关注 */}
						<Card>
							<CardHeader className="pb-2">
								<h2 className="text-lg font-bold">推荐关注</h2>
							</CardHeader>
							<CardContent className="space-y-4">
								{suggestions.map((suggestion) => (
									<div
										key={suggestion.id}
										className="flex items-center justify-between"
									>
										<div className="flex items-center gap-2">
											<Avatar className="h-10 w-10">
												<AvatarImage
													src={suggestion.avatar}
												/>
												<AvatarFallback>
													{suggestion.name[0]}
												</AvatarFallback>
											</Avatar>
											<div>
												<p className="font-medium text-sm">
													{suggestion.name}
												</p>
												<p className="text-xs text-muted-foreground">
													@{suggestion.handle}
												</p>
											</div>
										</div>
										<Button size="sm" variant="outline">
											关注
										</Button>
									</div>
								))}
							</CardContent>
							<CardFooter>
								<Button
									variant="ghost"
									className="w-full text-primary"
								>
									显示更多
								</Button>
							</CardFooter>
						</Card>

						{/* 页脚 */}
						<div className="text-xs text-muted-foreground">
							<div className="flex flex-wrap gap-2">
								<a href="#" className="hover:underline">
									条款
								</a>
								<a href="#" className="hover:underline">
									隐私政策
								</a>
								<a href="#" className="hover:underline">
									Cookie
								</a>
								<a href="#" className="hover:underline">
									广告信息
								</a>
								<a href="#" className="hover:underline">
									更多
								</a>
							</div>
						</div>
					</div>
				</div>
    );
}

export default RightSide;