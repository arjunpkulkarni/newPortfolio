import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Camera,
  Users,
  Send,
  BarChart3,
  CreditCard,
  Zap,
  ScanLine,
  Calculator,
  Shield,
  Smartphone,
  Clock,
  DollarSign,
  Link2,
  Bell,
  Archive,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

import DashboardImg from "@/app/projects/pictures/setld/IMG_4972.PNG";
import AssignItemsImg from "@/app/projects/pictures/setld/IMG_4973.PNG";
import ShareSheetImg from "@/app/projects/pictures/setld/IMG_4974.PNG";
import SplitItemImg from "@/app/projects/pictures/setld/IMG_4975.PNG";
import PaymentTrackingImg from "@/app/projects/pictures/setld/IMG_4976.PNG";
import SettldLogo from "@/app/projects/pictures/setld/logo.png";
import SettldHero from "@/app/projects/pictures/setld/hero.png";

export const metadata: Metadata = {
  title: "Settld  -  Split the Bill, Not Your Friendships",
  description:
    "Scan a receipt. Tap who had what. Get paid instantly. Settld turns the dinner-table calculator moment into a 10-second tap.",
};

const howItWorks = [
  {
    step: "01",
    title: "Scan",
    subtitle: "Snap it. We'll read the fine print.",
    desc: "Point your camera at any receipt. Settld pulls every item, tax, and tip in seconds. No typing, no re-entering prices you already paid for.",
    icon: Camera,
    details: [
      "OCR trained on real-world restaurant receipts",
      "Works on crumpled, faded, or handwritten totals",
      "Edit any line before assigning, just in case",
    ],
  },
  {
    step: "02",
    title: "Assign",
    subtitle: "Tap to assign. Math does itself.",
    desc: "Drop items onto your friends, or share them evenly. Tax and tip split proportionally, down to the cent. Nobody gets stuck paying for the steak they didn't order.",
    icon: Users,
    details: [
      "Split any item between 2 or more people",
      "Proportional tax and tip  -  no awkward rounding",
      "Live totals per person as you assign",
    ],
  },
  {
    step: "03",
    title: "Share",
    subtitle: "One link. Everyone pays.",
    desc: "Send a pay link through iMessage, WhatsApp, or AirDrop. Friends open it in any browser and pay with Apple Pay, card, or bank. No app required on their end.",
    icon: Send,
    details: [
      "Works on iOS, Android, and desktop browsers",
      "Apple Pay, Google Pay, cards, and bank transfer",
      "No signup or account needed to pay",
    ],
  },
];

const whySettld = [
  {
    icon: CreditCard,
    title: "Apple Pay & cards",
    desc: "Every major payment method: Apple Pay, Google Pay, Visa, Mastercard, Amex, Discover.",
  },
  {
    icon: Zap,
    title: "Instant payouts",
    desc: "Money hits your account instantly for most methods, 1–2 business days for bank transfers.",
  },
  {
    icon: ScanLine,
    title: "OCR receipt scan",
    desc: "Trained on real receipts. Pulls items, tax, and tip in under 3 seconds. No retyping.",
  },
  {
    icon: Calculator,
    title: "Tax & tip to the cent",
    desc: "Proportional splitting means nobody overpays on the tax or tip for items they didn't order.",
  },
  {
    icon: Link2,
    title: "No signup for payers",
    desc: "Friends open a link in any browser and pay in seconds. Zero friction. Zero excuses.",
  },
  {
    icon: Shield,
    title: "Bank-level security",
    desc: "Powered by Stripe. PCI-DSS Level 1 certified. We never see or store card numbers.",
  },
];

export default function SettldPage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[500px] w-full overflow-hidden bg-gradient-to-b from-[#0a1f1f] via-[#061212] to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(13,148,136,0.08)_0%,_transparent_60%)]" />

        <div className="container relative mx-auto max-w-7xl px-4 pb-16 pt-32">
          <Link
            href="/products"
            className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="flex-1">
              <div className="flex items-start gap-6 mb-6">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-white p-1.5">
                  <Image src={SettldLogo} alt="Settld logo" fill className="object-contain p-1" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-5xl font-medium tracking-tight text-white md:text-6xl">
                    Settld
                  </h1>
                  <p className="text-lg text-gray-300 max-w-xl">
                    Split the bill, not your friendships.
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-400 max-w-2xl mb-6 leading-relaxed">
                Scan a receipt. Tap who had what. Get paid instantly. Settld turns the dinner-table calculator moment into a 10-second tap. No spreadsheets. No group-chat math. No &quot;I&apos;ll get you later.&quot;
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://www.settld.live/"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0d9488] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0d9488]/90"
                >
                  <ExternalLink className="h-4 w-4" />
                  Get the App
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
                >
                  See how it works
                </a>
              </div>

              <p className="mt-4 text-xs text-gray-500">
                Free to start · No fees for payers · 60-second setup
              </p>
            </div>

            <div className="mt-10 md:mt-0 flex-shrink-0 w-full max-w-xs md:max-w-sm">
              <Image
                src={SettldHero}
                alt="Settld app preview"
                className="rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ───────────────────────────────────────────────────── */}
      <div className="container mx-auto max-w-7xl px-4 py-16">

        {/* badges */}
        <div className="mb-12">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="secondary">Live on iOS &amp; Android</Badge>
            <Badge variant="outline">Mobile App</Badge>
            <Badge variant="outline">Fintech</Badge>
            <Badge variant="outline">Stripe Connect</Badge>
          </div>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Built for the end of every dinner. Scan the receipt, assign who had what, and send a pay link  -  your friends pay in any browser without downloading anything.
          </p>
        </div>

        {/* proof metrics */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "$0", label: "Fees for payers" },
            { value: "3 taps", label: "To settle a bill" },
            { value: "60s", label: "Average setup time" },
            { value: "No signup", label: "Required for payers" },
          ].map((m) => (
            <div key={m.label} className="rounded-lg border bg-card p-5">
              <p className="text-2xl font-medium text-[#0d9488] tabular-nums">{m.value}</p>
              <p className="text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
        <div id="how-it-works" className="mb-20">
          <h2 className="mb-2 text-xl font-medium">How it works</h2>
          <p className="mb-10 text-sm text-muted-foreground">From receipt to settled in three taps.</p>

          <div className="space-y-6">
            {howItWorks.map((step) => (
              <div key={step.step} className="rounded-xl border bg-card p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0d9488]/10 text-sm font-bold text-[#0d9488]">
                    {step.step}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-medium">{step.title}</h3>
                      <step.icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">{step.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((d) => (
                        <span key={d} className="rounded border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* flow */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {["Scan Receipt", "OCR Extraction", "Assign Items", "Share Link", "Collect Payment"].map((node, i, arr) => (
              <div key={node} className="flex items-center gap-2">
                <span className="rounded-lg border bg-card px-4 py-2 text-sm">{node}</span>
                {i < arr.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── APP SCREENSHOTS ───────────────────────────────────────── */}
        <div className="mb-20">
          <h2 className="mb-2 text-xl font-medium">Inside the app</h2>
          <p className="mb-10 text-sm text-muted-foreground">Every screen is production. Here&apos;s what Settld looks like in practice.</p>

          <div className="space-y-20">

            {/* 1. Dashboard */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-xs font-bold text-white">1</span>
                <h3 className="text-xl font-medium">Dashboard</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Your home screen shows your current balance  -  how much friends owe you  -  and all active bills at a glance. One tap to settle any bill or create a new one.
              </p>
              <div className="ml-12 flex justify-center">
                <div className="overflow-hidden rounded-3xl border shadow-lg max-w-[300px]">
                  <Image src={DashboardImg} alt="Settld dashboard" className="w-full h-auto" />
                </div>
              </div>
              <div className="ml-12 mt-6 grid gap-4 md:grid-cols-2 max-w-3xl">
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#0d9488]">Balance Tracking</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Real-time balance aggregated across all active bills  -  shows total owed to you</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Each bill card shows member count, individual total, and settle action</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#0d9488]">Bill Management</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Active bills with draft/settled status  -  create new bills with the FAB button</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Every bill archived so you never lose a record of who paid what</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. Assign Items */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-xs font-bold text-white">2</span>
                <h3 className="text-xl font-medium">Assign Items</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                After OCR scans the receipt, every item appears as an assignable card. Tap to drop items onto group members. Unassigned items are flagged so nothing gets missed. The restaurant name, date, and total are pulled automatically.
              </p>
              <div className="ml-12 flex justify-center">
                <div className="overflow-hidden rounded-3xl border shadow-lg max-w-[300px]">
                  <Image src={AssignItemsImg} alt="Assign items to group members" className="w-full h-auto" />
                </div>
              </div>
              <div className="ml-12 mt-6 grid gap-4 md:grid-cols-2 max-w-3xl">
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#0d9488]">OCR Pipeline</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Receipt scanned via on-device OCR  -  extracts item names, prices, tax, and tip in under 3 seconds</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Trained on real-world restaurant receipts  -  handles crumpled, faded, and handwritten totals</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Edit Items button lets you correct any OCR misread before assignment</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#0d9488]">Assignment Logic</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Tap member names to assign  -  items track assigned vs unassigned state with visual indicators</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Running subtotal and assignment count update live as you assign items</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Split Items */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-xs font-bold text-white">3</span>
                <h3 className="text-xl font-medium">Split Items Between People</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Shared an appetizer? Tap multiple people on any item to split it evenly. The per-person cost updates in real time. Tax and tip are distributed proportionally based on each person&apos;s item total  -  down to the cent.
              </p>
              <div className="ml-12 flex justify-center">
                <div className="overflow-hidden rounded-3xl border shadow-lg max-w-[300px]">
                  <Image src={SplitItemImg} alt="Splitting items between multiple people" className="w-full h-auto" />
                </div>
              </div>
              <div className="ml-12 mt-6 rounded-xl border bg-card p-5 max-w-3xl">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#0d9488]">Proportional Splitting Algorithm</h4>
                <ul className="space-y-2">
                  <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Each item can be split between any number of people  -  cost divided evenly with per-person amount shown</span></li>
                  <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Tax and tip distributed proportionally based on each person&apos;s share of the subtotal  -  not split evenly across the group</span></li>
                  <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Rounding handled so totals always match the receipt  -  no missing pennies, no overcharging</span></li>
                </ul>
              </div>
            </div>

            {/* 4. Share Pay Link */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-xs font-bold text-white">4</span>
                <h3 className="text-xl font-medium">Share the Pay Link</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                One link. Everyone pays. Send via iMessage, AirDrop, WhatsApp, or any messaging app. Friends open it in any browser  -  no app download, no account creation. They see their share and pay with Apple Pay, Google Pay, or card.
              </p>
              <div className="ml-12 flex justify-center">
                <div className="overflow-hidden rounded-3xl border shadow-lg max-w-[300px]">
                  <Image src={ShareSheetImg} alt="iOS share sheet with pay link" className="w-full h-auto" />
                </div>
              </div>
              <div className="ml-12 mt-6 grid gap-4 md:grid-cols-2 max-w-3xl">
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#0d9488]">Pay Link Architecture</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Each bill generates a unique settld.live URL  -  opens a mobile-optimized payment page in any browser</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Payers see their itemized share, total with tax/tip, and payment options  -  no ambiguity</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#0d9488]">Stripe Integration</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Stripe Connect handles all payment processing  -  PCI-DSS Level 1, card numbers never touch our servers</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Supports Apple Pay, Google Pay, all major cards, and bank transfers  -  instant payouts for most methods</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Payment Tracking */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0d9488] text-xs font-bold text-white">5</span>
                <h3 className="text-xl font-medium">Payment Tracking</h3>
              </div>
              <p className="mb-6 ml-12 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Know the moment you&apos;re settled. Real-time collection tracking shows who&apos;s paid and who hasn&apos;t. One-tap reminders for stragglers. Cash payments can be marked manually  -  the tracker keeps up either way.
              </p>
              <div className="ml-12 flex justify-center">
                <div className="overflow-hidden rounded-3xl border shadow-lg max-w-[300px]">
                  <Image src={PaymentTrackingImg} alt="Payment tracking with collection progress" className="w-full h-auto" />
                </div>
              </div>
              <div className="ml-12 mt-6 grid gap-4 md:grid-cols-2 max-w-3xl">
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#0d9488]">Collection Tracking</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Live progress bar updates as each friend pays  -  shows collected vs remaining amount</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Your share (paid upfront) is calculated and subtracted automatically  -  you only collect the difference</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#0d9488]">Participant Management</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Per-person status: Pending, Paid, or manually marked  -  one-tap reminders for pending participants</span></li>
                    <li className="flex gap-3 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Cash payment support  -  mark friends as paid if they settled outside the app</span></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── WHY SETTLD ────────────────────────────────────────────── */}
        <div className="mb-20">
          <h2 className="mb-2 text-xl font-medium">Why Settld</h2>
          <p className="mb-8 text-sm text-muted-foreground">Everything you need. Nothing you don&apos;t.</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whySettld.map((f) => (
              <div key={f.title} className="rounded-xl border bg-card p-6">
                <div className="mb-3 inline-flex rounded-lg border bg-muted/50 p-2">
                  <f.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mb-2 text-sm font-medium">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── HOW WE BUILT IT ───────────────────────────────────────── */}
        <div className="mb-20">
          <h2 className="mb-2 text-xl font-medium">How we built it</h2>
          <p className="mb-8 text-sm text-muted-foreground">The technical decisions behind Settld.</p>

          <div className="space-y-6">

            <div className="rounded-xl border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <ScanLine className="h-5 w-5 text-[#0d9488]" />
                <h3 className="text-lg font-medium">OCR Receipt Parsing</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                Most receipt scanners fail on real-world receipts  -  crumpled paper, faded ink, inconsistent formatting across restaurants. We trained the OCR pipeline specifically on restaurant receipt data to handle edge cases that generic OCR misses.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0d9488]">Extraction Pipeline</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Camera input processed through on-device OCR with receipt-specific text region detection</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Structured extraction: item names, individual prices, subtotal, tax lines, tip, and grand total</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Validation step cross-checks extracted items against the total  -  flags discrepancies for manual review</span></li>
                  </ul>
                </div>
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0d9488]">Edge Case Handling</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Handles multi-line item descriptions, modifier lines (e.g. &quot;add bacon +$2&quot;), and discount rows</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Works on crumpled, skewed, and partially faded receipts via preprocessing (deskew, contrast enhancement)</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Under 3-second processing time including camera capture, OCR, and structured extraction</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <Calculator className="h-5 w-5 text-[#0d9488]" />
                <h3 className="text-lg font-medium">Proportional Splitting Engine</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                The splitting math sounds simple until you account for shared items, proportional tax, tip distribution, and penny-level rounding. We built a splitting engine that guarantees the sum of all shares exactly equals the receipt total  -  no missing pennies, no overcharging.
              </p>
              <div className="rounded-lg border bg-muted/30 p-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span><strong>Item splitting:</strong> any item can be assigned to N people  -  cost divided evenly with remainder distributed</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span><strong>Proportional tax:</strong> tax distributed based on each person&apos;s share of the subtotal, not split evenly  -  the person with the $50 steak pays more tax than the person with the $12 salad</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span><strong>Tip distribution:</strong> same proportional logic  -  tip is weighted by each person&apos;s item total</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span><strong>Rounding guarantee:</strong> largest-remainder method ensures individual shares sum to exact receipt total</span></li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-[#0d9488]" />
                <h3 className="text-lg font-medium">Stripe Connect Payment Flow</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                The hardest UX constraint: payers should never need to download an app or create an account. We built a web-based payment flow using Stripe Connect that works in any browser  -  the person splitting the bill has a Stripe-connected account, and payers just open a link and tap Apple Pay.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0d9488]">Payment Architecture</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Bill creator is a Stripe Connect account  -  payouts go directly to their bank</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Each payer gets a unique Stripe Checkout session with their exact share pre-filled</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Stripe webhooks update payment status in real time  -  dashboard shows collection progress instantly</span></li>
                  </ul>
                </div>
                <div className="rounded-lg border bg-muted/30 p-4">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0d9488]">Security</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>PCI-DSS Level 1 compliance via Stripe  -  we never see or store card numbers</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>$0 fees for payers  -  platform fee structure handles costs on the creator side</span></li>
                    <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d9488]/60" /><span>Instant payouts for Apple Pay and card payments; 1–2 business days for bank transfers</span></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── TECHNICAL HIGHLIGHTS ──────────────────────────────────── */}
        <div className="mb-20">
          <h2 className="mb-2 text-xl font-medium">Technical Highlights</h2>
          <p className="mb-8 text-sm text-muted-foreground">What powers Settld under the hood.</p>
          <div className="space-y-4">
            {[
              "Built OCR receipt scanning pipeline with receipt-specific text region detection  -  extracts items, prices, tax, and tip from real-world restaurant receipts in under 3 seconds",
              "Designed proportional splitting algorithm distributing tax and tip based on each person's item share  -  largest-remainder rounding guarantees individual totals sum to exact receipt amount",
              "Integrated Stripe Connect for zero-friction payments  -  payers open a web link in any browser and pay with Apple Pay, Google Pay, or card without downloading an app or creating an account",
              "Built real-time collection tracking with Stripe webhooks  -  dashboard updates instantly as each friend pays, with one-tap reminders and manual cash payment marking",
              "Shipped cross-platform React Native app with on-device OCR, iOS Share Extension for pay links, and a web payment portal that works on iOS, Android, and desktop browsers",
            ].map((b, i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-card p-6">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0d9488]/10 text-xs font-medium text-[#0d9488]">
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── ARCHITECTURE ──────────────────────────────────────────── */}
        <div className="mb-20">
          <h2 className="mb-2 text-xl font-medium">Architecture</h2>
          <p className="mb-8 text-sm text-muted-foreground">End-to-end system from camera to bank account.</p>
          <div className="space-y-2">
            {[
              { label: "Mobile App", items: ["React Native", "On-Device OCR", "Camera API", "iOS Share Extension"] },
              { label: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Redis"] },
              { label: "Payments", items: ["Stripe Connect", "Checkout Sessions", "Webhooks", "Instant Payouts"] },
              { label: "Web Portal", items: ["Next.js", "Apple Pay", "Google Pay", "Responsive Payment Page"] },
            ].map((lane) => (
              <div key={lane.label} className="flex items-center gap-4 rounded-lg border bg-card p-4">
                <div className="w-28 shrink-0">
                  <p className="text-xs font-medium text-muted-foreground">{lane.label}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {lane.items.map((item) => (
                    <span key={item} className="rounded border bg-muted/50 px-2.5 py-1 text-xs">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <div className="mb-16">
          <div className="rounded-xl border bg-card p-8 text-center">
            <div className="mb-4 inline-flex rounded-lg border bg-muted/50 p-3">
              <DollarSign className="h-6 w-6 text-muted-foreground" />
            </div>
            <h2 className="mb-2 text-xl font-medium">Stop chasing friends for money.</h2>
            <p className="mb-6 mx-auto max-w-lg text-sm text-muted-foreground">
              Download the app and settle your first bill in under a minute. Free to download. No fees for payers. Available on iOS &amp; Android.
            </p>
            <Link
              href="https://www.settld.live/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0d9488] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0d9488]/90"
            >
              <ExternalLink className="h-4 w-4" />
              Get Settld
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
