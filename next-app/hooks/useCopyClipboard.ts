"use client";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";

const useCopyClipboard = () => {
  return (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`🔥 Code ${text} copié !`);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f3ff', '#bc13fe', '#ff00ff'],
    });
  };
};

export default useCopyClipboard;