import { IlibraryType } from "@/types/libraryType";
import Image from "next/image";
import React from "react";

interface LibraryCardProps {
  library: IlibraryType;
}

const LibraryCard = ({
  library: {
    image,
    name,
    difficulty,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  },
}: LibraryCardProps) => {
  return (
    <div className="cursor-pointer group overflow-hidden rounded-2xl border border-gray-800 bg-[#151515] transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/50 hover:shadow-xl hover:shadow-black/30">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute right-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {difficulty}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-md bg-[#C2F800] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-bold uppercase tracking-wide text-white transition-colors duration-200 group-hover:text-[#C2F800]">
          {name}
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Equipment: <span className="text-gray-300">{equipment}</span>
        </p>

        <div className="mt-5 grid grid-cols-3 divide-x divide-gray-800 border-y border-gray-800 py-4">
          <div className="text-center">
            <p className="text-sm font-semibold text-white">{duration} min</p>
            <p className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">
              Duration
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold text-white">
              {caloriesBurned}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">
              Calories
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold text-[#C2F800]">
              ★ {rating}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">
              Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;