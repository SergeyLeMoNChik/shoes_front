import { api } from "./api"

export const supplierApi = {
    path: 'supplier/',
    async getAll<T>():Promise<T>{
        return await api.get(this.path)
    },
    async getById(id:string){
        return await api.get(this.path + id)
    },
}