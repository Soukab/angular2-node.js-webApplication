import {IFacture} from './facture.model'
export interface IClient {
  numDossier:number,
  nom:string,
  prenom:string,
  email:string,
  adresse:string,
  facture:IFacture[]
}
