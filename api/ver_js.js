
export default function handler(req, res) {
    var verify_result = false;
    if(req.method === 'POST'){
        const pwd_req = req.body['pwd'];
        if(pwd_req === 'abc456zyx') verify_result = true;
        else verify_result = false;
    }
    var res_data = {'verify_result': verify_result};

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(res_data);
    
}
