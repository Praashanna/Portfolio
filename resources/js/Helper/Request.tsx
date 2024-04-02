import {useEffect, useState} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";

export const useGet = <Type extends unknown>(url: string) => {
    const [response, setResponse] = useState<Type | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError<ResponseType, AxiosResponse<ResponseType>> | null>(null);

    interface ResponseType {
        data: Type;
    }
    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await axios.get<ResponseType, AxiosResponse<ResponseType>>(url);
                setResponse(res.data.data);
                setLoading(false);
            } catch (error) {
                if (axios.isAxiosError(error))
                    setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { response, loading, error };
}

