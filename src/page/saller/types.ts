export interface ISaller {
    idsaller: number
    fullname: string
    pasportdata: string
    data_of_employment: string
    director_iddirector: number
  }

  export interface ISallerform extends Omit<ISaller, "idsaller">{}