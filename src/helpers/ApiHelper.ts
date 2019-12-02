import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import ErrorConstants from './ErrorConstants';

class APIHelper {
    /**
     * @method requestAPI
     * @description A common axios method to make API calls.
     * @param config An axios config object to specify the API path and method to be invoked along with the data to be sent.
     * @returns Promise<AxiosResponse>
     */
    public static sendRequest(config: AxiosRequestConfig): Promise<AxiosResponse> {
      return axios
        .request(config)
        .then(response => {
          return response;
        })
        .catch(error => {
          let errorToSend;
          if (error.response) {
            errorToSend = error.response;
          } else {
            errorToSend = error;
          }
          throw this.handleError(errorToSend);
        });
    }
  
    /**
     * @method handleError
     * @description A utility method for handling errors recieved from API calls.
     * @param error The error received from the API call.
     */
    public static handleError(error: AxiosResponse): string {
      let message = '';
      if (error && error.data && Object.prototype.hasOwnProperty.call(error.data, 'message')) {
        if (error.data.message.match(ErrorConstants.ErrorReferenceConstants.ECONNREFUSED)) {
          message = ErrorConstants.ErrorMessageConstants.COULD_NOT_LOAD_DETAILS;
        } else {
          message = ErrorConstants.ErrorMessageConstants.COMMON_MESSAGE;
        }
      } else if (error instanceof Error) {
        message = error.message;
        if (
          message.match(ErrorConstants.ErrorReferenceConstants.NETWORK_ERROR) ||
          message.match(ErrorConstants.ErrorReferenceConstants.ERR_NAME_NOT_RESOLVED)
        ) {
          message = ErrorConstants.ErrorMessageConstants.COULD_NOT_LOAD_DETAILS;
        }
      } else {
        message = ErrorConstants.ErrorMessageConstants.DONT_KNOW_WHAT_HAPPENED;
      }
      return message;
    }
  }
  
  export default APIHelper;