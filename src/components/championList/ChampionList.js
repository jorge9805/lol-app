import { Link } from "react-router-dom";
import ChampionCard from "../championCard/ChampionCard";
import useGetChampionsByTags from "../../hooks/useGetChampionsByTags";
const ChampionList = ({ tag, search }) => {
  const { data: championList, loading } = useGetChampionsByTags(tag, search);
  return (
    <div className="p-0 bg-slate-100 sm:p-14 xl:px-72 xl:py-14">
      {loading ? (
        <div className="scroll-auto snap-start flex justify-center items-center h-screen">
          <h1>Loading...</h1>
        </div>
      ) : championList.length === 0 ? (
        <h1>No champions found</h1>
      ) : (
        <div className="animate-fade p-10 scroll-auto grid-cols-1 flex flex-col items-center  gap-7 sm:grid-cols-gridlol sm:grid">
          {championList.map((champion) => (
            <ChampionCard key={champion.id} {...champion} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChampionList;
