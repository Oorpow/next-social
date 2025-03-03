'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export default function SignIn() {
	return <Button className="w-full mt-4" onClick={() => signIn('github')}>登录</Button>;
}
