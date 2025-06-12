"use client"

import { useState  } from 'react';
import { ContentsProvider } from '@/components/ContentsContext.js';
import { SidebarProvider } from '@/components/SidebarContext.js';
import Sidebar from '@/components/Sidebar.js';
import Image from 'next/image';

import {
    TmwSection,
    SectionAScene,
    SectionAiTendencies,
    SectionAiWeirdness,
    SectionHardwareAndBatching,
    SectionInterfaceAndServer,
    SectionProjectOverview,
    SectionPromptTactics,
    SectionRolePlay,
    SectionScriptPrompt,
    SectionTechnicalOverview,
    SectionTheDirector,
    SectionTheOutputSystem,
    SectionVoiceAndSpeech,
    SectionVideo,
    SectionCredits,
    SectionContents
} from '@/app/sections.js';


export default function Home() {
    const [sidebarState, setSidebarState] = useState({
        position: {x: 0, y: 0},
        content: <></>,
        visible: false
    });  

    const [contentsState, setContentsState] = useState({
        current: ''
    });

    return (
        <article className={`tmw-root${sidebarState.visible ? ' tmw-root__static' : '' }`}>
            <header className="tmw-header" id="top">                   
                <div className='tmw-header-image-wrap'>
                    <Image
                        src="/overview-installation.jpg"
                        // width={1599}
                        // height={1063}
                        fill={true}
                        priority
                        alt="The Models on a large LED screen in front of an audience."
                    />
                </div>
                <div className='tmw-title'>
                    <h1>The Models</h1>
                </div>
            </header>
            <div className="tmw-body">
                <ContentsProvider value={{contentsState,setContentsState}}>
                <SidebarProvider value={{ sidebarState, setSidebarState }}>
                    <section className="tmw-main">                                            
                        <SectionProjectOverview />
                        <SectionContents />
                        <SectionVideo />
                        <SectionAiTendencies />
                        {/* <SectionRolePlay /> */}
                        <SectionAScene />
                        <SectionTechnicalOverview />
                        {/* <SectionTheDirector /> */}
                        <SectionScriptPrompt />
                        {/* <SectionPromptTactics /> */}
                        <SectionVoiceAndSpeech />
                        {/* <SectionAiWeirdness /> */}
                        <SectionTheOutputSystem />
                        <SectionHardwareAndBatching />
                        <SectionInterfaceAndServer />       
                        <SectionCredits />
                    </section>
                    <Sidebar />
                </SidebarProvider> 
                </ContentsProvider>
            </div>
        </article>
    );
}