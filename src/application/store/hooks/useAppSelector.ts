import { TypedUseSelectorHook, useSelector } from "react-redux";
import { store } from "@/src/application/store";

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
