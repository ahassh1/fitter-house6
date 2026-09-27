import Image from "next/image";
import Link from "next/link";

import { IlibraryType } from "@/types/libraryType";
import pageNotFoundImg from "@/assets/pagenotfound.jpg";
import AddToday from "@/components/LibraryDetails/AddToday";

const DetailsPage = ({
  exercise,
}: {
  exercise: IlibraryType
}) => {
  if (!exercise) {
    return (
      <section className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-10 text-center">
        <Image
          src={pageNotFoundImg}
          alt="Page not found"
          width={400}
          height={300}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="mb-6 w-full max-w-xs object-contain sm:max-w-sm"
        />

        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          404 - Page Not Found
        </h1>

        <p className="mt-3 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
          This workout could not be found. Go back to the workout library and
          explore more exercises.
        </p>

        <Link
          href="/workout"
          className="mt-6 rounded-lg bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#d5ff33]"
        >
          Go Back to Workouts
        </Link>
      </section>
    );
  }

  const {
    image,
    name,
    description,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions,
  } = exercise;

  return (
    <section className="container mx-auto px-4 py-6 sm:py-8 lg:px-0 lg:py-12">
      <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#0f1014] sm:rounded-2xl">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-64 w-full sm:h-80 md:h-96 lg:h-full `lg:min-h-[420px]`">
            <Image
              src={image}
              alt={name}
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="p-5 sm:p-7 md:p-8 lg:p-10">
            <p className="mb-2 text-[10px] font-semibold tracking-[2px] text-[#C2F800] sm:text-xs sm:tracking-[3px]">
              WORKOUT DETAILS
            </p>

            <h1 className=" text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl md:text-4xl">
              {name}
            </h1>

            <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#C2F800] px-3 py-1 text-[10px] font-bold text-black sm:text-xs"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-gray-800 bg-[#16181f]">
              <div className="flex flex-col gap-1 border-b border-gray-800 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
                  Equipment
                </span>

                <span className="text-sm text-gray-200 sm:text-right">
                  {equipment}
                </span>
              </div>

              <div className="flex flex-col gap-1 border-b border-gray-800 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
                  Difficulty
                </span>

                <span className="text-sm text-gray-200 sm:text-right">
                  {difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
                  Sets
                </span>

                <span className="text-sm text-gray-200">{sets}</span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
                  Reps
                </span>

                <span className="text-sm text-gray-200">{reps}</span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
                  Duration
                </span>

                <span className="text-sm text-gray-200">
                  {duration} min
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
                  Calories
                </span>

                <span className="text-sm text-gray-200">
                  {caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
                  Rating
                </span>

                <span className="text-sm font-semibold text-[#C2F800]">
                  ★ {rating}
                </span>
              </div>
            </div>

            <div className="mt-7">
              <h2 className="text-sm font-bold uppercase tracking-wide text-white sm:text-base">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">
                {instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-6 text-gray-400"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-[#C2F800]">
                      {index + 1}
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <AddToday exercise={exercise}/>

              <button className="w-full cursor-pointer rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-[#C2F800] hover:text-[#C2F800] sm:w-auto">
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;