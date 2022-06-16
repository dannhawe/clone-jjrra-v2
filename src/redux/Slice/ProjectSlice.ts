import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AllProject } from '../../Type/Project';
import { ProjectAPI } from '../Api/ProjectAPI';
interface Project {
    AllProject: AllProject[]
}
// state

const initialState: Project = {
    AllProject:
        [{
            members: [],
            categoryId: 0,
            id: 0,
            projectName: '',
            description: '',
            creator: {
                id: 0,
                name: '',
            },
            categoryName: '',
            alias: '',
            deleted: false,
        }]
};
// get all project
export const GetAllProject = createAsyncThunk(
    'AllProject/getAllProject',
    async () => {
        const res = await ProjectAPI.getAllproject();
        return res.content
    })

// redux store 
export const ProjectAll = createSlice({
    name: 'User',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // GetAllProject
            .addCase(GetAllProject.fulfilled, (state, action) => {
                state.AllProject = action.payload
            })
            .addCase(GetAllProject.rejected, (state, action) => {
                console.log(action.error)
            })
    },
});

export default ProjectAll.reducer;