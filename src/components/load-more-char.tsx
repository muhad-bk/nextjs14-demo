"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Loading from "./loading";
import CharsList from "./chars-lis";
import { fetchHomeCharacters } from "@/app/actions";
let page = 2;
let stopLoading = false;
const LoadMoreChars = () => {
  const { ref, inView } = useInView();
  const [episodes, setEpisode] = useState<
    [{ name: string; id: number; image: string }]
  >([] as any);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      // Add a delay of 500 milliseconds
      const delay = 500;
      const timeoutId = setTimeout(() => {
        if (!stopLoading) {
          fetchHomeCharacters(page)
            .then((res) => {
              stopLoading = res?.length ? false : true;
              setEpisode([...episodes, ...res] as any);
              page++;
            })
            .catch(() => {
              setIsLoading(false);
            });
          setIsLoading(false);
        }
      }, delay);

      // Clear the timeout if the component is unmounted or inView becomes false
      return () => clearTimeout(timeoutId);
    }
  }, [inView, episodes, isLoading]);

  return (
    <>
      <CharsList chars={episodes} />
      <div ref={ref}>
        {inView && isLoading && !stopLoading && (
          <div className="flex place-content-center w-full">
            <Loading />
          </div>
        )}
      </div>
    </>
  );
};

export default LoadMoreChars;
