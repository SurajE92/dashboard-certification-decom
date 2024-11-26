import { create } from "zustand";

export type AppToast = {
  type: "ERROR" | "SUCCESS" | "INFO";
  message: string;
};

export type AppState = {
  toast?: AppToast;
};
export const useAppState = create<AppState>(() => ({}));

export const showToast = (toast: AppToast) => {
  useAppState.setState({ toast });
};
export const removeToast = () => {
  useAppState.setState({ toast: undefined });
};
