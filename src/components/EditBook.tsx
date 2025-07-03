import React, { useEffect, useState } from "react";
import {
  useSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/book/bookApiSlice";
import toast from "react-hot-toast";

function EditBook({
  bookId,
  setIsEditDailogOpen,
}: {
  bookId: string;
  setIsEditDailogOpen: any;
}) {
  const { data } = useSingleBookQuery(bookId);
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: "",
    available: true,
  });

  useEffect(() => {
    if (data) {
      setFormData(data?.data);
    }
  }, [data]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let ans = await updateBook(formData).unwrap();
    if (ans.success === true) {
      toast.success("Book Updated Successfully");
      setIsEditDailogOpen(false);
      setFormData(
        {
          title: "",
          author: "",
          genre: "",
          isbn: "",
          description: "",
          copies: "",
          available: true,
        }
      )
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 flex items-center justify-center text-green-700">
        Edit Book
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 ">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="w-full p-2 border rounded border-green-700"
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          required
          className="w-full p-2 border rounded border-green-700"
        />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          placeholder="Genre"
          required
          className="w-full p-2 border rounded border-green-700"
        />
        <input
          type="text"
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
          placeholder="ISBN"
          required
          className="w-full p-2 border rounded border-green-700"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="w-full p-2 border rounded border-green-700 resize-none h-20"
        ></textarea>
        <input
          type="number"
          name="copies"
          value={formData.copies}
          onChange={handleChange}
          placeholder="Copies"
          required
          className="w-full p-2 border rounded border-green-700"
        />
        <div className="w-full">
          <button
            disabled={isUpdating}
            type="submit"
            className="bg-green-700 cursor-pointer hover:bg-green-800 text-white px-4 py-2 rounded w-28 flex items-center justify-center mx-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditBook;
