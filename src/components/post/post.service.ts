import axios, { AxiosResponse } from 'axios';
import { Post } from './post.model';
import APIHelper from '../../helpers/ApiHelper';

class PostService {
    public static getPosts (page = 1, params: any) {
        return APIHelper.sendRequest({
            method: 'get',
            url: `${process.env.REACT_APP_BASE_URL}posts`,
            params: {
                order_by: 'date',
                order: 'DESC',
                number: 25,
                page,
                ...params,
            }
        })
    }
    
    public static getPost (id: string): Promise<AxiosResponse<Post>> {
        return APIHelper.sendRequest({
            method: 'get',
            url: `${process.env.REACT_APP_BASE_URL}posts/${id}`,
        });
    }
    
    public static getRelatedPost (id: string) {
        return APIHelper.sendRequest({
            method: 'post',
            url: `${process.env.REACT_APP_BASE_URL}posts/${id}/related`,
        });
    }
}

export default PostService