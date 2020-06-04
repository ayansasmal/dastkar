const responses = [];

const successResponse = ['success','GET', [200, {}, {Authorization:"",'Content-Type':'application/json'}]];
const errorResponse = ['error','GET', [200, {}, {Authorization:"",'Content-Type':'application/json'}]];
responses.push(successResponse);
responses.push(errorResponse);

export default responses;