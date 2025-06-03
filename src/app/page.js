"use client"

import { useState  } from 'react';
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
    SectionVideo
} from '@/app/sections.js';
import { SidebarProvider } from '@/components/SidebarContext.js';

export default function Home() {
    const [sidebarState, setSidebarState] = useState({
        position: {x: 0, y: 0},
        content: <></>,
        visible: false
    });  

    return (
        <article className={`tmw-root${sidebarState.visible ? ' tmw-root__static' : '' }`}>
            <header className="tmw-header">                   
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
                    <h1><i>The Models</i> (2025)</h1>
                    <h2>dmstfctn</h2>
                </div>
            </header>
            <div className="tmw-body">        
                <SidebarProvider value={{ sidebarState, setSidebarState }}>
                    <section className="tmw-main">                    
                                 
                        <SectionProjectOverview />
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
                    </section>
                    <Sidebar />
                </SidebarProvider> 
            </div>
        </article>
    );
}