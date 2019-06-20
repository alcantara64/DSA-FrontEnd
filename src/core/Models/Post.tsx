import  Regions from "./Regions";
import  Category  from "./Category";
import  Block  from "./Block";

export default interface Post {
    regions?:         Regions;
    blogId?:          string;
    category?:        Category;
    redirectUrl?:     null;
    redirectType?:    number;
    tags?:            any[];
    blocks?:          Block[];
    slug?:            string;
    permalink?:       string;
    metaKeywords?:    null;
    metaDescription?: null;
    route?:           null;
    published?:       Date;
    id?:              string;
    typeId?:          string;
    title?:           string;
    created?:         Date;
    lastModified?:    Date;
}