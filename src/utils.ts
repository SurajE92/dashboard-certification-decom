import { useCallback, useState } from "react";

export type PromiseStatus =
  | "NOT_STARTED"
  | "PENDING"
  | "REJECTED"
  | "FULFILLED";

export const usePromiseState = <P, T>(
  fn: (p: P) => Promise<T>
): [boolean, (p: P) => Promise<T>, PromiseStatus] => {
  const [state, setState] = useState<PromiseStatus>("NOT_STARTED");
  const call = useCallback(
    async (p: P) => {
      try {
        setState("PENDING");
        const res = await fn(p);
        setState("FULFILLED");
        return res;
      } catch (e) {
        setState("REJECTED");
        throw e;
      }
    },
    [fn]
  );
  return [state === "PENDING", call, state];
};
