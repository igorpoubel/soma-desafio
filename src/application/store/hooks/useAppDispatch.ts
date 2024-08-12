import { useDispatch } from "react-redux";

import { store } from "@/src/application/store";

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
