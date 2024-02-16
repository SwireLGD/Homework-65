import React, { useState, useEffect } from 'react';
import axiosApi from "../../axiosApi";
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import Loader from '../../Components/Loader/Loader';

const Admin = () => {
    const [pages, setPages] = useState<string[]>([]);
    const [selectedPage, setSelectedPage] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    const loadPages = async () => {
        setIsLoading(true);
        try {
            const response = await axiosApi.get('/pages.json');
            if (response.data) {
            setPages(Object.keys(response.data));
            }
        } catch (error) {
            console.error('Failed to load pages list', error);
        } finally {
            setIsLoading(false);
        }
    };

    loadPages();
    }, []);

    useEffect(() => {
        const loadContent = async () => {
            if (selectedPage) {
                try {
                    const response = await axiosApi.get(`/pages/${selectedPage}.json`);
                    if (response.data) {
                        setTitle(response.data.title || '');
                        setContent(response.data.content || '');
                    }
                } catch (error) {
                    console.error('Failed to fetch content', error);
                }
            }
        };

        loadContent();
    }, [selectedPage]);

    const saveContent = async () => {
        if (selectedPage) {
            setIsLoading(true);
            try {
                await axiosApi.put(`/pages/${selectedPage}.json`, { title, content });
                navigate('/');
            } catch (error) {
                console.error('Failed to save', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        await saveContent();
    };  

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <h2>Edit Pages</h2>
            <form onSubmit={handleSave}>
                <select
                    value={selectedPage}
                    onChange={(e) => setSelectedPage(e.target.value)}
                    className='form-select w-25 mb-4'
                >
                    <option value="">Select Page</option>
                    {pages.map((page) => (
                    <option key={page} value={page}>{page}</option>
                    ))}
                </select>
                {selectedPage && (
                    <>
                        <div className='mb-3'>
                            <label htmlFor="title" className="form-label d-block">Title: </label>
                            <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="input-group-text text-start w-25"
                            />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="content" className="form-label">Content:</label>
                            <ReactQuill
                            theme="snow"
                            value={content}
                            onChange={setContent}
                            style={{ height: '200px', width: '50%' }}
                            />
                        </div>
                        <button type="submit" className='btn btn-primary'>Save</button>
                    </>
                )}
            </form>
        </div>
    );
};

export default Admin;