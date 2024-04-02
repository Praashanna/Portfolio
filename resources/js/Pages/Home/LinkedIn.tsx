import React, { FC } from "react";

const LinkedIn: FC = () => {
    return <div className="w-full flex items-center justify-center bg-white-blue">
        <div
            className="container flex gap-12 justify-between space-between items-center w-full bg-white !mx-4 !my-20 !p-8 flex-col md:flex-row shadow rounded">
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold md:text-left text-center">Connect with me.</h2>
                <p className="md:text-left text-center">
                    For anytime you need me.
                </p>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/prashanna-tamrakar-593558258/"
                   className="btn-blue uppercase rounded-sm ">Join in Linkedin</a>
            </div>
        </div>
    </div>;
};

export default LinkedIn;
