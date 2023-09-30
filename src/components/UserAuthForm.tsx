'use client';
import React, { FC, useState } from 'react';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';
import { signIn, useSession } from 'next-auth/react';
import { Icons } from './Icons';
import { useToast } from '@/hooks/use-toast';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {data: session, status} = useSession()

  console.log(session, status)

  const {toast} = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try { 
      await signIn('google');
    } catch (error) {
      // toast notification
      toast({
        title: 'There was a problem.',
        description: 'There was an error logging in with Google',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div

      className={cn('flex justify-center', className)}
      {...props}>
      <Button
        onClick={loginWithGoogle}
        isLoading={isLoading}
        className='w-full'>
        {isLoading ? null : <Icons.google className='h-5 w-45 mr-2' />}  
        Google
      </Button>
    </div>
  );
};
export default UserAuthForm;
