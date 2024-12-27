import { OptionsHeader } from "./optionsHeader.tsx";

export function MainHeader() {
    return (
        <header className="w-full h-16">
            <ul className="h-full flex flex-nowrap gap-5 mr-8 justify-end items-center">
                <OptionsHeader>Home</OptionsHeader>
                <OptionsHeader>Sobre mim</OptionsHeader>
                <OptionsHeader>Projetos</OptionsHeader>
            </ul>
        </header>
    );
}