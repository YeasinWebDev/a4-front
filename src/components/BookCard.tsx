import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
export function BookCard({ book, onEdit, onDelete, onBorrow }:any) {
  const {
    title,
    author,
    genre,
    isbn,
    copies,
    available,
  } = book;

  return (
    <div className="bg-white shadow-md rounded-xl p-4 space-y-2 border">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-bold">{title}</h2>
        <span className={`text-sm px-2 py-1 rounded-full ${available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {available ? 'Available' : 'Unavailable'}
        </span>
      </div>

      <div className="text-sm text-gray-600">
        <p><span className="font-semibold">Author:</span> {author}</p>
        <p><span className="font-semibold">Genre:</span> {genre}</p>
        <p><span className="font-semibold">ISBN:</span> {isbn}</p>
        <p><span className="font-semibold">Copies:</span> {copies}</p>
      </div>

      <div className="flex gap-3 pt-3">
        <button
          onClick={() => onEdit(book)}
          className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <MdOutlineEdit size={16} />
          Edit
        </button>
        <button
          onClick={() => onDelete(book)}
          className="flex items-center gap-1 px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
        >
          <MdDelete size={16} />
          Delete
        </button>
        <button
          onClick={() => onBorrow(book)}
          disabled={!available}
          className={`flex items-center gap-1 px-3 py-1 text-sm rounded ${
            available
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <FaBookOpen size={16} />
          Borrow
        </button>
      </div>
    </div>
  );
}
