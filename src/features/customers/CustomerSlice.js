import {createSlice} from '@reduxjs/toolkit'

export const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        customers: [
            {
                "name": "Customer1",
                "email": "customer1@gmail.com",
                "business": "Legal",
                "address": "Customer1 address",
                "city": "Podgorica",
                "country": "Montenegro",
                "region": "Europe",
                "zipCode": "81000",
                "phone": "+38269559834",
                "vatId": "ATU99999999"
            },
            {
                "name": "Customer2",
                "email": "customer2@gmail.com",
                "business": "Legal",
                "address": "Customer2 address",
                "city": "Paris",
                "country": "France",
                "region": "Europe",
                "zipCode": "81000",
                "phone": "+38269559834",
                "vatId": "ATU99999999"
            }
        ]
    },
    reducers: {
        add(state, action) {
            state.customers.push(action.payload)
        }
    }
})

export const {add} = customerSlice.actions

export const selectCustomers = state => state.customer.customers

export default customerSlice.reducer



