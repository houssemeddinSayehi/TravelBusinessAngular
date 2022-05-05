import { commentaire } from "./commentaire"
import { react } from "./React"
import { Tag } from "./tag"
import { user } from "./user"

export class post
{
        description : string
        archiver : boolean
        dateDePublication: Date
        commentaire: commentaire
        react: react
        tag: Tag
        user: user
        id_Post: number
        img: string
        sujet: string
        nbrlike:number
        fileName:string
}
