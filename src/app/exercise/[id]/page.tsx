import { IlibraryType } from '@/types/libraryType';;
import DetailsPage from '../DetailsPage';
interface IDetailsPageProps{
    params: Promise<{
        id: string
    }>
}

const getLibrary = async () => {
  const res = await fetch("http://localhost:3000/fitLogData.json");

  const data = await res.json();

  return data;
};

const ExerciseDetailsPage = async ({params}: IDetailsPageProps) => {
    const {id} = await params
    const exerciseData = await getLibrary()
    const exercise = exerciseData.find((exercise: IlibraryType) => String(exercise.id) === id )
    return (
        <div>
           <DetailsPage exercise= {exercise}/>
        </div>
    );
};

export default ExerciseDetailsPage;