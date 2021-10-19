import {useEffect, useState} from "react";
import axios from "axios";

export interface Post {
    id: number
    title: string
}

export const Post = ():JSX.Element => {

    const [post,setPost] = useState<Post[]>([])
    useEffect(() => {
        axios.get<Post[]>('http://localhost:3001/posts')
            .then((res) => (
                setPost(res.data)
            ))
    },[])

    return (
        <div>
            {
                post.map(p => <ul><li>{p.title}</li></ul>)
            }
        </div>
    )
 }