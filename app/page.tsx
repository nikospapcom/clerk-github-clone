import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full font-mono text-sm">
        <div className="w-full items-center justify-between lg:flex">
          <UserButton afterSignOutUrl="/" />
          <OrganizationSwitcher />
        </div>
        <div className="text-center mt-10">
          <Link href="organizations">My Orgs</Link>
        </div>
      </div>
    </main>
  );
}
