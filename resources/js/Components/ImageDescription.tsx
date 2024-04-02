import React, {FC} from "react";

type ImageDescriptionProps = {
    image: string;
    alt?: string;
    children?: React.ReactNode;
    className?: string;
    reverse?: boolean;
}

const ImageDescription: FC<ImageDescriptionProps> = ({image, alt, children, className, reverse = false}) => {
    const imageContainer =
        <div className="image-container">
            <img src={image} alt={alt} width="2048px" height="1362px"/>
        </div>;

    return <div className={`image-description ${className}`}>
        {!reverse && imageContainer}
        <div className="description-container">{children}</div>
        {reverse && imageContainer}
    </div>;
}

export default ImageDescription;
