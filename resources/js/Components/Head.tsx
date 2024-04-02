import React from "react";
import {FC} from "react";
import {Helmet} from "react-helmet";

type HeadProps = {
    title: string;
    breadcrumbSchema?: React.ReactNode;
    children?: React.ReactNode;
}
const Head: FC<HeadProps> = ({title, breadcrumbSchema, children}) => {
    const actualTitle = title + (title ? " | " : "") + "Prashanna Tamrakar";
    return <Helmet>
        <title>{actualTitle}</title>
        {breadcrumbSchema}
        {children}
    </Helmet>
}

export default Head;
