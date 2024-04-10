import axios from 'axios';

const authorizationServiceURL = process.env.AUTHORIZATION_SERVICE_URL;

const checkAuthorization = async (req, res, next) => {
    try{
        await axios.get(`${authorizationServiceURL}`, {
            headers : {
                Authorization : req.cookies.token
            }
        })
        next()
    }
    catch (error) {
        console.log(error.response)
        return res.status(error.response.status).json(error.response.data);
    }
}

export default checkAuthorization