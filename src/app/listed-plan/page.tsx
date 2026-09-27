"use client";

import ButtonCard from "@/components/tabButtonCard/ButtonCard";
import { ExerciseContext } from "@/context/LibraryContext";
import Link from "next/link";
import { useContext, useState } from "react";

const ListedPlan = () => {
  const {
    addToday,
    setAddToday,
    saveLater,
    setSaveLater,
  } = useContext(ExerciseContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">(
    "today"
  );


  const handleRemoveToday = (id: number) => {
  setAddToday(
    addToday.filter((exercise) => exercise.id !== id)
  );
};

const handleRemoveSaved = (id: number) => {
  setSaveLater(
    saveLater.filter((exercise) => exercise.id !== id)
  );
};

  const currentExercises =
    activeTab === "today" ? addToday : saveLater;

  const totalExercises = currentExercises.length;

  const totalMinutes = currentExercises.reduce(
    (total, exercise) => total + exercise.duration,
    0
  );

  const totalCalories = currentExercises.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0
  );

  return (
    <section className="container mx-auto px-4 py-8 lg:px-0">
  
      <div className="mb-8">
        <h1 className="text-2xl font-bold uppercase tracking-wide text-white">
          My Plan
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

  
      <div className="mb-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-800 bg-[#1a1d23] sm:grid-cols-3">
    
        <div className="border-b border-gray-800 p-5 sm:border-b-0 sm:border-r">
          <p className="text-sm text-gray-400">
            Exercises
          </p>

          <h2 className="mt-1 text-3xl font-bold text-[#C2F800]">
            {totalExercises}
          </h2>
        </div>


        <div className="border-b border-gray-800 p-5 sm:border-b-0 sm:border-r">
          <p className="text-sm text-gray-400">
            Minutes
          </p>

          <h2 className="mt-1 text-3xl font-bold text-white">
            {totalMinutes}
          </h2>
        </div>


        <div className="p-5">
          <p className="text-sm text-gray-400">
            Calories
          </p>

          <h2 className="mt-1 text-3xl font-bold text-white">
            {totalCalories}
          </h2>
        </div>
      </div>


      <div className="w-full">

        <div className="mb-6 flex gap-2 border-b border-gray-800">
          <button
            type="button"
            onClick={() => setActiveTab("today")}
            className={`px-5 py-3 text-sm font-semibold transition ${
              activeTab === "today"
                ? "border-b-2 border-[#C2F800] text-[#C2F800]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Todays Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-3 text-sm font-semibold transition ${
              activeTab === "saved"
                ? "border-b-2 border-[#C2F800] text-[#C2F800]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

 
        {activeTab === "today" && (
          <div>
            {addToday.length > 0 ? (
              <div className="space-y-4">
                {addToday.map((exercise) => (
                  <ButtonCard
                    key={exercise.id}
                    exercise={exercise}
                    handleRemove={handleRemoveToday}
                    showMarkAsDone={true}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-gray-800 bg-[#16181f] px-4 text-center">
                <h2 className="text-xl font-semibold text-gray-300">
                  No exercises added yet.
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Browse the workout library and add a lift to get
                  today moving.
                </p>

                <Link
                  href="/"
                  className="mt-4 rounded-lg bg-[#C2F800] px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#d5ff33]"
                >
                  Go to Workouts
                </Link>
              </div>
            )}
          </div>
        )}

  
        {activeTab === "saved" && (
          <div>
            {saveLater.length > 0 ? (
              <div className="space-y-4">
                {saveLater.map((exercise) => (
                  <ButtonCard
                    key={exercise.id}
                    exercise={exercise}
                    handleRemove={handleRemoveSaved}
                    showMarkAsDone={false}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-gray-800 bg-[#16181f] px-4 text-center">
                <h2 className="text-xl font-semibold text-gray-300">
                  No saved exercises yet.
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Browse the workout library and save an exercise
                  for later.
                </p>

                <Link
                  href="/"
                  className="mt-4 rounded-lg bg-[#C2F800] px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#d5ff33]"
                >
                  Go to Workouts
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ListedPlan;