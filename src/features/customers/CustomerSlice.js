import {createSlice} from '@reduxjs/toolkit'

export const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        customers: [
            {
                "name": "Darko",
                "email": "darko.vucetic7@gmail.com",
                "business": "Legal",
                "address": "Bratstva Jedinstva",
                "city": "Podgorica",
                "country": "Montenegro",
                "zipCode": "81000",
                "phone": "+38269559834",
                "vatId": "ATU99999999"
            },
            {
                "name": "Jovan",
                "email": "darko.vucetic7@gmail.com",
                "business": "Legal",
                "address": "Bratstva Jedinstva",
                "city": "Podgorica",
                "country": "Montenegro",
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



