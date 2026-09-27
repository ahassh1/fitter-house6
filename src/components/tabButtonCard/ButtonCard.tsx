"use client";

import Image from "next/image";
import Link from "next/link";

import { IlibraryType } from "@/types/libraryType";
import { toast } from "react-toastify";

interface ButtonCardProps {
  exercise: IlibraryType;
  handleRemove: (id: number) => void;
  showMarkAsDone: boolean;
}
const ButtonCard = ({
  exercise,
  handleRemove,
  showMarkAsDone,
}: ButtonCardProps) => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-gray-800 bg-[#1a1d23] p-4 sm:flex-row sm:items-center sm:justify-between">
    
      <div className="flex items-center gap-4">
    
        <div className="relative h-24 w-36 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            sizes="144px"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-lg font-bold uppercase text-white">
            {exercise.name}
          </h2>

          <p className="text-sm text-gray-400">
            {exercise.equipment}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
           
            <span className="text-gray-300">
              ◷ {exercise.duration} min
            </span>

  
            <span className="text-gray-300">
              ♨ {exercise.caloriesBurned} kcal
            </span>

            <span className="text-[#C2F800]">
              ★ {exercise.rating}
            </span>
          </div>
        </div>
      </div>

    <div className="flex items-center gap-2">
    
        <Link
          href={`/exercise/${exercise.id}`}
          className="rounded-full border border-gray-600 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#C2F800] hover:text-[#C2F800]"
        >
          View Details
        </Link>

        {showMarkAsDone && (
          <button
          onClick={()=>  toast.info(`${exercise.name} marked as done!`)}
            type="button"
            className="rounded-full bg-[#C2F800] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#d5ff33]"
          >
            ✓ Mark as Done
          </button>
        )}

        <button
          type="button"
          onClick={() =>{
            toast.info(`${exercise.name} remove exercise successfully`)
            handleRemove(exercise.id)
          }}
          className="cursor-pointer px-2 text-xl text-gray-400 transition hover:text-red-400"
          aria-label={`Remove ${exercise.name}`}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ButtonCard;