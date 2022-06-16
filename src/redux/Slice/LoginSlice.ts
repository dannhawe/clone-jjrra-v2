import { TOKEN } from './../../util/index';
import { ResultLogin, UserSignup } from '../../Type/UserType';
import { USER_LOGIN } from '../../util/index';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import UserAPI from '../Api/UserAPI';
import { UserLogin } from '../../Type/UserType';
interface LoginReducer {
    user: ResultLogin,
    isSignup: boolean
}
// state
let userLogin: ResultLogin ={
    id: 0,
    email: '',
    avatar: '',
    phoneNumber: '',
    name: '',
}
if ( localStorage.getItem(USER_LOGIN)) {
    userLogin = JSON.parse(localStorage.getItem(USER_LOGIN)!)
}
const initialState: LoginReducer = {
    user: userLogin,
    isSignup: false
};
// call api   login
export const LoginSlice = createAsyncThunk(
    'UserSlice/LoginSlice',
    async (values: UserLogin) => {
        const res = await UserAPI.Login(values);
        return res.content
    })
// call api   sign up
export const SignupSlice = createAsyncThunk(
    'UserSlice/SignupSlice',
    async (values: UserSignup) => {
        const res = await UserAPI.Signup(values)
        return res.content
    })
// redux store 
export const LoginReducer = createSlice({
    name: 'User',
    initialState,
    reducers: {
        LoginReducer: (state, Action) => {
            state.user = Action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            // login
            .addCase(LoginSlice.fulfilled, (state, action) => {
                localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload))
                localStorage.setItem(TOKEN,action.payload.accessToken!)
                state.user = action.payload
            })
            .addCase(LoginSlice.rejected, (state, action) => {
                alert('vui lòng kiểm tra lại......')
            })
            // sign up
            .addCase(SignupSlice.fulfilled, (state, action) => {
                alert('đăng kí thành công ')
            })
            .addCase(SignupSlice.rejected, (state, action) => {
                alert('vui lòng thử lại ......')
            })
    },
});

export default LoginReducer.reducer;