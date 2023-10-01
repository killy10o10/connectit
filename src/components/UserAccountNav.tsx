'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { User } from 'next-auth';
import { FC } from 'react';
import UserAvatar from './UserAvatar';
import { DropdownMenuItem, DropdownMenuSeparator } from './ui/dropdown-menu';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

interface UserAccountNavProps {
  user: Pick<User, 'name' | 'image' | 'email'>;
}

const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => {

  const handleSignOut = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    signOut({
      callbackUrl: `${window.location.origin}/sign-in`
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className='h-8 w-8'
          user={{
            name: user.name || null,
            image: user.image || null,
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='bg-white'
        align='end'>
        <div className='flex items-center justify-start gap-2 p-4'>
          <div className='flex flex-col space-y-1 leading-none'>
            {user.name && <p className='font-medium'>{user.name}</p>}
            {user.email && (
              <small className='font-medium w-[200px] truncate text-sm text-zinc-700'>
                {user.email}
              </small>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/">Feed</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/r/create">Create community</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>

      <DropdownMenuSeparator />

        <DropdownMenuItem onSelect={handleSignOut} className='cursor-pointer'>
         Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>  
    </DropdownMenu>
  );
};

export default UserAccountNav;
