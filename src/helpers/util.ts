export const getQueryParams =  (qs: string) => {
    const queryParams: any = new URLSearchParams(qs);
    const entries = queryParams.entries();
    let iterator = entries.next();
    const params: any = {};
  
    while (!iterator.done) {
      const [key, value] = iterator.value;
      params[key] = value;  
      iterator = entries.next();
    }
    return params;
}