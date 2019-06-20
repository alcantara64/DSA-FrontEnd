import Post from "./Post";

export default interface Archive {
    year:        null;
    month:       null;
    currentPage: number;
    totalPages:  number;
    totalPosts:  number;
    category:    null;
    tag:         null;
    posts:       Post[];
}