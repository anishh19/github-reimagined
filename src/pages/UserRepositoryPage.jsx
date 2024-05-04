import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const UserRepositoryPage = () => {
  const { user } = useParams();

  const [userData, setUserData] = useState();
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const repoRes = await fetch(`https://api.github.com/users/${user}/repos`);

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setUserData(data);
      }

      if (repoRes.ok) {
        const repoData = await repoRes.json();
        console.log(repoData);
        setUserRepos(repoData);
      }
    }
    getData();
  }, [user]);

  return (
    <div className="text-white flex p-8 gap-8">
      <section className="p-4 text-center h-min flex flex-col items-center gap-4 bg-slate-700">
        <img src={userData?.avatar_url} className="h-24 w-24 rounded-full" />
        <div>
          <h2 className="font-bold text-2xl">{userData?.name}</h2>
          <h3>{userData?.login}</h3>
        </div>
        {userData?.bio && <div>{userData?.bio}</div>}
      </section>
      {userRepos && (
        <section className="text-white">
          <h2 className="text-4xl pb-8">Public Repsoitories:</h2>
          <div className="border-t border-collapse border-[#13139F]">
            {userRepos.slice(0, 10).map((item) => (
              <div
                key={item.id}
                className="py-2 border-b border-collapse border-[#13139F]"
              >
                <Link
                  to={`/${item?.full_name}`}
                  className="text-xl text-[#089B84]"
                >
                  {item?.name}
                </Link>
                <span className="text-xs">{item?.full_name}</span>
                <p>{item?.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default UserRepositoryPage;
