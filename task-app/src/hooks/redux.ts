import { useSelector, type TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "../store/index";
import { useDispatch } from "react-redux";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const useTypedDispatch = () => useDispatch<AppDispatch>();

const logger = useTypedSelector((state) => state.logger);
