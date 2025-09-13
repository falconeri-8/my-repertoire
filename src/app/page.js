"use client"

import { FlickeringGrid } from "@/components/ui/shadcn-io/flickering-grid";
import { data as portfolioData } from "@/data/portfolio.js";

import { useState } from 'react';

function Hyperlink({name, url}) {
    const [displayText, setDisplayText] = useState(name);

    const handleClick = () => {
        navigator.clipboard.writeText(url);
        setDisplayText("Copied");
        setTimeout(() => {
            setDisplayText(name);
        }, 2000);
    };

    return (
        <span className="textColor-Fade cursor-pointer" onClick={handleClick}>
            {displayText}
        </span>
    );
}

export default function Landing() {
    return (
        <div className="relative flex min-h-screen overflow-hidden">
            <div className="w-1/2 bg-black min-h-screen p-8 font-mono relative z-20">
                <div className="mb-12">
                    <h1 className="text-lg font-normal mb-8 text-neutral-300">{portfolioData.credentials.website}</h1>
                    <div className="mb-8">
                        <h3 className="text-lg font-normal">{portfolioData.credentials.name}</h3>
                        <h3 className="text-lg font-normal tracking-wider">{portfolioData.credentials.title}</h3>
                    </div>
                </div>
                <div className="mb-12">
                    <h3 className="text-lg font-normal mb-4 tracking-wider text-neutral-300">LIBRARY</h3>
                    <div className="space-y-1">
                        {portfolioData.library.map((item, index) => {
                            return <a href={item.url} target="_blank">
                                <h4 className="spring-hover cursor-pointer">{item.name}</h4>
                            </a>
                        })}
                    </div>
                </div>
                <div className="mb-12">
                    <h3 className="text-lg font-normal mb-4 tracking-wider text-neutral-300">HISTORY</h3>
                    <div className="space-y-1">
                        {portfolioData.history.map((item, index) => {
                            return <div className="flex textColor-Fade">
                                <span className="w-30">{item.company}</span>
                                <span className="w-50">{item.position}</span>
                                <span className="mx-4">{item.date}</span>
                            </div>
                        })}
                    </div>
                </div>
                <div className="mb-12">
                    <h3 className="text-lg font-normal mb-4 tracking-wider text-neutral-300">REPERTOIRE</h3>
                    <div className="space-y-1">
                        {portfolioData.repertoire.map((item, index) => {
                            return <div className="flex space-x-4">
                                {item.map((subItem, index) => {
                                    return <a className="font-mono text-sm textColor-Fade">{subItem}</a>
                                })}
                            </div>
                        })}
                    </div>

                </div>
                <div className="absolute bottom-8 left-8">
                    <div className="flex space-x-4 text-lg font-mono">
                        <span className="textColor-Fade cursor-pointer">Links</span>
                        <Hyperlink name="Email" url="hananeight@gmail.com"/>
                    </div>
                </div>
            </div>
            <div className="w-1/2 bg-black min-h-screen">
                <FlickeringGrid
                    className="absolute inset-0 z-0"
                    squareSize={5}
                    gridGap={30}
                    flickerChance={0.3}
                    color="rgb(200, 25, 25)"
                    maxOpacity={0.8}
                />
            </div>
        </div>
    )
}