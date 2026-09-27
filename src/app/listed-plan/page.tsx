"use client";

import { ExerciseContext } from "@/context/LibraryContext";
import { useContext } from "react";

const ListedPlan = () => {
  const { addToday } = useContext(ExerciseContext);

  console.log(addToday);

  return <div>Listed Plan</div>;
};

export default ListedPlan;