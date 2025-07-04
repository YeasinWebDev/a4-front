import { useState } from "react";
import { BookCard } from "./BookCard";
import { useBooksQuery } from "../redux/features/book/bookApiSlice";
import Loader from "./Loader";
import type { IBook } from "../types";

function AllBooks() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError,refetch } = useBooksQuery({ page });


  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  if (isError) return <p>Something went wrong</p>;

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
        {data?.data?.books?.map((book:IBook, index:number) => (
          <BookCard key={index} book={book} refetch={refetch} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6 items-center mb-10 lg:mb-0 cursor-pointer">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={data?.data?.totalPage === page}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllBooks;
