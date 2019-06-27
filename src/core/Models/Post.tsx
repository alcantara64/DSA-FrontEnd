import  Category  from "./Category";
import Value from "./Value";

export default interface Post {
    id?:         string;
    category?:        Category;
    published?:       Date;
    title?:           string;
    postImageUrl?: string;
    clickedOnCount: Value;
    author: string;
    postDetail: string;
    introText: string;
    archiveId: string;
    authorImageUrl: string;
    authorDepartment: string;
    timeRead: string;
    topPost: string;
    bottomPost:string
    blogImageUrl: string
}