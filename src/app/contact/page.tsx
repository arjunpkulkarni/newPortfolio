import BlurFade from "@/components/magicui/blur-fade";
// Link component might be needed if we add social links here directly
// import Link from "next/link";
// import { DATA } from "@/data/resume"; // DATA might not be needed if contact info is directly here or passed differently

const BLUR_FADE_DELAY = 0.04;

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] items-center space-y-10 p-4 md:p-8">
      <section id="contact" className="w-full max-w-5xl">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}> 
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm. I will ignore all soliciting.
                 {/* TODO: Add direct contact methods here, e.g., email from DATA.contact.email */}
                 {/* Or social links from DATA.contact.social if desired on this page */}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
} 