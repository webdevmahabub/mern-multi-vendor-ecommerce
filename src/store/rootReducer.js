import authReducer from "../store/Reducers/authReducer";
import categoryReducer from "./Reducers/categoryReducer";

const rootReducer = {
    auth: authReducer,
    category: categoryReducer
}
export default rootReducer;