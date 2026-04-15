import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { 
  Code2, 
  Layers,
  FlaskConical,
  Target,
  BarChart3,
  ShieldCheck,
  Lightbulb
} from "lucide-react";
import type { Metadata } from "next";

import PetgLatticeImg from "@/app/projects/pictures/ctePrevent/petglattice.png";
import PolycarbonateImg from "@/app/projects/pictures/ctePrevent/polycarbonate.png";
import PolyurethaneEvaImg from "@/app/projects/pictures/ctePrevent/polyerutane + eva.png";
import SideViewImg from "@/app/projects/pictures/ctePrevent/sideviewalllayers.png";
import SiliconeImg from "@/app/projects/pictures/ctePrevent/silicon.png";
import TopViewImg from "@/app/projects/pictures/ctePrevent/topviewtotallayers.png";

export const metadata: Metadata = {
  title: "CTEPrevent: Advanced Helmet Liner Design | Arjun Kulkarni",
  description: "Multi-layer energy-damping helmet liner system to reduce concussion and CTE risk in football. ANSYS simulations + ASTM physical testing at UIUC.",
};

export default function CTEPreventPage() {
  const techStack = [
    "ANSYS Mechanical",
    "FEA Simulation",
    "ASTM D1037 Testing",
    "CAD / Prototyping",
    "PETG (Laser-Cut)",
    "Polycarbonate",
    "Silicone Foam",
    "EVA Foam",
    "Polyurethane Foam",
  ];

  const layers = [
    { name: "Polycarbonate Shell", thickness: '1/8"', role: "Rigid outer layer — distributes impact load across a wider area" },
    { name: "PETG Honeycomb Lattice", thickness: '3/4"', role: "Laser-cut hexagonal lattice — dissipates force through controlled deformation" },
    { name: "Silicone Foam", thickness: '3/4"', role: "High-stiffness foam — best safety score (23.6), optimal balance of absorption and compression" },
    { name: "EVA Foam", thickness: '1/4"', role: "Mid-range foam — moderate energy absorption, cushioning transition layer" },
    { name: "Polyurethane Foam", thickness: '3/4"', role: "Soft inner foam — highest raw energy absorption (~43 kJ), contacts the head" },
  ];

  const keyFindings = [
    { stat: "68.7%", label: "Material stiffness influence on safety performance" },
    { stat: "23.6", label: "Best safety score — Silicone foam optimal configuration" },
    { stat: "43 kJ", label: "Peak energy absorbed by polyurethane layer" },
    { stat: "234 kPa", label: "Optimal Young's Modulus (silicone-type)" },
  ];

  return (
    <section className="relative container mx-auto px-6 max-w-5xl">

      {/* Hero */}
      <div className="relative mt-32 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-6 text-xs">
            University of Illinois at Urbana-Champaign — Materials Engineering
          </Badge>
          <h1 className="title font-medium text-4xl md:text-5xl tracking-tight mb-8 leading-tight">
            CTEPrevent: Reducing Concussion &amp; CTE Risk Through Advanced Helmet Liner Design
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
            A multi-layer energy-damping helmet liner combining laser-cut PETG honeycomb lattice, 
            polycarbonate, and graded foam layers — validated through FEA simulation and physical impact testing.
          </p>
          <p className="text-sm text-muted-foreground/70">
            Andrew Scarnavack, Arjun Kulkarni, Jackson Cole &mdash; Department of Materials Engineering, College of Engineering
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-72 md:h-[28rem] mb-24 overflow-hidden rounded-xl bg-muted border">
        <Image
          src={SideViewImg}
          alt="Side view of all helmet liner layers stacked together"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── Problem ── */}
      <div className="mb-20 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">Problem</h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-5">
          Repeated head impacts in football — including sub-concussive hits — are strongly linked to long-term 
          brain injuries like CTE. Current helmets are good at reducing linear acceleration but poor at reducing 
          rotational acceleration, which drives the large pressure gradients in brain tissue that cause injury.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          Existing limitations include lab tests that don&apos;t reflect real game impacts, materials that degrade over time, 
          and rotational forces that remain under-addressed. We set out to design a next-gen internal helmet liner that 
          tackles both linear and rotational acceleration by shifting from simply &ldquo;absorbing hits&rdquo; to actively 
          controlling energy dissipation and rotation.
        </p>
      </div>

      <hr className="border-border mb-10" />

      {/* ── Multi-Layer Design ── */}
      <div className="mb-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Multi-Layer Design</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Each layer serves a specific energy management role. The system was iterated through ANSYS simulation 
            and physical prototyping until the layered configuration outperformed current NFL outer helmet liners.
          </p>
        </div>
        <div className="space-y-3 max-w-3xl mx-auto">
          {layers.map((layer, index) => (
            <div key={index} className="flex items-start gap-4 p-5 rounded-lg border bg-card">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm flex-shrink-0 mt-0.5">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="font-semibold text-base">{layer.name}</h3>
                  <span className="text-xs text-muted-foreground font-mono">{layer.thickness}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{layer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-border mb-10" />

      {/* ── Prototype Materials ── */}
      <div className="mb-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Prototype Materials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="relative h-60 rounded-lg overflow-hidden border bg-muted">
              <Image src={PetgLatticeImg} alt="PETG honeycomb lattice" fill className="object-cover" />
            </div>
            <h3 className="font-semibold text-sm pt-1">PETG Honeycomb Lattice</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">Laser-cut hexagonal structure for controlled deformation and force dissipation.</p>
          </div>

          <div className="space-y-3">
            <div className="relative h-60 rounded-lg overflow-hidden border bg-muted">
              <Image src={PolycarbonateImg} alt="Polycarbonate shell layer" fill className="object-cover" />
            </div>
            <h3 className="font-semibold text-sm pt-1">Polycarbonate Shell</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">Rigid outer layer that distributes impact across a wider area before it reaches the foams.</p>
          </div>

          <div className="space-y-3">
            <div className="relative h-60 rounded-lg overflow-hidden border bg-muted">
              <Image src={SiliconeImg} alt="Silicone foam layer" fill className="object-cover" />
            </div>
            <h3 className="font-semibold text-sm pt-1">Silicone Foam</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">Highest stiffness foam — achieved the best safety score of 23.6 in testing.</p>
          </div>

          <div className="space-y-3">
            <div className="relative h-60 rounded-lg overflow-hidden border bg-muted">
              <Image src={PolyurethaneEvaImg} alt="Polyurethane and EVA foam layers" fill className="object-cover" />
            </div>
            <h3 className="font-semibold text-sm pt-1">Polyurethane + EVA Foam</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">Inner foam layers — polyurethane absorbs the most energy (~43 kJ), EVA provides mid-range cushioning.</p>
          </div>

          <div className="space-y-3">
            <div className="relative h-60 rounded-lg overflow-hidden border bg-muted">
              <Image src={TopViewImg} alt="Top view of all layers assembled" fill className="object-cover" />
            </div>
            <h3 className="font-semibold text-sm pt-1">Assembled Prototype (Top View)</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">All layers bonded and labeled for ASTM D1037 drop testing at 75 J impact energy.</p>
          </div>

          <div className="space-y-3">
            <div className="relative h-60 rounded-lg overflow-hidden border bg-muted">
              <Image src={SideViewImg} alt="Side view of all layers" fill className="object-cover" />
            </div>
            <h3 className="font-semibold text-sm pt-1">Assembled Prototype (Side View)</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">Cross-section showing distinct layer boundaries — PC, PETG lattice, silicone, EVA, and polyurethane.</p>
          </div>
        </div>
      </div>

      <hr className="border-border mb-10" />

      {/* ── Method ── */}
      <div className="mb-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Method</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <FlaskConical className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-lg">Simulation (ANSYS Mechanical)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>Layered helmet model: PC shell + PETG lattice + foam stack</p>
              <p>Impact conditions: ~1000 J at ~20 m/s</p>
              <p>Metrics: linear acceleration, angular acceleration, energy absorption</p>
              <p>Realistic material stiffnesses: 22–480 kPa range</p>
              <p>Modeled energy absorption by plugging displacement, velocity, and force into kinematic and energy equations</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-lg">Physical Testing (ASTM D1037)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>Tested PC reference first for maximum energy resistance baseline</p>
              <p>Built adjustable stand for controlled deformation and shock absorption measurement</p>
              <p>Re-tested each layer combination at increasing impact energies (up to 100 J)</p>
              <p>3 official runs per helmet, 1 run of PC at 30 J as control</p>
              <p>Calculated displacement, velocity, force, and energy absorption from high-speed data</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <hr className="border-border mb-10" />

      {/* ── Key Findings ── */}
      <div className="mb-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Key Findings</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {keyFindings.map((item, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-8 pb-8">
                <p className="text-3xl font-bold text-primary mb-3">{item.stat}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-start gap-3">
              <BarChart3 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base mb-2">Energy Absorption ≠ Safety</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Polyurethane absorbed the most raw energy (~43 kJ) but had the worst safety score due to excessive compression. Higher stiffness foams like silicone performed better overall.</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base mb-2">Stiffness Dominates Performance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Material stiffness accounted for 68.7% of influence on safety outcomes. The optimal configuration used a silicone-type foam at 234 kPa Young&apos;s Modulus, 43mm thickness, 321 kg/m&sup3; density.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-border mb-10" />

      {/* ── Results by Material ── */}
      <div className="mb-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Results by Material</h2>
        </div>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-4 font-semibold">Material</th>
                <th className="text-left p-4 font-semibold">Energy Absorbed</th>
                <th className="text-left p-4 font-semibold">Safety Score</th>
                <th className="text-left p-4 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4 font-medium">Silicone Foam</td>
                <td className="p-4">~14 kJ</td>
                <td className="p-4 text-primary font-semibold">23.6 (Best)</td>
                <td className="p-4 text-muted-foreground">Best balance — lowest stress + compression</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">EVA Foam</td>
                <td className="p-4">~8.3 J</td>
                <td className="p-4">Moderate</td>
                <td className="p-4 text-muted-foreground">Middle performance — good cushioning layer</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Polyurethane Foam</td>
                <td className="p-4">~43 kJ</td>
                <td className="p-4">Worst</td>
                <td className="p-4 text-muted-foreground">Highest absorption but excessive compression</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className="border-border mb-10" />

      {/* ── Tools & Materials ── */}
      <div className="mb-20">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Tools &amp; Materials</CardTitle>
            </div>
            <CardDescription>
              Simulation software, testing standards, and prototyping materials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="border-border mb-10" />

      {/* ── Conclusions ── */}
      <div className="mb-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Conclusions</h2>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="flex items-start gap-4 p-6 rounded-lg border bg-card">
            <Lightbulb className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-base leading-relaxed">Higher-stiffness foams perform best in simulation — the optimal helmet liner system is <strong>PC → PETG → Silicone → EVA → PC</strong>.</p>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-lg border bg-card">
            <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-base leading-relaxed">Our prototype absorbs more energy than the outer helmet liner of current NFL helmets — a promising direction for next-generation head protection.</p>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-lg border bg-card">
            <Layers className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-base leading-relaxed">Future work includes better adhesive bonding between foam layers, thicker and smaller hexagons in the PETG lattice, a blunter drop-test object for realism, and pneumatic rigs for rotational testing.</p>
          </div>
        </div>
      </div>

      <hr className="border-border mb-10" />

      {/* ── Limitations ── */}
      <div className="mb-28">
        <Card className="border-dashed max-w-3xl mx-auto">
          <CardHeader className="text-center pt-8">
            <CardTitle>Limitations &amp; Future Work</CardTitle>
            <CardDescription className="mt-2">
              Conditions tested are not identical to real football impacts
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center max-w-2xl mx-auto pb-8">
            <p className="text-sm text-muted-foreground leading-relaxed">
              The data collected is representative of general impact and energy absorption 
              but further implementation into a real helmet geometry with real-impact conditions 
              would be necessary for definitive results. Future iterations would benefit from 
              smaller PETG hexagon sizes, improved inter-layer adhesion, and pneumatic testing 
              rigs for rotational force measurement.
            </p>
          </CardContent>
        </Card>
      </div>

    </section>
  );
}
