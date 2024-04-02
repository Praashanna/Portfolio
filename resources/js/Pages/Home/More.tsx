import React, {LegacyRef} from "react";
import {FC} from "react";
import IconListItem from "./IconListItem";

interface MoreProps {
    topRef?: LegacyRef<HTMLDivElement>
}
const More: FC<MoreProps> = ({topRef}) => {
    return <div ref={topRef} className="w-full bg-blue-50 flex justify-center items-center" id="content-start">
        <div className="container flex justify-center w-full gap-8 my-32 lg:flex-row flex-col">
            <div className="text-black lg:w-1/3 flex flex-col gap-2 w-full">
                <h2>Discover with Prashanna Tamrakar</h2>
                <div className="flex">
                    <a href="#" className="btn-blue rounded">Learn More</a>
                </div>
            </div>
            <div className="lg:w-2/3 icon-list-grid w-full">
                <IconListItem description="Learn about the latest development tools.">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="flag"
                         viewBox="0 0 1792 1896.0833">
                        <path
                            d="M320 256q0 72-64 110v1266q0 13-9.5 22.5T224 1664h-64q-13 0-22.5-9.5T128 1632V366q-64-38-64-110 0-53 37.5-90.5T192 128t90.5 37.5T320 256zm1472 64v763q0 25-12.5 38.5T1740 1149q-215 116-369 116-61 0-123.5-22t-108.5-48-115.5-48-142.5-22q-192 0-464 146-17 9-33 9-26 0-45-19t-19-45V474q0-32 31-55 21-14 79-43 236-120 421-120 107 0 200 29t219 88q38 19 88 19 54 0 117.5-21t110-47 88-47 54.5-21q26 0 45 19t19 45z"></path>
                    </svg>
                </IconListItem>
                <IconListItem description="Get advice from me">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="gift"
                         viewBox="0 0 1536 1896.0833">
                        <path
                            d="M928 1356V640H608v716q0 25 18 38.5t46 13.5h192q28 0 46-13.5t18-38.5zM472 512h195L541 351q-26-31-69-31-40 0-68 28t-28 68 28 68 68 28zm688-96q0-40-28-68t-68-28q-43 0-69 31L870 512h194q40 0 68-28t28-68zm376 256v320q0 14-9 23t-23 9h-96v416q0 40-28 68t-68 28H224q-40 0-68-28t-28-68v-416H32q-14 0-23-9t-9-23V672q0-14 9-23t23-9h440q-93 0-158.5-65.5T248 416t65.5-158.5T472 192q107 0 168 77l128 165 128-165q61-77 168-77 93 0 158.5 65.5T1288 416t-65.5 158.5T1064 640h440q14 0 23 9t9 23z"></path>
                    </svg>
                </IconListItem>
                <IconListItem description="Stay updated with my discoveries">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="rocket"
                         viewBox="0 0 1664 1896.0833">
                        <path
                            d="M1440 448q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm224-288q0 249-75.5 430.5T1335 951q-81 80-195 176l-20 379q-2 16-16 26l-384 224q-7 4-16 4-12 0-23-9l-64-64q-13-14-8-32l85-276-281-281-276 85q-3 1-9 1-14 0-23-9l-64-64q-17-19-5-39l224-384q10-14 26-16l379-20q96-114 176-195 188-187 358-258t431-71q14 0 24 9.5t10 22.5z"></path>
                    </svg>
                </IconListItem>
                <IconListItem description="Improve your development skills">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="send"
                         viewBox="0 0 1792.0013 1896.0833">
                        <path
                            d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5T640 1728v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59L1696 9q15-9 32-9 20 0 36 11z"></path>
                    </svg>
                </IconListItem>
            </div>
        </div>
    </div>
}

export default More;
