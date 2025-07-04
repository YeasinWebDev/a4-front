import { useBookBorrowsQuery } from "../redux/features/borrow/borrowApiSlice";
import Loader from "./Loader";

function BorrowSummary() {
  const { data: bookBorrow, isLoading } = useBookBorrowsQuery({},{refetchOnMountOrArgChange: true});

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center flex-col p-4">
      <h3 className="text-2xl font-bold mb-4 mt-10 text-green-700">
        Borrow Summary
      </h3>

      {bookBorrow?.data.length > 0 ? (
        <div className="w-full overflow-x-auto">
          <table className="min-w-[600px] w-full border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left whitespace-nowrap">
                  Book Title
                </th>
                <th className="border px-4 py-2 text-left whitespace-nowrap">
                  ISBN
                </th>
                <th className="border px-4 py-2 text-left whitespace-nowrap">
                  Total Quantity Borrowed
                </th>
              </tr>
            </thead>
            <tbody>
              {bookBorrow?.data?.map((book: any, index: number) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{book.title}</td>
                  <td className="border px-4 py-2">{book.isbn}</td>
                  <td className="border px-4 py-2">{book.totalQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="text-2xl font-bold mb-4 mt-10 text-green-700">
          No Book Borrowed
        </h3>
      )}
    </div>
  );
}

export default BorrowSummary;
