import { ReactNode, useState } from "react";
import { Button } from "../../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleSidebarSubButtonInterface {
    text: string;
    children: ReactNode;
    squareColor: string
}

export function CollapsibleSidebarSubButton({
    text,
    children,
    squareColor
}: CollapsibleSidebarSubButtonInterface) {
    const [isSubButtonsVisible, setSubButtonsVisible] = useState(false);

    const toggleSubButtons = () => {
        setSubButtonsVisible(!isSubButtonsVisible);
    };

    return (
        <>
            <Button
                className={`${squareColor} relative group w-full h-8 rounded-none flex justify-start gap-4  bg-[#FAFAFA] text-slate-800 hover:bg-zinc-200`}
                onClick={toggleSubButtons}
            >
                <div className="flex items-center gap-4">
                    <p className={`ml-9 ${isSubButtonsVisible && ('font-bold')} font-normal` }>
                        {text}
                    </p>
                </div>
                <div className="ml-auto">
                {!isSubButtonsVisible && (<ChevronDown className="text-gray-600 " width={16}/>)}
                    {isSubButtonsVisible && (<ChevronUp className="text-gray-600 " width={16}/>)}
                </div>
                <span className={`absolute right-0 h-full w-1 ${squareColor} opacity-0 group-hover:opacity-100`}></span>
            </Button>
            {isSubButtonsVisible && (
                <>{children}</>
            )}
        </>
    );
}