'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import SignIn from '@/components/oauth/GithubSignIn';
import { SignOut } from '@/components/oauth/GithubSignOut';
import { UserAvatar } from '@/components/oauth/UserAvatar';
import Sidebar from '@/components/sidebar/sidebar';
import RightSide, {
	ISuggestion,
	ITrend,
} from '@/components/right-side/right-side';
import MiddleArea, { IPost } from '@/components/middle-area/middle-area';

export default function Home() {
	const { data } = useSession();
	// NOTE username email，登录完成后，用useraction创建一个用户?
	console.log(data);

	const [posts, setPosts] = useState<Array<IPost>>([
		{
			id: 1,
			user: {
				name: '张三',
				handle: 'zhangsan',
				avatar: '',
			},
			content: '今天的天气真好，出去散步感觉很舒服！#好天气 #生活',
			time: '2小时前',
			likes: 24,
			comments: 5,
			reposts: 3,
		},
		{
			id: 2,
			user: {
				name: '李四',
				handle: 'lisi',
				avatar: '',
			},
			content: '刚刚看完一部很棒的电影，强烈推荐给大家！#电影推荐',
			time: '4小时前',
			likes: 56,
			comments: 12,
			reposts: 8,
		},
		{
			id: 3,
			user: {
				name: '王五',
				handle: 'wangwu',
				avatar: '',
			},
			content:
				'分享一个我最近学到的编程技巧，希望对大家有帮助。#编程 #技术分享',
			time: '昨天',
			likes: 120,
			comments: 25,
			reposts: 15,
		},
	]);

	const [trends] = useState<Array<ITrend>>([
		{ id: 1, name: '#科技新闻', posts: '2.5万帖子' },
		{ id: 2, name: '#环球旅行', posts: '1.8万帖子' },
		{ id: 3, name: '#美食分享', posts: '1.2万帖子' },
		{ id: 4, name: '#编程学习', posts: '9千帖子' },
		{ id: 5, name: '#音乐推荐', posts: '7千帖子' },
	]);
	const [suggestions] = useState<Array<ISuggestion>>([
		{
			id: 1,
			name: '科技博主',
			handle: 'tech_blogger',
			avatar: '',
		},
		{
			id: 2,
			name: '旅行达人',
			handle: 'travel_expert',
			avatar: '',
		},
		{
			id: 3,
			name: '美食家',
			handle: 'food_lover',
			avatar: '',
		},
	]);

	return (
		// <SignIn />
		// <SignOut />
		// <UserAvatar session={data} />

		<div className="min-h-screen bg-background">
			<div className="container mx-auto flex">
				{/* 左侧导航栏 */}
				<Sidebar />
				{/* 中间内容区 */}
				<MiddleArea posts={posts} />
				<RightSide trends={trends} suggestions={suggestions} />
			</div>
		</div>
	);
}
