import {createSlice} from '@reduxjs/toolkit'

export const serviceProviderSlice = createSlice({
    name: 'serviceProvider',
    initialState: {
        serviceProviders: [
            {
                "name": "Google",
                "email": "google@gmail.com",
                "address": "1600 Amphitheatre Parkway Mountain View, CA 94043",
                "city": "Paris",
                "country": "Montenegro",
                "region": "Europe",
                "zipCode": "90011",
                "phone": "+38269559834",
                "vatId": "ATU99999999"
            },
            {
                "name": "Amazon",
                "email": "google@gmail.com",
                "address": "1600 Amphitheatre Parkway Mountain View, CA 94043",
                "city": "Paris",
                "region": "Europe",
                "country": "United States of America",
                "zipCode": "90011",
                "phone": "+38269559834",
                "vatId": "ATU99999999"
            }
        ]
    },
    reducers: {
        add(state, action) {
            state.serviceProviders.push(action.payload)
        }
    }
})

export const {add} = serviceProviderSlice.actions

export const selectServiceProviders = state => state.serviceProvider.serviceProviders

export default serviceProviderSlice.reducer
