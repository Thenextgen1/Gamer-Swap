import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/utils/auth";

const Marketplace = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login/?callbackUrl=/marketplace");
  }

  return (
    <main>
      <p>Server Protected</p>
    </main>
  );
};

export default Marketplace;
