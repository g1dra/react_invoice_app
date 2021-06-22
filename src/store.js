import { configureStore} from "@reduxjs/toolkit";
import customerReducer from "./features/customers/custumerSlice"
import serviceProviderReducer from "./features/serviceProviders/serviceProviderSlice"

export default configureStore({
    reducer: {
        customer: customerReducer,
        serviceProvider: serviceProviderReducer
    },
})
