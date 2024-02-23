import { AlertCircle, X } from "lucide-react";

export function TicketCard() {
    return (
        <div className="border-t border-b border-gray-300 h-[92.5px] space-y-1 flex items-center flex-row">
            <div className="flex items-start h-auto mr-2">
                <AlertCircle size={20} className="text-blue-500" />
            </div>

            <p className="text-sm ">#7 Ticket have changes: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, possimus pariatur praesentium.
                <button className="text-blue-500 ml-2">Ver ticket</button>
            </p>

            <button className="flex items-end h-auto ml-2">
                <X size={20} className="text-gray-500" />
            </button>
        </div>
    )
}