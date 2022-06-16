import { axiosClient } from "../../Api/AxiosClient";
import { AllProject } from "../../Type/Project";
import { ListRes } from "../../Type/UserType";
import { LINK_GETALLPROJECT } from "../../util";

export const ProjectAPI = {
    getAllproject(): Promise<ListRes<AllProject[]>> {
        return axiosClient.get(LINK_GETALLPROJECT)
    },
}