"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchEpisodes } from "@/app/actions";
import Loading from "./loading";
import Link from "next/link";
let page = 2;
let stopLoading = false;
const LoadMore = () => {
  const { ref, inView } = useInView();

  const [episodes, setEpisode] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      // Add a delay of 500 milliseconds
      const delay = 500;

      const timeoutId = setTimeout(() => {
        if (!stopLoading) {
          fetchEpisodes(page).then((res) => {
            stopLoading = res?.length ? false : true;
            setEpisode([...episodes, ...res]);
            page++;
          }).catch(()=>{
            setIsLoading(false)
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
      {episodes.map(({ id, name }) => (
        <li className="btn btn-outline m-2 text-xl h-auto" key={id}>
          <Link href={`/episode/${id}`}>{name}</Link>
        </li>
      ))}
      <div ref={ref}>
        {inView && isLoading && !stopLoading && (
          <div className="flex place-content-center">
            <Loading />
          </div>
        )}
      </div>
    </>
  );
};

export default LoadMore;
