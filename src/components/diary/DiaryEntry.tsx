import getStarsIcons from "@/utils/getStarsIcons";

const DiaryEntry: React.FC<{ entry: any }> = ({ entry }) => {
  return (
    <div className="flex w-full flex-row border border-black p-5">
      <p className="my-auto pt-1 text-sm">{entry.date}</p>
      <p className="ml-4 text-xl font-semibold">{entry.cafe.name}</p>
      <p className="my-auto ml-4 pt-1 text-sm">{getStarsIcons(entry.score)}</p>
      <p className="my-auto ml-4 pt-1 text-sm font-semibold">{entry.origin}</p>
      <p className="text-xl">{entry.type}</p>
    </div>
  );
};

export default DiaryEntry;
