import { ReactNode, useState } from "react";
import { Button, buttonVariants } from "../../ui/button";
import { VariantProps } from "class-variance-authority";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SidebarOpenButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    text: string;
    icon: ReactNode;
    iconColor: string;
    hoverBgColor: string;
}

export function SidebarOpenButton({
    text,
    icon,
    iconColor,
    hoverBgColor,
    children
}: SidebarOpenButtonProps) {
    const [isSubButtonsVisible, setSubButtonsVisible] = useState(false);

    const toggleSubButtons = () => {
        setSubButtonsVisible(!isSubButtonsVisible);
    };

    return (
        <>
            <Button
                className={`w-full h-8 rounded-none flex justify-between ${isSubButtonsVisible && ('font-bold')} bg-[#FAFAFA] hover:text-white ${iconColor} ${hoverBgColor} group`}
                onClick={toggleSubButtons}
            >
                <div className="flex items-center gap-4">
                    {icon && (
                        <span>{icon}</span>
                    )}
                    <p className="text-gray-900 group-hover:text-white font-normal">
                        {text}
                    </p>
                </div>
                <div className="ml-auto">
                    {!isSubButtonsVisible && (<ChevronDown className="text-gray-600 group-hover:text-white" width={16}/>)}
                    {isSubButtonsVisible && (<ChevronUp className="text-gray-600 group-hover:text-white" width={16}/>)}
                </div>
            </Button>
            {isSubButtonsVisible && (
                <>{children}</>
            )}
        </>
    );
}