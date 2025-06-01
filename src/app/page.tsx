import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import BackgroundPaths from "@/components/background";

const BLUR_FADE_DELAY = 0.04;

export default function HomePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Component */}
      <BackgroundPaths title={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`} />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-6xl mx-auto px-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-40 border-4 border-white/20 shadow-2xl">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            </Avatar>
          </BlurFade>
          
          <div className="text-center space-y-6 w-full">
            <BlurFadeText
              className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto text-muted-foreground leading-relaxed"
              delay={BLUR_FADE_DELAY * 2}
              text={DATA.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
