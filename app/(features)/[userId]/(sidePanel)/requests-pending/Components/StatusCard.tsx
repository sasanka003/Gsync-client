import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatusCardProps {
    title?: string;
    Content?: string | number;
    altText?: string;
    icon?: React.ReactNode;
}

const StatusCard: React.FC<StatusCardProps> = ({
    title,
    Content,
    altText,
    icon,
}) => {
    return (
        <Card className="p-0 mb-4 py-2 px-4 lg:w-[344px] h-[136px]">
            <div className="w-[344px]">
                <div className="text-h4 font-semibold">{title}</div>
                <CardContent className="md:text-ui p-0 h-[36px]">{Content}</CardContent>
            </div>
            <div className="flex items-center mt-4 text-muted-foreground">
                {icon && <div className="w-6 h-6 mr-2">{icon}</div>}
                {altText && <span>{altText}</span>}
            </div>
        </Card>
    );
};

export default StatusCard;  