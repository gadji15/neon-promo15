"use client";
import toast from "react-hot-toast";

const useCopyClipboard = () => {
  return (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`🔥 Code ${text} copié !`);
  };
};

export default useCopyClipboard;