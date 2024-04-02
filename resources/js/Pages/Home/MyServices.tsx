import React, {FC} from 'react';

const MyServices: FC = () => {
    return <div className="w-full bg-blue-50 flex">
        <div className="container w-full flex flex-col gap-8 my-32 items-center justify-center">
            <h2 className="text-black">
                My Services
            </h2>
            <p className="text-center">Learn more about website development with my detailed list of services and
                expertise.</p>
            <div className="home-services">
                <div className="service">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="html5"
                             viewBox="0 0 512 545.5">
                            <path
                                d="M83.5 96H101l310 .5h17.5l-1.5 17-28.5 317-1 11-10.5 3-127 35-4.5 1-4-1-127-35.5-10.5-3-1-11-28-316.5zm35 32L144 416.5l112 31 111.5-31 26-288zm38.5 48h198l-3.5 39.5H200l3.5 40.5H348l-11 121.5-81 22.5h-.5l-81-22.5L169 314h40l2.5 33 44 12h.5l44-12 4.5-51.5h-137z"></path>
                        </svg>
                    </div>
                    <h6>Web Development</h6>
                </div>
                <div className="service">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                             id="credit-card" viewBox="0 0 512 545.5">
                            <path
                                d="M80 112h288c26.32 0 48 21.68 48 48v16h16c26.32 0 48 21.68 48 48v192c0 26.32-21.68 48-48 48H144c-26.32 0-48-21.68-48-48v-16H80c-26.32 0-48-21.68-48-48V160c0-26.32 21.68-48 48-48zm0 32c-9.04 0-16 6.96-16 16v192c0 9.04 6.96 16 16 16h288c9.04 0 16-6.96 16-16V208H80v-32h304v-16c0-9.04-6.96-16-16-16H80zm336 64v32h32v-16c0-9.04-6.96-16-16-16h-16zm0 64v80c0 26.32-21.68 48-48 48H128v16c0 9.04 6.96 16 16 16h288c9.04 0 16-6.96 16-16V272h-32z"></path>
                        </svg>
                    </div>
                    <h6>E-commerce Solutions</h6>
                </div>
                <div className="service">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="bullhorn"
                             viewBox="0 0 512 545.5">
                            <path
                                d="M448 80.5V227c18.492 6.69 32 24.328 32 45s-13.508 38.31-32 45v146.5L422.5 445s-32.106-23.086-78-46.5-105.39-46.5-157-46.5h-54l26 91.5L165 464H68l-3.5-11.5-32-112-.5-2.5V192h155.5c52.327 0 111.79-22.598 157.5-46s77.5-47 77.5-47zM416 140c-13.122 8.934-23.336 17.02-56.5 34-46.87 23.997-107.608 48.806-167.5 50v96c59.322 1.172 119.986 25.515 167 49.5 33.243 16.96 43.768 25.07 57 34V140zM64 224v96h96v-96H64zm5.5 128L92 432h30.5L100 352H69.5z"></path>
                        </svg>
                    </div>
                    <h6>Marketing and Analysis</h6>
                </div>
                <div className="service">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="flask"
                             viewBox="0 0 512 545.5">
                            <path
                                d="M272 32c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zm-48 48c8.837 0 16 7.163 16 16h112v32h-16v122.5l98.5 127c8.684 11.165 13.5 24.847 13.5 39 0 34.964-28.536 63.5-63.5 63.5h-257C92.536 480 64 451.464 64 416.5c0-14.153 4.816-27.835 13.5-39l98.5-127V128h-16V96h48c0-8.837 7.163-16 16-16zm-16 48v133.5l-3.5 4.5-42 54h187l-42-54-3.5-4.5V128h-96zm64 64c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM137.5 352l-35 45c-4.31 5.54-6.5 12.47-6.5 19.5 0 17.677 13.823 31.5 31.5 31.5h257c17.677 0 31.5-13.823 31.5-31.5 0-7.03-2.19-13.96-6.5-19.5l-35-45h-237z"></path>
                        </svg>
                    </div>
                    <h6>Custom Software Development</h6>
                </div>
            </div>
        </div>
    </div>;
}

export default MyServices;
