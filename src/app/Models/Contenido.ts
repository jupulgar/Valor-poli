
export class Categoriaa{
    id: number;
    name: string;
    username: string;
    email: String;
    
}
export class Categoria{
    id: number;
    name: string;
    username: string;
    email: String;
    

}

export class Quiz {
    [x: string]: any;
    idQuiz?: number;
    descripcion?: String;
    estado?: number;
    modulo_id_modulo?: number;
    titulo?: String;
}
export class Pregunta{
    
    idPregunta?: number;

    idQuiz?: number;
    tipoPregunta?: String;
    titulo?: string;
    
}


export interface Todos{
    id: number;
    title: String;
}