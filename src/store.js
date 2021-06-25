import { configureStore} from "@reduxjs/toolkit";
import customerReducer from "./features/customers/CustumerSlice"
import serviceProviderReducer from "./features/serviceProviders/serviceProviderSlice"
import serviceReducer from "./features/services/serviceSlice";

export default configureStore({
    reducer: {
        customer: customerReducer,
        serviceProvider: serviceProviderReducer,
        service: serviceReducer
    },
})
