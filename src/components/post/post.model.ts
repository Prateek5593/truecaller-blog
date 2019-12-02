interface Meta3 {
    links: Links3;
    next_page: string;
}

interface Links3 {
    counts: string;
}

interface Capabilities {
    publish_post: boolean;
    delete_post: boolean;
    edit_post: boolean;
}

interface Meta2 {
    links: Links2;
}

interface Links2 {
    self: string;
    help: string;
    site: string;
    replies: string;
    likes: string;
}

interface Metadatum {
    id: string;
    key: string;
    value: string;
}

interface Attachments {
    [key: string]: Postthumbnail;
}

interface Terms {
    category: Category;
    post_tag: Posttag;
    post_format: Postformat;
}

interface Postformat {
}

interface Posttag {
    [key: string]: CallAlerts;
}

interface CallAlerts {
    ID: number;
    name: string;
    slug: string;
    description: string;
    post_count: number;
    meta: Meta;
}

interface Category {
    [key: string]: AppFeatures;
}

interface AppFeatures {
    ID: number;
    name: string;
    slug: string;
    description: string;
    post_count: number;
    parent: number;
    meta: Meta;
}

interface Meta {
    links: Links;
}

interface Links {
    self: string;
    help: string;
    site: string;
}

interface Postthumbnail {
    ID: number;
    URL: string;
    guid: string;
    mime_type: string;
    width: number;
    height: number;
}

interface Discussion {
    comments_open: boolean;
    comment_status: string;
    pings_open: boolean;
    ping_status: string;
    comment_count: number;
}

interface Author {
    ID: number;
    login: string;
    email: boolean;
    name: string;
    first_name: string;
    last_name: string;
    nice_name: string;
    URL: string;
    avatar_URL: string;
    profile_URL: string;
}

export interface Post {
    ID: number;
    site_ID: number;
    author: Author;
    date: string;
    modified: string;
    title: string;
    URL: string;
    short_URL: string;
    content: string;
    excerpt: string;
    slug: string;
    guid: string;
    status: string;
    sticky: boolean;
    password: string;
    parent: boolean;
    type: string;
    discussion: Discussion;
    likes_enabled: boolean;
    sharing_enabled: boolean;
    like_count: number;
    i_like: boolean;
    is_reblogged: boolean;
    is_following: boolean;
    global_ID: string;
    featured_image: string;
    post_thumbnail: Postthumbnail;
    format: string;
    geo: boolean;
    menu_order: number;
    page_template: string;
    publicize_URLs: any[];
    terms: Terms;
    tags: Posttag;
    categories: Category;
    attachments: Attachments;
    attachment_count: number;
    metadata: Metadatum[];
    meta: Meta2;
    capabilities: Capabilities;
    other_URLs: Postformat;
}

export interface RootObject {
    found: number;
    posts: Post[];
    meta: Meta3;
}