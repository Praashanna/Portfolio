import React from 'react';

interface IconListItemProps {
    description?: string;
    children: React.ReactNode;
}

const IconListItem: React.FC<IconListItemProps> = ({ description, children }) => {
    return (
        <div className="icon-list-item flex items-center gap-4">
            <div className="bg-white">{children}</div>
            <span className="w-full">{description}</span>
        </div>
    );
};

export default IconListItem;
