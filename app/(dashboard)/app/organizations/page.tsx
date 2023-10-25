import { OrganizationList } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <OrganizationList
          afterSelectPersonalUrl="/"
          afterSelectOrganizationUrl="/"
        />
      </div>
    </div>
  );
}
