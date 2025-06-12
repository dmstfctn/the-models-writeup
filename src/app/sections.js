"use client"

import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer';

import { useContents } from '@/components/ContentsContext.js';

const VideoPlayerNoSSR = dynamic(() => import('../components/VideoPlayer.js'), {ssr: false});

import ContentAScene from "@/data/a-scene.mdx"
import ContentAiTendencies from "@/data/ai-tendencies.mdx"
import ContentAiWeirdness from "@/data/ai-weirdness.mdx"
import ContentContents from "@/data/contents.mdx"
import ContentHardwareAndBatching from "@/data/hardware-and-batching.mdx"
import ContentInterfaceAndServer from "@/data/interface-and-server.mdx"
import ContentProjectOverview from "@/data/project-overview.mdx"
import ContentPromptTactics from "@/data/prompt-tactics.mdx"
import ContentRolePlay from "@/data/role-play.mdx"
import ContentScriptPrompt from "@/data/script-prompt.mdx"
import ContentTechnicalOverview from "@/data/technical-overview.mdx"
import ContentTheDirector from "@/data/the-director.mdx"
import ContentTheOutputSystem from "@/data/the-output-system.mdx"
import ContentVoiceAndSpeech from "@/data/voice-and-speech.mdx"
import ContentCredits from "@/data/credits.mdx"

export const TmwSection = ({className='', children, id=""}) => {
    const {contentsState,setContentsState} = useContents();    
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 10% of the element is visible
        triggerOnce: false, // Set to true if you only want the effect once
        onChange: ( inView ) => {
            if( inView ){
                setContentsState( {...contentsState, current: id });                
                if(history.pushState) {
                    history.pushState(null, null, `#${id}`);
                }
            }
        }
    });
   
    return (
        <section ref={ref} className={`tmw-section ${className}`} id={id}>
            {children}
        </section>
    )
}

export const SectionAScene              = () => <TmwSection id="content-a-scene"><ContentAScene /></TmwSection>
export const SectionAiTendencies        = () => <TmwSection id="content-ai-tendencies"><ContentAiTendencies /></TmwSection>
export const SectionAiWeirdness         = () => <TmwSection id="content-ai-weirdness"><ContentAiWeirdness /></TmwSection>
export const SectionContents            = () => <TmwSection className="tmw-contents" id="content-contents">
                                                    <div className="tmw-contents--inner">
                                                        <ContentContents />
                                                    </div>
                                                </TmwSection>
export const SectionHardwareAndBatching = () => <TmwSection id="content-hardware-and-batching"><ContentHardwareAndBatching /></TmwSection>
export const SectionInterfaceAndServer  = () => <TmwSection id="content-interface-and-server"><ContentInterfaceAndServer /></TmwSection>
export const SectionProjectOverview     = () => <TmwSection id="content-project-overview"><ContentProjectOverview /></TmwSection>
export const SectionPromptTactics       = () => <TmwSection id="content-prompt-tactics"><ContentPromptTactics /></TmwSection>
export const SectionRolePlay            = () => <TmwSection id="content-role-play"><ContentRolePlay /></TmwSection>
export const SectionScriptPrompt        = () => <TmwSection id="content-script-prompt"><ContentScriptPrompt /></TmwSection>
export const SectionTechnicalOverview   = () => <TmwSection id="content-technical-overview"><ContentTechnicalOverview /></TmwSection>
export const SectionTheDirector         = () => <TmwSection id="content-the-director"><ContentTheDirector  /></TmwSection>
export const SectionTheOutputSystem     = () => <TmwSection id="content-the-output-system"><ContentTheOutputSystem /></TmwSection>
export const SectionVoiceAndSpeech      = () => <TmwSection id="content-voice-and-speech"><ContentVoiceAndSpeech /></TmwSection>
export const SectionCredits             = () => <TmwSection id="content-credits"><ContentCredits /></TmwSection>
export const SectionVideo               = () => <TmwSection id="content-video">
                                                    <VideoPlayerNoSSR 
                                                        url="https://vimeo.com/1061218581"
                                                        width={1920}
                                                        height={1408}
                                                    />
                                                </TmwSection>