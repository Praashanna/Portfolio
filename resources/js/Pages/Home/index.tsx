import React, {FC, useEffect, useRef} from "react";
import Hero from "@/Components/Hero";
import {useMenu} from "Contexts/MenuContext";
import Head from "@/Components/Head";
const More = React.lazy(() => import("./More"));
const Blog = React.lazy(() => import("./Blog"));
const MyServices = React.lazy(() => import("./MyServices"));
const GitHub = React.lazy(() => import("./GitHub"));
const LinkedIn = React.lazy(() => import("./LinkedIn"));
import {createBreadcrumb} from "@/Helper/Breadcrumb";
import {FallbackPageWrapper} from "@/current-page-fallback";

const Home = () => {

    const {setActive, setChild} = useMenu();
    const goToMoreRef = useRef<HTMLDivElement>(null);

    const HomeHero: FC = () => {

        return <Hero image={'/image/code.webp'} onGoBottom={toElement}>
            <h1 className='text-white'>Welcome to Prashanna Tamrakar</h1>
            <p className="text-cream font-sm">
                I am a full stack developer specializing in web development. I am passionate about creating dynamic
                and user-friendly websites.
            </p>
            <div className="flex justify-center flex-row gap-4 mt-4">
                <a href="/contact" className="btn-blue">Learn More</a>
                <a href="/projects" className="btn-transparent">Contact Me</a>
            </div>
        </Hero>;

    }
    useEffect(() => {
        setActive('Home');
        setChild(<HomeHero />);
    }, []);

    const toElement = () => {
        if(goToMoreRef?.current === null) return
        // Get element coords from Ref
        const element =
            goToMoreRef.current.getBoundingClientRect().top + window.scrollY

        window.scroll({
            top: element,
            behavior: "smooth"
        })
    }

    const {schema} = createBreadcrumb([
        {url: '/', name: 'Home'}
    ]);

    return <FallbackPageWrapper>
        <Head title={'Home'} breadcrumbSchema={schema}/>
        <More topRef={goToMoreRef} />
        <Blog />
        <MyServices />
        <GitHub />
        <LinkedIn />
    </FallbackPageWrapper>;

};

export default Home;
