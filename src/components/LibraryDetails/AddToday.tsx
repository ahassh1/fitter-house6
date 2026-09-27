"use client";

import { ExerciseContext } from "@/context/LibraryContext";
import { IlibraryType } from "@/types/libraryType";
import { useContext } from "react";

const AddToday = ({ exercise }: { exercise: IlibraryType }) => {
  const { addToday, setAddToday } = useContext(ExerciseContext);

  const handleAddToday = () => {
    setAddToday([...addToday, exercise]);
    console.log(exercise);

    alert(`You have read today "${exercise.name}"`);
  };

  return (
    <div>
      <button
        onClick={()=> handleAddToday()}
        className="w-full cursor-pointer rounded-lg bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#d5ff33] sm:w-auto"
      >
        Add to Today&apos;s Plan
      </button>
    </div>
  );
};

export default AddToday;