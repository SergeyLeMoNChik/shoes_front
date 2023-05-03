import { api } from "./api"

export const purchaseApi = {
    path: 'purchase/',
    async getAll<T>():Promise<T>{
        return await api.get(this.path)
    },
    async getById(id:string){
        return await api.get(this.path + id)
    },
}