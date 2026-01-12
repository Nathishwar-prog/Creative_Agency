import { DottedSurface } from "@/components/dotted-surface";
import { ShinyButton } from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";
import { CalendarCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <DottedSurface className="size-full overflow-y-scroll no-scrollbar">
      <div className="absolute inset-0 flex  justify-center mt-25">
          <pre className="text-sm font-semibold">Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">startups</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">creators</span></pre>
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full",
            "bg-[radial-gradient(ellipse_at_center,--theme(--color-background/.1),transparent_50%)]",
            "blur-[30px]"
          )}
        />
        <h1 className=" text-4xl font-semibold">We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">High-Performance Web</span>, AI & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Digital Products</span></h1>
        <p className="text-lg mt-4">Creative Stack helps startups and businesses turn ideas into fast, scalable, and beautifully designed products.</p>
        <div className="mt-10">
          <Link href="/contact">
          <ShinyButton className="mt-4 mx-auto max-w-2xl text-center text-lg text-muted-foreground md:text-xl pointer-events-auto">Book a Free Consultation <CalendarCheck className="ms-2"/></ShinyButton>
          </Link>
        </div>
      </div>
    </DottedSurface>
  );
}
