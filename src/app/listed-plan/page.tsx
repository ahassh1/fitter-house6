"use client";

import { ExerciseContext } from "@/context/LibraryContext";
import { useContext } from "react";

const ListedPlan = () => {
  const { addToday, saveLater } = useContext(ExerciseContext);

  console.log(addToday, saveLater);

  return <div>
   add today :  <h1>{addToday.length}</h1>
   save later :  <h1>{saveLater.length}</h1>
  </div>;
};

export default ListedPlan;