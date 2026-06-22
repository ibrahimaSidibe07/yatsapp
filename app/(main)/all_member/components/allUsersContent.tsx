import ListAllUsers from "./listAllUsers";

export default async function AllUsersContent({
  userIdContraint,
}: {
  userIdContraint?: string | undefined;
}) {
  try {
    return (
      <ListAllUsers users={[]} myID={userIdContraint || ""} />
    );
  } catch (error) {
    console.error("Erreur AllUsersContent:", error);
    return <div>Erreur lors du chargement des membres</div>;
  }
}
