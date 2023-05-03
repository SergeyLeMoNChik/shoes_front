import { api } from "./api"



export const directorApi = {
    path: 'director/',
    async getAll(){
        return await api.get(this.path)
    },
    async getById(id:string){
        return await api.get(this.path + id)
    },
}