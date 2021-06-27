import {createSlice} from '@reduxjs/toolkit'

export const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        services: [
            {
                "name": "peglanje",
                "date": "15.04.2021",
                "description" : "Description",
                "vatRate": 10,
                "price": 1000,
                "totalPrice": 1100
            },
            {
                "name": "kuvanje",
                "date": "15.04.2021",
                "description" : "Description",
                "vatRate": 10,
                "price": 1000,
                "totalPrice": 1100
            }
        ]
    },
    reducers: {
        add(state, action) {
            state.services.push(action.payload)
        }
    }
})

export const {add} = serviceSlice.actions

export const selectServices = state => state.service.services

export default serviceSlice.reducer



