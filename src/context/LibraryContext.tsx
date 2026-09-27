"use client";

import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import { IlibraryType } from "@/types/libraryType";

interface ExerciseContextType {
  addToday: IlibraryType[];
  setAddToday: Dispatch<SetStateAction<IlibraryType[]>>;
  saveLater: IlibraryType[];
  setSaveLater: Dispatch<SetStateAction<IlibraryType[]>>;
}

export const ExerciseContext = createContext<ExerciseContextType>(
  {} as ExerciseContextType
);

const LibraryContext = ({ children }: { children: ReactNode }) => {
  const [addToday, setAddToday] = useState<IlibraryType[]>([]);

  const [saveLater, setSaveLater] = useState<IlibraryType[]>([]);

  const sharedData = {
    addToday,
    setAddToday,
    saveLater,
    setSaveLater,
  };

  return (
    <ExerciseContext.Provider value={sharedData}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default LibraryContext;