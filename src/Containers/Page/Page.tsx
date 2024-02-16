import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageProps } from "../../types";
import axiosApi from "../../axiosApi";

const Page = () => {
    const { pageName } = useParams();
    const [content, setContent] = useState<PageProps | null>(null);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await axiosApi.get<PageProps>(`/pages/${pageName}.json`);
                setContent(response.data)
            } catch (error) {
                console.error('Failed to fetch the page', error); 
            }
        };
        fetchPage();
    }, [pageName]);

    return (
        <div>
            <h1>{content?.title}</h1>
            <p>{content?.content}</p>
        </div>
    );
};

export default Page;