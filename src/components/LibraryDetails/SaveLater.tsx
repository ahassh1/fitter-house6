"use client";

import { ExerciseContext } from "@/context/LibraryContext";
import { IlibraryType } from "@/types/libraryType";
import { useContext } from "react";
import { toast } from "react-toastify";

const SaveLater = ({ exercise }: { exercise: IlibraryType }) => {
  const { saveLater, setSaveLater } = useContext(ExerciseContext);
 const handleSaveLater = () => {
  if (saveLater.some((item) => item.id === exercise.id)) {
    toast.error(`${exercise.name}Already added!`);
    return;
  }

  setSaveLater([...saveLater, exercise]);
  toast.success(`${exercise.name} Added successfully!`);
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