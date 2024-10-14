"use client";

import React from 'react';

interface ViewUserButtonProps {
    userId: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
    const handleClick = () => alert(`user id: ${userId}`);

    return (
        <>
            <button onClick={handleClick}>Lihat User</button>
        </>
    );
};

export default ViewUserButton;
