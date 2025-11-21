import { getSiteContent } from '@/actions/content';
import AdminDashboard from '@/components/admin/admin-dashboard';

export default async function AdminPage() {
  const content = await getSiteContent();
  return <AdminDashboard initialContent={content} />;
}
