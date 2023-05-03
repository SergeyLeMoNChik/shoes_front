import { api } from "./api"

export const saleApi = {
    path: 'sale/',
    async getAll<T>():Promise<T>{
        return await api.get(this.path)
    },
    async getById(id:string){
        return await api.get(this.path + id)
    },
}