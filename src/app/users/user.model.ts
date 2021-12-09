export interface User {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
}


export interface ResponseUsers {
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: User[];
        
}

// Modelo para Criação
export interface RequestCreate {
        name: string;
        job: string;
    }

    export interface ResponseCreate {
        name: string;
        job: string;
        id: string;
        createdAt: Date;
    }


    // modelo para o get user

    export interface ResponseUser{
        data: User;
    }

    // modelos para update

    export interface RequestUpadate{
       name: string;
       job: string;

    }
    export interface ResponseUpadate{
        name: string;
        job: string;
        updateAt: Date;
 
     }