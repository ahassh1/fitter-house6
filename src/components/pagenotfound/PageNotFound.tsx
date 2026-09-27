import Image from 'next/image';
import Link from 'next/link';
import pageNotFoundImg from '@/assets/pagenotfound.jpg'

const PageNotFound = () => {
    return (
        <div>
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
        </div>
    );
};

export default PageNotFound;