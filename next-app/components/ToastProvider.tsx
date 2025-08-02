"use client";
import { Toaster } from "react-hot-toast";
import React from "react";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "font-semibold text-base",
        }}
      />
      {children}
    </>
  );
}