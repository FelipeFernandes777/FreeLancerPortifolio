import { ReactNode } from "react";

interface OptionsHeaderProps {
    children: ReactNode,
    image?: string
}

export function OptionsHeader({children}:OptionsHeaderProps) {
    return (
        <li className="relative inline-block text-xl text-white group">
            {children}
            <p className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></p>
        </li>
    );
}
