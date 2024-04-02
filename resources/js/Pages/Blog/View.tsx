import React, {FC, Fragment, useEffect, useState} from "react";
import {useMenu} from "@/Contexts/MenuContext";
import {createBreadcrumb} from "@/Helper/Breadcrumb";
import {useParams} from "react-router-dom";
import Head from "@/Components/Head";
import {Separator} from "@/Components/ui/separator";
import moment from "moment";
import {Skeleton} from "@/Components/ui/skeleton";
import {useGet} from "@/Helper/Request";
import {FallbackPageWrapper} from "@/current-page-fallback";

const ParagraphLikeSkeleton: FC<{length?: number}> = ({length = 0}) => {
    let randomParagraphLength = Math.floor(Math.random() * 5) + 3;
    let paragraphSize = 0;

    return <>
        {[...Array(length)].map((_, i) => {
            const randomWidth = Math.floor(Math.random() * 10) + 90;
            paragraphSize++;
            if (paragraphSize > randomParagraphLength) {
                randomParagraphLength = Math.floor(Math.random() * 5) + 5;
                paragraphSize = 0;
            }
            return <Fragment key={i}>
                <Skeleton className="h-3 mb-4" style={{width: randomWidth+"%"}} />
                {paragraphSize === 0 && <br />}
            </Fragment>;
        })}
    </>
}

const BlogView: FC = () => {
    const { slug } = useParams<"slug">();
    const { setActive, setChild } = useMenu();

    const { response: blog, loading, error } = useGet<Blog>('/api/blogs/'+slug)

    useEffect(() => {
        setActive('Blog');
        setChild(<div className="gradient">
            {loading ?
                <Skeleton className="w-2/5 h-16" /> :
                <h1 className="text-white text-center w-[90%]">
                    {blog ? blog.name : error?.response?.status + " " + error?.response?.statusText}
                </h1>
            }
        </div>);
    }, [blog, error]);

    const {breadcrumb, schema} = createBreadcrumb([
        {url: '/', name: 'Home'},
        {url: '/blog', name: 'Blog'},
        {url: '/blog/'+slug, name: blog?.name || ""}
    ]);

    return <FallbackPageWrapper>
        <Head title={blog?.meta_title || error?.response?.statusText || ''} breadcrumbSchema={schema} />
        {blog || loading ? <div className="container my-20 flex lg:flex-row flex-col gap-12">
            <div className="lg:w-2/3 w-full">
                {breadcrumb}
                <Separator/>
                <div className="bg-blue-50 font-space font-xs p-2 my-4">
                    <span className="uppercase">Date: </span>
                    { blog ?
                        <span className="text-blue font-semibold">{moment(blog.created_at).format('DD MMM Y')}</span>
                        : <Skeleton className="h-3 w-20 inline-block" />
                    }
                    <span className="mx-1">&bull;</span>
                    <span className="uppercase">Time: </span>
                    { blog ?
                        <span className="text-blue font-semibold">{moment(blog.created_at).format('h:m a')}</span>
                        : <Skeleton className="h-3 w-20 inline-block" />
                    }
                </div>
                <div className="mt-4">
                    {blog ?
                        <span className="blog-content" dangerouslySetInnerHTML={{__html: blog.content }}></span>
                        : <ParagraphLikeSkeleton length={40} />
                    }
                </div>
            </div>
            <div className="lg:w-1/3 bg-blue-50 w-full ">
            </div>
        </div> :
        <></>}
    </FallbackPageWrapper>;
}
export default BlogView;
