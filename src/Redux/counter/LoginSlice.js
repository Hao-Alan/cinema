import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { QuanLyNguoiDungDangNhap } from '../../services/QuanLyNguoiDungServices'
import { TOKEN, USER_LOGIN } from '../../Utils/settings/config'
let user = {}



if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
// console.log("user", user);

const initialState = {
    userLogin: user
}


export const fetchLogin = createAsyncThunk(
    'movie/fetchLogin', async ({ values, navigate }) => { //thong tin dang nhap
        console.log('im heeeeer', navigate, values);
        try {
            const response = await QuanLyNguoiDungDangNhap(values)
            if (response.data.statusCode === 200) {

                console.log('nguoi dung thong tin', response.data.content);

                localStorage.setItem(USER_LOGIN, JSON.stringify(response?.data?.content))

                localStorage.setItem(TOKEN, JSON.stringify(response?.data?.content?.accessToken))

                navigate(-1)
                return response?.data?.content

            }


        } catch (error) {
            console.log('error', error);
        }
    })


export const LoginSlice = createSlice({
    name: 'LoginSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder

            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userLogin = action.payload

            })

    }

}
)

export const { setMovieImg } = LoginSlice.actions

export default LoginSlice.reducer