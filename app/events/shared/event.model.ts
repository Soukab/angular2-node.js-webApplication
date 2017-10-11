export interface IEvent{
  id:number,
  name:string,
  date:Date,
  time:string,
  price:number,
  imageUrl:string,
  location?:{
     address:string
     city:string
     country:string
  },
  onlineurl?:string,
  sessions:ISession[]
}
export interface ISession{
  id:number,
  name:string,
  date:Date,
  abstract:string
}
