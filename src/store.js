import { configureStore} from "@reduxjs/toolkit";
import customerReducer from "./features/customers/custumerSlice"

export default configureStore({
    reducer: {
        customer: customerReducer
    },
})
