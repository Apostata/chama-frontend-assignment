export interface Enviromment{
    id:number, 
    description:string, 
    initials:string
}

export interface GitUser{
    login: string,
    id: number,
    avatar_url: string
    html_url: string,
    name: string,
    company: string,
    location: string,
    email: string,
    bio: string,
}

export interface GitRepo{
    id: number,
    node_id: string,
    name: string,
    full_name: string,
    html_url: string,
    description: string | null
}

export interface MenuItem{
    name:string,
    icon:React.FC,
    url:string
}

export interface History{
    timestamp:number,
    term:string
}