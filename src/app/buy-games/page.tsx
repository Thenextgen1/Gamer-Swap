import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/utils/auth";

const BuyGames = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login/?callbackUrl=/buy-games");
  }

  return (
    <main>
      <p>Server Protected</p>
    </main>
  );
};

export default BuyGames;
