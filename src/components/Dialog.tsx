import { RxCross2 } from "react-icons/rx";

const Dialog = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white text-black rounded-lg shadow-lg p-6 max-w-md w-full">
        <div className="w-full flex justify-end" onClick={onClose}>
          <div className="p-2 rounded-full shadow-xl cursor-pointer"><RxCross2 /></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
