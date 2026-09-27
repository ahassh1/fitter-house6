"use client";

import { ExerciseContext } from "@/context/LibraryContext";
import { IlibraryType } from "@/types/libraryType";
import { useContext } from "react";

const SaveLater = ({ exercise }: { exercise: IlibraryType }) => {
  const { saveLater, setSaveLater } = useContext(ExerciseContext);

  const handleSaveLater = () => {
    setSaveLater([...saveLater, exercise]);
    console.log(exercise);

    alert(`You have read today "${exercise.name}"`);
  };

  return (
    <div>
      <button
        onClick={()=> handleSaveLater()}
        className="w-full cursor-pointer rounded-lg bg-gray-100 border border-[#d5ff33] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#f2fdc5] sm:w-auto"
      >
        Save for later
      </button>
    </div>
  );
};

export default SaveLater;