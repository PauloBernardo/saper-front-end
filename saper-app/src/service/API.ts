import Axios, { AxiosError } from 'axios'
import Alertify from "../components/alertify/Alertify";

export const useAPI = () => {
    const BACK_HOST: string | undefined = process.env.REACT_APP_BACK_HOST

    const getHttpConfig = (): any => {
        return {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    }

    const handleHttpError = (error: AxiosError, action: {func: any, args: any}) => {
        Alertify.alert(error.message);
        throw error
    }

    const get = async (url: string, params: any, httpConfig?: any): Promise<any> => {
        try {
            const response = await Axios.get(BACK_HOST + url, { ...(httpConfig ? httpConfig : getHttpConfig()), params });
            return response.data;
        } catch (e: any) {
            return handleHttpError(e, {func: get, args: [url, params, httpConfig]});
        }
    }

    const post = (url: string, data: any, httpConfig?: any) => {
        try {
            return Axios.post(BACK_HOST + url, data, httpConfig ? httpConfig : getHttpConfig())
        } catch (e: any) {
            return handleHttpError(e, {func: post, args: [url, data, httpConfig]});
        }
    }

    const put = (url: string, data: any, httpConfig?: any) => {
        try {
            return Axios.put(BACK_HOST + url, data, httpConfig ? httpConfig : getHttpConfig())
        } catch (e: any) {
            return handleHttpError(e, {func: put, args: [url, data, httpConfig]});
        }
    }

    const _delete = (url: string, httpConfig?: any) => {
        try {
            return Axios.delete(BACK_HOST + url, httpConfig ? httpConfig : getHttpConfig())
        } catch (e: any) {
            return handleHttpError(e, {func: _delete, args: [url, httpConfig]});
        }
    }

    return { get, post, put, delete: _delete }
}