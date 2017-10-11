import {ILocalite} from './localite.model'
export interface IUser{
      id:number,
      firstName:string,
      lastName:string,
      localite:ILocalite,
      poste:string,
      type:string
}
