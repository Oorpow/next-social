import type { Session } from 'next-auth';

export function UserAvatar({ session }: { session: Session | null }) {
	return (
		<div>
			<img src={session?.user?.image ?? ''} alt="" className='w-[50px]' />
		</div>
	);
}
