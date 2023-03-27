import axios from "axios";

export const useAPI = () => {
    const URL_BASE: string | undefined = process.env.REACT_APP_BACK_HOST;

    const defaultConfigHtml = () => {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Acess-Control-Allow-Origin': '*',
            }
        }
    }

    const get = (url: string, params: any, config?: any) => {
        return axios.get(URL_BASE + url, !config ? defaultConfigHtml() : config)
    }


    return {get}
}
