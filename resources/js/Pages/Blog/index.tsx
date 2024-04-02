import React, {FC, useEffect, useState} from "react";
import {useMenu} from "@/Contexts/MenuContext";
import {createBreadcrumb} from "@/Helper/Breadcrumb"
import Head from "@/Components/Head";
import {Separator} from "@/Components/ui/separator";
import axios, {AxiosResponse} from "axios";
import BlogCard from "@/Components/Blog/Card";
import {FallbackPageWrapper} from "@/current-page-fallback";
const Blog: FC = () => {

    const { setActive, setChild } = useMenu();

    useEffect(() => {
        setActive('Blog');
        setChild(<div className="gradient">
            <h1 className="text-white">Blogs</h1>
        </div>);
    }, []);

    const {breadcrumb, schema} = createBreadcrumb([
        {url: '/', name: 'Home'},
        {url: '/blog', name: 'Blog'}
    ]);

    const [blogs, setBlogs] = useState<Blog[]>([]);

    const fetchBlogs = async () => {
        type BlogResponse = {
            data: Blog[]
        };
        const response = await axios.get<BlogResponse, AxiosResponse<BlogResponse>>(
            '/api/blogs/', { responseType: 'json' });
        response.data.data && setBlogs(response.data.data);
    }

    useEffect(() => {
        fetchBlogs().catch(error => console.log(error));
    }, []);

    return <FallbackPageWrapper>
        <Head title="Blog" breadcrumbSchema={schema} />
        <div className="container mx-auto">
            {breadcrumb}
            <Separator />

            <div className="w-full flex mt-8 lg:flex-row flex-col gap-4">
                <div className="lg:w-2/3 w-full flex flex-col gap-4">
                    {blogs && blogs.map((blog, index) => {
                        return <BlogCard blog={blogs[0]} />
                    })}
                    {blogs && blogs.map((blog, index) => {
                        return <BlogCard blog={blogs[0]} />
                    })}
                    {blogs && blogs.map((blog, index) => {
                        return <BlogCard blog={blogs[0]} />
                    })}
                </div>
                <div className="lg:w-1/3 w-full bg-blue-50"></div>
            </div>
        </div>
    </FallbackPageWrapper>
}

export default Blog;
