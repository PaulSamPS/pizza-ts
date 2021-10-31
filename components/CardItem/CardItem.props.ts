import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CardItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    name: string
    size: number
    image: string
    price: number
    type: string
}