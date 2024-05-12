import CustomLink from "../../components/CustomLink";
import IconHaditsCalligraphy from "../../components/icons/IconHaditsCalligraphy";
import { useHadithNarrates } from "../../services/hadits";

const HaditsCard = ({ slug, title, total }) => {
  return (
    <CustomLink
      href={`/hadits/${slug}`}
      className="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"
    >
      <div className="flex items-center justify-between w-full">
        <h2 className="text-lg font-semibold transition-colors group-hover:text-primary">
          {title}
        </h2>
        <span className="text-xs text-gray-600 font-medium">
          {total} hadits
        </span>
      </div>
    </CustomLink>
  );
};

const Skeleton = () => {
  return (
    <div className="skeleton w-full flex flex-col gap-4 justify-center items-center">
      <div className="w-36 h-36 bg-slate-200 rounded-full "></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center w-full">
        {[...Array(9).keys()].map((n) => (
          <div
            key={n}
            className="skeleton border rounded-md p-4 group flex gap-4 items-center w-full"
          >
            <span className="bg-slate-200 h-7 w-full rounded-md"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hadits = () => {
  const hadithNarratesQuery = useHadithNarrates();

  return (
    <div>
      {hadithNarratesQuery.isLoading ? (
        <Skeleton />
      ) : (
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <div className="w-52 h-auto">
            <IconHaditsCalligraphy />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center w-full">
            <customlink href="https://v2.hadismuslim.com/single.html?bareedition=bukhari" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">Sahih Bukhori</h2><span classname="text-xs text-gray-600 font-medium">7.613 hadits</span></div></customlink>
            <customlink href="https://v2.hadismuslim.com/single.html?bareedition=ibnmajah" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">Sunan Ibn Majah</h2><span classname="text-xs text-gray-600 font-medium">4.391 hadits</span></div></customlink>
            <customlink href="https://v2.hadismuslim.com/single.html?bareedition=malik" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">Muwatta Imam Malik</h2><span classname="text-xs text-gray-600 font-medium">1.908 hadits</span></div></customlink>
           <customlink href="https://v2.hadismuslim.com/single.html?bareedition=muslim" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">Sahih Muslim</h2><span classname="text-xs text-gray-600 font-medium">7.613 hadits</span></div></customlink>
            <customlink href="https://v2.hadismuslim.com/single.html?bareedition=nasai" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">Sunan An Nasai</h2><span classname="text-xs text-gray-600 font-medium">5.808 hadits</span></div></customlink>
           <customlink href="https://v2.hadismuslim.com/single.html?bareedition=nawawi" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">40 Hadis Imam Nawawi</h2><span classname="text-xs text-gray-600 font-medium">92 hadits</span></div></customlink>
           <customlink href="https://v2.hadismuslim.com/single.html?bareedition=qudsi" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">40 Hadis Qudsi</h2><span classname="text-xs text-gray-600 font-medium">90 hadits</span></div></customlink>
           <customlink href="https://v2.hadismuslim.com/single.html?bareedition=tirmidhi" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">Jami At Tirmidhi</h2><span classname="text-xs text-gray-600 font-medium">4.006 hadits</span></div></customlink>
           <customlink href="https://hadismuslim.com/kitab/musnad-ahmad/" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">Musnad Ahmad</h2><span classname="text-xs text-gray-600 font-medium">26.363 hadits</span></div></customlink>
           <customlink href="https://hadismuslim.com/kitab/mustadrak-hakim/" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">Mustadrak Hakim</h2><span classname="text-xs text-gray-600 font-medium">672 hadits</span></div></customlink>
           <customlink href="https://hadismuslim.com/kitab/shahih-ibnu-hibban/" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">Shahih Ibnu Hibban</h2><span classname="text-xs text-gray-600 font-medium">2.769 hadits</span></div></customlink>
           <customlink href="https://hadismuslim.com/kitab/shahih-ibnu-khuzaimah/" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">Shahih Ibnu Khuzaimah</h2><span classname="text-xs text-gray-600 font-medium">1.808 hadits</span></div></customlink>
           <customlink href="https://hadismuslim.com/kitab/bulughul-maram/" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">Bulughul Maram</h2><span classname="text-xs text-gray-600 font-medium">1.597 hadits</span></div></customlink>
           <customlink href="https://hadismuslim.com/kitab/sunan-daruquthni/" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">Sunan Daruquthni</h2><span classname="text-xs text-gray-600 font-medium">4.790 hadits</span></div></customlink>
           <customlink href="https://hadismuslim.com/kitab/sunan-darimi/" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">Sunan Darimi</h2><span classname="text-xs text-gray-600 font-medium">3.367 hadits</span></div></customlink>
           <customlink href="https://hadismuslim.com/kitab/musnad-syafii/" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">Musnad Syafi’i</h2><span classname="text-xs text-gray-600 font-medium">1.802 hadits</span></div></customlink>
           <customlink href="https://v2.hadismuslim.com/single.html?bareedition=abudawud" classname="border rounded-md p-4 group hover:border-primary hover:bg-slate-50 transition-colors flex gap-4 items-center w-full"><div classname="flex items-center justify-between w-full"><h2 classname="text-lg font-semibold transition-colors group-hover:text-primary">Sunan Abu Dawud</h2><span classname="text-xs text-gray-600 font-medium">5324 hadits</span></div></customlink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hadits;
