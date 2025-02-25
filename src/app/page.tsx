'use client';

import SignIn from '@/components/oauth/GithubSignIn';
import { SignOut } from '@/components/oauth/GithubSignOut';
import { UserAvatar } from '@/components/oauth/UserAvatar';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data } = useSession()
  console.log(data);
  
	return (
		<div className="">
			<nav>
				<SignIn />
        <SignOut />
				<UserAvatar session={data} />
			</nav>
		</div>
	);
}
