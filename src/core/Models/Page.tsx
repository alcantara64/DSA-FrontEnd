import Archive from "./Archive";

export default interface Page {
    archive:         Archive;
    isStartPage:     boolean;
    siteId:          string;
    contentType:     string;
    parentId:        null;
    sortOrder:       number;
    navigationTitle: null;
    isHidden:        boolean;
    redirectUrl:     null;
    redirectType:    number;
    originalPageId:  null;
    blocks:          any[];
    slug:            string;
    permalink:       string;
    metaKeywords:    null;
    metaDescription: null;
    route:           null;
    published:       Date;
    id:              string;
    typeId:          string;
    title:           string;
    created:         Date;
    lastModified:    Date;
}