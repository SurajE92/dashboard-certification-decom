"use client";
import { AppToast, removeToast, useAppState } from "@/appstate";
import { Toast } from "flowbite-react";
import { useEffect } from "react";
import { HiFire } from "react-icons/hi";

const GlobalToast = () => {
  const toast = useAppState((state) => state.toast);
  if (!toast) {
    return null;
  }
  return <AutohideToast toast={toast} />;
};

export default GlobalToast;

const AutohideToast = ({ toast }: { toast: AppToast }) => {
  useEffect(() => {
    setTimeout(() => {
      removeToast();
    }, 3000);
  }, []);
  return (
    <Toast className="fixed top-1 right-2">
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
        <HiFire className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">{toast?.message}</div>
      <Toast.Toggle onDismiss={removeToast} />
    </Toast>
  );
};
