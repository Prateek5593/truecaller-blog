enum ErrorReferenceConstants {
  NETWORK_ERROR = 'Network Error',
  ECONNREFUSED = 'ECONNREFUSED',
  ERR_EMPTY_RESPONSE = 'ERR_EMPTY_RESPONSE',
  ERR_NAME_NOT_RESOLVED = 'ERR_NAME_NOT_RESOLVED',
  DNS_PROBE_FINISHED_NO_INTERNET = 'DNS_PROBE_FINISHED_NO_INTERNET',
}

enum ErrorMessageConstants {
  OOPS_SOMETHING_WENT_WRONG = 'Oops! Something went wrong.',
  COULD_NOT_LOAD_DETAILS = 'Could not load the details right now. Please try again later.',
  COULD_NOT_CONNECT = 'Unable to connect to network at this moment. Please try again later.',
  DONT_KNOW_WHAT_HAPPENED = 'We don\'t know what happened. Please try again later.',
  COMMON_MESSAGE = 'There was an unexpected error. Please reload the page and try again',
}

export default { ErrorReferenceConstants, ErrorMessageConstants };
