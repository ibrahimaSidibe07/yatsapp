import { Suspense } from "react";
import AllUsersLoading from "./components/allUsersLoading";
import AllUsersContent from "./components/allUsersContent";
import { headers } from "next/headers";

export default async function ListUsersPage() {
  return (
    <div className="h-full text-white flex flex-col overflow-hidden">
      <Suspense fallback={<AllUsersLoading />}>
        <AllUsersContent userIdContraint={""} />
      </Suspense>
    </div>
  );
}
