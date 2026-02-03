import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const isAuthenticated = false; // pretend check

  if (!isAuthenticated) {
    redirect("/login");
  }

  return <h1>Welcome to the Dashboard</h1>;
}
