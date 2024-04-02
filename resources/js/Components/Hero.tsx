import React, {FC, MouseEventHandler} from 'react';


interface HeroProps {
    image: string;
    children?: React.ReactNode;
    onGoBottom?: MouseEventHandler
}


const Hero: FC<HeroProps> = ({ image, children, onGoBottom }) => {

    return (
        <div className="hero">
            <div className="hero-container" style={{ backgroundImage: `url(${image})` }}>
                <div className="overlay"></div>
                <div className="container flex flex-col gap-4">{children}</div>
                <span className="hero-goto-bottom" onClick={onGoBottom}>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="angle-down" viewBox="0 0 1152 1896.0833">
                    <path d="M1075 736q0 13-10 23l-466 466q-10 10-23 10t-23-10L87 759q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
                  </svg>
                </span>
            </div>
        </div>
    );
};

export default Hero;
