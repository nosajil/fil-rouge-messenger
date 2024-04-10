import axios from 'axios';

const authenticationServiceURL = process.env.AUTHENTICATION_SERVICE_URL;

const checkLogin = async (req, res, next) => {
    try {
        const logUser = await axios.post(`${authenticationServiceURL}/login`, req.body)
        req.params = {
            ...req.params,
            ...req.body,
            token: logUser.data.token,
            user: logUser.data.user
        }
        next()
    }
    catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
}

export default checkLogin