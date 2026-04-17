import React from "react";
import { IoClose } from "react-icons/io5";
import Button from "./Button";

export default function TaskModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex p-2 items-center justify-center z-50">
      <div className="bg-[var(--primary)] p-6 rounded-lg w-[400px] relative flex flex-col">

        {/* HEADER (close button aligned right) */}
        <div className="flex justify-end">
          <Button
            onClick={onClose}
            className="bg-transparent shadow-none p-1"
          >
            <IoClose className="text-[var(--accent)] text-xl" />
          </Button>
        </div>

        {/* CONTENT */}
        <div className="mt-4 ">
          {children}
        </div>

      </div>
    </div>
  );
}