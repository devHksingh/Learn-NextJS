
export interface Book {
    _id:string;
    title:string;
    description:string;
    coverImage:string;
    file:string;
    author:Author
    
}

export interface Author {
    name:string;

}