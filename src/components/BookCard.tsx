import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { useDeleteBookMutation } from "../redux/features/book/bookApiSlice";
import toast from "react-hot-toast";
import { useState } from "react";
import Dialog from "./Dialog";
import EditBook from "./EditBook";
import BorrowBook from "./BorrowBook";
export function BookCard({ book, refetch }: any) {
  const { title, author, genre, isbn, copies, available } = book;

  const [onDeleteBook] = useDeleteBookMutation();
  const [isEditDailogOpen, setIsEditDailogOpen] = useState(false);
  const [isBorrowDailogOpen, setIsBorrowDailogOpen] = useState(false);

  const onDelete = async () => {
    let res = await onDeleteBook(book._id);
    if (res.data.success === true) {
      toast.success("Book Deleted Successfully");
      refetch();
    }
  };
  const onEdit = () => {
    setIsEditDailogOpen(true);
  };
  const onBorrow = () => {
    setIsBorrowDailogOpen(true);
  };

  return (
    <div className="bg-white shadow-xl  rounded-xl p-4 space-y-2 w-[22rem] lg:w-[20rem] xl:w-[25rem]">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-bold">{title}</h2>
        <span
          className={`text-sm px-2 py-1 rounded-full ${
            available
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {available ? "Available" : "Unavailable"}
        </span>
      </div>

      <div className="text-sm text-gray-600">
        <p>
          <span className="font-semibold">Author:</span> {author}
        </p>
        <p>
          <span className="font-semibold">Genre:</span> {genre}
        </p>
        <p>
          <span className="font-semibold">ISBN:</span> {isbn}
        </p>
        <p>
          <span className="font-semibold">Copies:</span> {copies}
        </p>
      </div>

      <div className="flex gap-3 pt-3">
        <button
          onClick={() => onEdit()}
          className="cursor-pointer flex items-center gap-1 px-2 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <MdOutlineEdit size={16} />
        </button>
        <button
          onClick={() => onDelete()}
          className="cursor-pointer flex items-center gap-1 px-2 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
        >
          <MdDelete size={16} />
        </button>
        <button
          onClick={() => onBorrow()}
          disabled={!available}
          className={`cursor-pointer flex items-center gap-1 px-2 py-1 text-sm rounded ${
            available
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <FaBookOpen size={16} />
        </button>
      </div>

      <Dialog
        isOpen={isEditDailogOpen}
        onClose={() => setIsEditDailogOpen(false)}
      >
        <EditBook bookId={book._id} setIsEditDailogOpen={setIsEditDailogOpen} />
      </Dialog>
      <Dialog
        isOpen={isBorrowDailogOpen}
        onClose={() => setIsBorrowDailogOpen(false)}
      >
        <BorrowBook bookId={book._id} setIsBorrowDailogOpen={setIsBorrowDailogOpen} />
      </Dialog>
    </div>
  );
}
