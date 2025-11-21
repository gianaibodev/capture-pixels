import { logout } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b p-4 flex justify-between items-center bg-white dark:bg-black sticky top-0 z-50">
        <div className="flex items-center gap-4">
           <h1 className="font-bold text-xl">Admin Dashboard</h1>
           <Link href="/" className="text-sm text-muted-foreground hover:underline">View Site</Link>
        </div>
        <form action={logout}>
          <Button variant="outline" size="sm">Logout</Button>
        </form>
      </header>
      <main className="flex-1 bg-gray-50 dark:bg-gray-900/50 p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}

