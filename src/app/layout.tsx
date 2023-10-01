import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import AuthProvider from './providers/AuthProvider';

export const metadata = {
  title: 'Connectit',
  description:
    'Unleash the Power of Online Community. Connecting people through vibrant discussions, diverse perspectives, and endless possibilities. Join the conversation and experience a digital community like no other.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cn('bg-white text-slate-900 antialiased light', inter.className)}>
      <AuthProvider>
        <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
          {/* @ts-expect-error-server component */}
          <Navbar />
          <div className='container max-w-7xl mx-auto h-full pt-12'>
            {authModal}
            {children}
          </div>
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
