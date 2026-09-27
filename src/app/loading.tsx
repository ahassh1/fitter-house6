import Image from "next/image";

import loadingImg from "@/assets/loader.png";

const Loading = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#0f1115] px-4">
      <div className="flex w-full max-w-sm flex-col items-center rounded-2xl border border-gray-800 bg-[#16181f] px-8 py-10 shadow-2xl">
        <div className="relative flex h-28 w-28 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-gray-700 border-t-[#C2F800]"></div>

          <div className="absolute h-20 w-20 animate-pulse rounded-full bg-[#C2F800]/10"></div>

          <Image
            src={loadingImg}
            alt="Loading"
            width={100}
            height={120}
            priority
            className="relative z-10 object-contain"
          />
        </div>

        <h1 className="mt-6 text-xl font-bold text-white">
          Loading workouts....
          <span className="ml-1 animate-pulse text-[#C2F800]">...</span>
        </h1>
      </div>
    </div>
  );
};

export default Loading;
