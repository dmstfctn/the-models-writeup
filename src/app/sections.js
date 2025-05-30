import ContentAScene from "@/data/a-scene.mdx"
import ContentAiTendencies from "@/data/ai-tendencies.mdx"
import ContentAiWeirdness from "@/data/ai-weirdness.mdx"
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

export const TmwSection = ({children, id=""}) => {
    return (
        <section className="tmw-section" id={id}>
            {children}
        </section>
    )
}

export const SectionAScene              = () => <TmwSection id="content-a-scene"><ContentAScene /></TmwSection>
export const SectionAiTendencies        = () => <TmwSection id="content-ai-tendencies"><ContentAiTendencies /></TmwSection>
export const SectionAiWeirdness         = () => <TmwSection id="content-ai-weirdness"><ContentAiWeirdness /></TmwSection>
export const SectionHardwareAndBatching = () => <TmwSection id="content-hardware-and-batching"><ContentHardwareAndBatching /></TmwSection>
export const SectionInterfaceAndServer  = () => <TmwSection id="content-interface-and-server"><ContentInterfaceAndServer /></TmwSection>
export const SectionProjectOverview     = () => <TmwSection id="content-project-overview"><ContentProjectOverview /></TmwSection>
export const SectionPromptTactics       = () => <TmwSection id="content-prompt-tactics"><ContentPromptTactics /></TmwSection>
export const SectionRolePlay            = () => <TmwSection id="content-role-play"><ContentRolePlay /></TmwSection>
export const SectionScriptPrompt        = () => <TmwSection id="content-script-prompt"><ContentScriptPrompt /></TmwSection>
export const SectionTechnicalOverview   = () => <TmwSection id="content-technical-overview"><ContentTechnicalOverview /></TmwSection>
export const SectionTheDirector         = () => <TmwSection id="content-the-director"><ContentTheDirector  /></TmwSection>
export const SectionTheOutputSystem     = () => <TmwSection id="content-the-output-systen"><ContentTheOutputSystem /></TmwSection>
export const SectionVoiceAndSpeech      = () => <TmwSection id="content-voice-and-speech"><ContentVoiceAndSpeech /></TmwSection>