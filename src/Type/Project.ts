//get all project 
export interface Member {
    userId: number,
    name: string,
    avatar: string,
}
export interface Creator {
    id: number,
    name: string,
}
export interface AllProject {
    key?: number,
    members: Member[],
    creator: Creator,
    id: number,
    projectName: string,
    description: string,
    categoryId: number,
    categoryName: string,
    alias: string,
    deleted: boolean,
}