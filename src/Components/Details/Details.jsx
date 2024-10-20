import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Details() {
  const location = useLocation();
  const [wishlistTrack, setWishlistTrack] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending:bookPending, isError:bookError, data:bookData } = useQuery({
    queryKey: ["detailsBook"],
    queryFn: async () => {
      const step1 = await fetch(`https://gutendex.com/books/${location.state}`);
      const step2 = await step1.json();

      return step2;
    },
  });

  return (
    <>
      <section className="w-[1200px] mx-auto my-[50px]">
        {bookPending ? (
          <div className="w-full h-screen flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="w-full grid grid-rows-2 gap-y-5">
            <div className="w-full flex justify-center items-center">
              <div className="h-[250px] w-[250px]">
                <img
                  src={bookData.formats["image/jpeg"]}
                  alt="bookCoverImage"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="w-[50%] mx-auto text-center">
                <h2 className="capitalize text-2xl font-anton text-black font-medium leading-normal">
                  {bookData.title}
                </h2>
                <h3 className="text-base italic text-black/50 capitalize font-anton font-normal leading-normal my-2">
                  {bookData.authors[0]?.name}
                </h3>
                <h4 className="text-sm font-anton text-black/90 leading-normal font-light">
                  ({bookData.authors[0]?.birth_year} - {bookData.authors[0]?.death_year}
                  )
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-x-24 w-[80%] mx-auto mt-4 border border-t-0 border-r-0 border-l-0 border-gray-400/30 rounded-xl py-4">
                <div>
                  <h3 className="text-base font-anton text-black/80 capitalize">
                    feature of the books:
                  </h3>
                  <ul className="list-disc ml-[50px] text-sm  text-slate-800 font-rajdhani font-medium leading-normal capitalize mt-4">
                    {bookData.bookshelves.map((items, index) => {
                      if (items.slice(0, 10) == "Browsing: ") {
                        return (
                          <li key={index} className="mb-1">
                            {items.slice(10)}
                          </li>
                        );
                      } else {
                        return <li key={index} className="mb-1">{items}</li>;
                      }
                    })}
                  </ul>
                </div>

                <div className="ml-10">
                  <h3 className="text-base font-anton text-black/80 capitalize">
                    topics relatable of this book:
                  </h3>
                  <ul className="list-disc ml-[50px] text-sm  text-slate-800 font-rajdhani font-medium leading-normal capitalize mt-4">
                    {bookData.subjects.map((items, index) => {
                      return (
                        <li key={index} className="mb-1">
                          {items}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="w-[80%] mx-auto mt-4">
                <h3 className="text-base font-anton text-black/80 capitalize">
                  downloaded:
                  <span className="text-cyan-700 px-1">
                    {bookData?.download_count}
                  </span>
                  times
                </h3>
              </div>

              <div className="w-[80%] mx-auto flex flex-row">
                <div>
                  <button className="py-2 px-4 rounded-lg border border-black text-base capitalize font-rajdhani transition-all duration-100 ease-in hover:shadow-inner hover:shadow-slate-900 hover:bg-slate-400 hover:text-white active:scale-[0.80] mr-2" onClick={()=>{navigate(-1)}}>
                    Go back
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
