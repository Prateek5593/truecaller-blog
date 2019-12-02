import axios from 'axios';
import APIHelper from './helpers/ApiHelper';

class AppService {
    public static getCategories () {
        return APIHelper.sendRequest({
            method: 'get',
            url: `${process.env.REACT_APP_BASE_URL}categories`,
        });
    }
    public static getTags (number = 10) {
        return APIHelper.sendRequest({
            method: 'get',
            url: `${process.env.REACT_APP_BASE_URL}tags`,
            params: {
                order_by: 'count',
                order: 'DESC',
                number
            },
        });
    }

}

export default AppService