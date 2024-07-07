"use client"
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface FeaturesProps {
    title?: string | number;
    content?: string;
}

const FeaturesComponent: React.FC<FeaturesProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mt-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleContent}>
                <div className="text-large lg:text-h2 text-[#0E462C] w-auto ">{title}</div>
                <div className={`transform ${isOpen ? 'rotate-180' : ''} transition-transform sm:hidden`}>
                    <ChevronDown style={{ color: '#0E462C' }} />
                </div>
            </div>
            <p className={`mt-2 w-auto max-w-[380px] text-[15px] ${isOpen ? 'block' : 'hidden'} sm:block`}>
                {content}
            </p>
        </div>
    );
};

export default FeaturesComponent;