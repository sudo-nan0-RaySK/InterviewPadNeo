import Axios from 'axios';

export async function callRCE({code,language,input,output}){
    const payload = {
        language,
        code,
        testCases:[
            {
                input,
                output:'--'
            }
        ]
    };
    const axios  = Axios.create({
        baseURL:"http://localhost:5001",
        responseType:"json"
    })
    const response = await axios.post('/rce',payload);
    return response.data.tests[0];
}