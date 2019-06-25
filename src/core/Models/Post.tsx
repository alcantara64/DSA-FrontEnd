import  Regions from "./Regions";
import  Category  from "./Category";
import  Block  from "./Block";
import Value from "./Value";

export default interface Post {
    id?:         string;
    category?:        Category;
    published?:       Date;
    title?:           string;
    postImageUrl?: string;
    clickedOnCount: number;
    author: Value;
    postDetail: Value;
    introText: Value;
    archiveId: string;

}