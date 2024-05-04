import { useParams } from "react-router-dom";
const UserRepositoryPage = () => {
  const { user } = useParams();

  return <div className="text-white">User Profile Page for {user}</div>;
};

export default UserRepositoryPage;
