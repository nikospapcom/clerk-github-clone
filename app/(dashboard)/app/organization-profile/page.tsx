import { OrganizationProfile } from "@clerk/nextjs";

export default function OrganizationProfilePage() {
  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <OrganizationProfile />
      </div>
    </div>
  );
}
