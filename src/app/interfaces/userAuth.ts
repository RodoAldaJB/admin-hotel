export interface userAuth{
    email: string,
    password: string
}

export interface user{
    id: string,
    avatar?: string,
    email: string,
    status: number,
    role: Role,
    worker: Worker 
}

interface Role{
    id_role: string,
    name: string
}

interface Worker{
    id_worker: string,
    name: string,
    lastname: string
}