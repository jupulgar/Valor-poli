import {Deserializable} from "./Deserializable";

export class Usuarios{
    id: number;
    name: string;
    username: string;
    email: String;
    address: string;
    phone: string;
    companyname: string;
    website: string;
}

export class Misesion{
    id: number;
    name: string;
    username: string;
    email: String;
    address: string;
    phone: string;
    companyname: string;
    website: string;

}
export interface Misesionn{
    id: number;
    name: string;
    username: string;
    email: String;
    address: string;
    phone: string;
    companyname: string;
}
export interface Persona{
    id: number;
    nombre: string;
    username: string;
    email: string;
    ocupacion: string;
    nationalID: string;
    descripcion: string;
    password: string;

}
export class Personas{
    id: number;
    nombre: string;
    username: string;
    email: string;
    ocupacion: string;
    nationalID: string;
    descripcion: string;
    password: string;

}

export interface Todos{
    id: number;
    title: String;
}

export class logUsu{
    username: string;
    pswd: string;
}