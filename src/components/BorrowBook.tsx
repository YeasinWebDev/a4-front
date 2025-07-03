import { useState } from "react";
import {
  bookApiSlice,
  useSingleBookQuery,
} from "../redux/features/book/bookApiSlice";
import toast from "react-hot-toast";
import { useCreateBorrowMutation } from "../redux/features/borrow/borrowApiSlice";
import { useAppDispatch } from "../redux/hooks";

function BorrowBook({ bookId, setIsBorrowDailogOpen }: any) {
  const dispatch = useAppDispatch();
  const { data } = useSingleBookQuery(bookId);
  const [createBorrow] = useCreateBorrowMutation();
  const [formData, setFormData] = useState({
    quantity: "",
    dueDate: 0,
  });

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Number(formData.quantity) > data?.data.copies) {
      return toast.error("Not enough copies available");
    } else {
      setIsBorrowDailogOpen(false);
      let data = { ...formData, bookId };
      let res = await createBorrow(data).unwrap();
      if (res.success === true) {
        toast.success("Book Borrowed Successfully");
        dispatch(bookApiSlice.util.invalidateTags(["Books"]));
      } else {
        toast.error(res.message);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Borrow Book
      </h2>
      <h3 className="text-xl text-green-600 font-semibold text-center mb-8">
        {data?.data.title}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="quantity" className="mb-2 font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            min="1"
            placeholder="Enter quantity"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="dueDate" className="mb-2 font-medium text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
            min={getTomorrowDate()} // only allow from tomorrow
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BorrowBook;
