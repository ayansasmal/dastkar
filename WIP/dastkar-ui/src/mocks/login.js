const responses = [];

const successResponse = ['success','POST', [204, null, {Authorization:"",'Content-Type':'application/json'}]];
const errorResponse = ['error','POST', [204, null, {Authorization:"",'Content-Type':'application/json'}]];
responses.push(successResponse);
responses.push(errorResponse);

export default responses;