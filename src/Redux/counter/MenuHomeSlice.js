import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from 'react'
import axios from "axios";
import { LayThongTinLichChieuHeThongRap } from "../../services/QuanLyPhimServices";

const initialState = {
    MenuList: [],
}

export const fetchMenu = createAsyncThunk(
    "MenuHomeSlice/fetchData",
    async () => {
        try {
            const response = await LayThongTinLichChieuHeThongRap()

            return response.data.content
        } catch (error) {
            console.log('error', error);
        }
    })



const MenuHomeSlice = createSlice({
    name: 'MenuHomeSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMenu.fulfilled, (state, action) => {
            state.MenuList = action.payload
        })
        builder.addCase(fetchMenu.pending, (state) => {
            state.status = "loading"
        })
    }
})

export default MenuHomeSlice.reducer