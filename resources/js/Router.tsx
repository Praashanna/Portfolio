import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import { MenuProvider } from "Contexts/MenuContext";
import Header from "Components/Header";
// @ts-ignore
import { FallbackProvider } from "@/current-page-fallback";
const Home = React.lazy(() => import("@/Pages/Home"));
const Blog = React.lazy(() => import("@/Pages/Blog"));
const BlogView = React.lazy(() => import("@/Pages/Blog/View"));

const Router = () => {
    return (
            <BrowserRouter>
                <MenuProvider>
                    <Header />
                    <FallbackProvider>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path=":slug" element={<BlogView />} />
                        </Routes>
                    </FallbackProvider>
                </MenuProvider>
            </BrowserRouter>
    );
};

export default Router;
