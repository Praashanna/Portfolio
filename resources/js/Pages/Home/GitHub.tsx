import React, { FC } from "react";

const GitHub: FC =  () => {
    return <div className="w-full flex">
        <div className="container w-full flex flex-col gap-8 my-32 items-center justify-center">
            <h2 className="text-black text-center">
                Check out my GitHub Repos
            </h2>
            <p className="text-center">Explore my GitHub repositories to see my latest projects and contributions.</p>
            <div className="flex justify-center gap-4">
                <a href="https://github.com/serverboys" className="border-2 btn-transparent-blue rounded font-semibold">View My GitHub</a>
            </div>
        </div>
    </div>;
}

export default GitHub;
