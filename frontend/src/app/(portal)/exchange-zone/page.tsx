import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/utils/auth";

const ExchangeZone = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login/?callbackUrl=/exchange-zone");
  }

  return (
    <main>
      <p>Server Protected</p>
    </main>
  );
};

export default ExchangeZone;
