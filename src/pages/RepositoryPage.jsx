import { useParams } from "react-router-dom";

export default function RepositoryPage() {
  let { user, repositoryName } = useParams();

  // Now you can use `user` and `repositoryName` to fetch or display repository data
  // ...

  return (
    <div className="text-white">
      User: {user}, repository:{repositoryName}
    </div>
  );
}
