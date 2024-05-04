import "./App.css";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [seachResults, setSeachResults] = useState();
  async function search(searchText) {
    const res = await fetch(
      `https://api.github.com/search/users?q=${searchText}`
    );
    if (res.ok) {
      const data = await res.json();
      setSeachResults(data.items);
    }
  }
  return (
    <div className="bg-[#0D1117] w-full py-36 min-h-screen flex flex-col gap-8 items-center">
      <h1 className="text-8xl font-outfit font-extrabold bg-gradient-to-r inline-block from-[#13139F] via-[#5F429C] to-[#089B84] text-transparent bg-clip-text">
        Github Reimagined
      </h1>
      <p className="text-2xl text-center w-1/2 text-white">
        Explore GitHub like never before! Discover profiles, delve into
        repositories, and traverse commit histories with our intuitive,
        user-friendly interface.
      </p>
      <div className="flex flex-col">
        <div className="flex gap-4 justify-around">
          <div
            className={`${
              seachResults && seachResults.length
                ? "bg-white p-2 rounded-xl"
                : ""
            }`}
          >
            <input
              type="text"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                if (e.target.value.length > 3) {
                  search(e.target.value);
                } else {
                  setSeachResults([]);
                }
              }}
              placeholder="Search"
              className="px-4 py-2 rounded-lg"
            ></input>
            <div className="bg-white px-4 max-h-24 overflow-y-scroll">
              {seachResults?.length > 0 &&
                seachResults.map((each, i) => (
                  <div className=" cursor-pointer" key={i}>
                    {each?.login}
                  </div>
                ))}
            </div>
          </div>

          <button
            onClick={() => search()}
            className="bg-[#733FC7] h-min text-white px-4 py-2 rounded-lg"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
