import React, { useState } from "react";
import { BookCard } from "./BookCard";
import { useBooksQuery } from "../redux/features/book/bookApiSlice";
import Loader from "./Loader";
import type { IBook } from "../types";

function AllBooks() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useBooksQuery({ page });

  console.log(data);

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  if (isError) return <p>Something went wrong</p>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {data?.data?.books?.map((book:IBook, index:number) => (
          <BookCard key={index} book={book} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6 items-center">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={data?.data?.totalPage === page}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllBooks;
