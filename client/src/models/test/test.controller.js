const TestController = {};
const ENV = import.meta.env;

const API_URL = `http://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}`;

TestController.callToAPI = async () => {
    return await fetch(`${API_URL}/test`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(err => {
        console.log(err);
        return { message: "Error en la API" };
    });
}

export default TestController;