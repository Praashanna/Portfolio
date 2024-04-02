import {FC} from "react";
import ImageDescription from "@/Components/ImageDescription";
import React from "react";
import moment from "moment/moment";
import {Separator} from "@/Components/ui/separator";
import {Link} from "react-router-dom";

interface BlogCardProps {
    blog: Blog;
}
const BlogCard: FC<BlogCardProps> = ({blog}) => {
    return <Link to={"/" + blog.slug}>
        <ImageDescription image={blog.image} alt={blog.name} className="p-4 blog">
            <h5>{blog.name}</h5>
            <p dangerouslySetInnerHTML={
                {__html: blog.content.substring(0, 100) + '...'}
            }/>

            <div className="bg-blue-50 w-full font-space font-xs p-2 time">
                <span className="uppercase">Date: </span>
                <span className="text-blue font-semibold">{moment(blog.created_at).format('DD MMM Y')}</span>
                <span className="mx-1">&bull;</span>
                <span className="uppercase">Time: </span>
                <span className="text-blue font-semibold">{moment(blog.created_at).format("h:m a")}</span>
            </div>
            <Link to={"/" + blog.slug} className="font-space underline font-xs">Read more</Link>

        </ImageDescription>
        <div className="w-full px-4">
            <Separator className="z-10" />
        </div>
    </Link>;
}

export default BlogCard;
