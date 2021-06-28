import {createSlice} from '@reduxjs/toolkit'

export const serviceProviderSlice = createSlice({
    name: 'serviceProvider',
    initialState: {
        serviceProviders: [
            {
                "name": "ServiceProvider1",
                "email": "serviceProvider1@gmail.com",
                "address": "ServiceProvider1 address",
                "city": "Podgorica",
                "country": "Montenegro",
                "region": "Europe",
                "zipCode": "90011",
                "phone": "+38269559834",
                "vatId": "ATU99999999"
            },
            {
                "name": "ServiceProvider2",
                "email": "serviceProvider2.com",
                "address": "ServiceProvider2 address",
                "city": "Paris",
                "country": "United States of America",
                "region": "Europe",
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
