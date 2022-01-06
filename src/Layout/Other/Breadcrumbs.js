import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ crumbs }) {
    function generateCrumb(crumb) {
        let content = crumb.name;
        const classes = ["breadcrumb-item"];
        if (crumb.url) {
            classes.push("breadcrumb-active");
            content = <Link to={crumb.url}>{crumb.name}</Link>
        }
        return (
            <li key={`"${crumb.name}"`} className={classes.join(" ")}>{content}</li>
        )
    }

    return (
        <ol className="breadcrumb">
            {crumbs.map(crumb => generateCrumb(crumb))}
        </ol>
    )
}