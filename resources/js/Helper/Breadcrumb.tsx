import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {
    Breadcrumb as BreadcrumbHead,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/Components/ui/breadcrumb";

type Breadcrumb = {
    url: string;
    name: string;
}
export const createBreadcrumb = (breadcrumbs: Breadcrumb[]) => {
    const breadcrumb = <BreadcrumbHead>
        <BreadcrumbList className="py-3">
        {breadcrumbs.map((breadcrumb, index, {length}) => {
            return <Fragment key={index}>
                <BreadcrumbItem>
                    <BreadcrumbLink to={breadcrumb.url} className="font-normal">{breadcrumb.name}</BreadcrumbLink>
                </BreadcrumbItem>
                {length !== index + 1 && <BreadcrumbSeparator />}
            </Fragment>
        })}
        </BreadcrumbList>

    </BreadcrumbHead>;

    const schemaJSON = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((breadcrumb, index) => {
            return {
                "@type": "ListItem",
                "position": index + 1,
                "name": breadcrumb.name,
                "item": breadcrumb.url
            };
        })
    }

    const schema = <script type="application/ld+json">{JSON.stringify(schemaJSON, undefined, 4)}</script>;

    return {breadcrumb, schema};
}

export default {createBreadcrumb};
export type {Breadcrumb};
