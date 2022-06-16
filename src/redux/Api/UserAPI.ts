import { LINK_SIGNUP } from './../../util/index';
import { UserLogin, ResultLogin, UserSignup } from '../../Type/UserType';
import { LINK_LOGIN } from '../../util/index';
import { axiosClient } from '../../Api/AxiosClient';
import { ListRes } from '../../Type/UserType';
const UserAPI = {
    Login(User: UserLogin): Promise<ListRes<ResultLogin>> {
        return axiosClient.post(LINK_LOGIN, User)
    },
    Signup(User: UserSignup): Promise<ListRes<ResultLogin>> {
        return axiosClient.post(LINK_SIGNUP, User)
    }
}
export default UserAPI