import React, {FC} from 'react';
import ImageDescription from "@/Components/ImageDescription";

const Blog: FC = () => {
    return <div className="w-full flex justify-center">
        <ImageDescription image={'/image/Prashanna-Tamrakar-Blog.webp'} className="container my-32" alt="Prashanna Tamrakar Blogs">
            <h5 className="text-blue">WELCOME TO MY BLOG!</h5>
            <h2>
                General Aspects of my Blog
            </h2>
            <p>Hi, I’m Prashanna Tamrakar! I also enjoy sharing my knowledge and progress through my blog.</p>
            <div className="column-container-grid mt-4 gap-4">
                <div className="column-container">
                    <h6>Developing with passion</h6>
                    <p>
                        Discover the latest trends in web development.
                    </p>
                </div>

                <div className="column-container">
                    <h6>Continuous Learning</h6>
                    <p>
                        Join me in my journey of mastering new technologies
                    </p>
                </div>
            </div>
        </ImageDescription>
    </div>;
}

export default Blog;
