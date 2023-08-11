import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/utils/auth";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login/?callbackUrl=/my/dashboard");
  }

  return (
    <main>
      <p>Server Protected</p>
    </main>
  );
};

export default Dashboard;
