import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageProps } from "../../types";
import axiosApi from "../../axiosApi";
import Loader from "../../Components/Loader/Loader";

const Page = () => {
    const { pageName } = useParams();
    const [content, setContent] = useState<PageProps | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPage = async () => {
            setIsLoading(true);
            try {
                const response = await axiosApi.get<PageProps>(`/pages/${pageName}.json`);
                setContent(response.data)
            } catch (error) {
                console.error('Failed to fetch the page', error); 
            } finally {
                setIsLoading(false);
            }
        };
        fetchPage();
    }, [pageName]);

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <h1>{content?.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content?.content || "" }}></div>
        </div>
    );
};

export default Page;