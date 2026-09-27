import React from "react";

import LibraryCard from "../shared/LibraryCard";
import { IlibraryType } from "@/types/libraryType";

const getLibrary = async () => {
    try{

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/fitLogData.json`);
    
      const data = await res.json();
    
      return data;
    } catch(error){
      console.error("Error fatching books data:", error)
      return[]
    }
};
const Library = async () => {
  const libraryData: IlibraryType[] = await getLibrary();

  return (
    <section className="container mx-auto px-4 py-10 lg:px-0">

      <div className="mb-8 text-left">
        <p className="mb-2 text-xs font-semibold tracking-[3px] text-[#C2F800] sm:text-sm">
          WORKOUT COLLECTION
        </p>

        <h1 className="text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
          THE LIBRARY
        </h1>

        <p className="mt-2 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>


      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {libraryData.map((library) => (
          <LibraryCard
            key={library.id}
            library={library}
          />
        ))}
      </div>

    </section>
  );
};

export default Library;