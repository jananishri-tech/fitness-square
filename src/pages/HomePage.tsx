import React, { useState } from 'react';
import { PagePath, BranchLocation, TrainingInterest } from '../types';

interface HomePageProps {
  onNavigate: (
    page: PagePath,
    options?: { branch?: BranchLocation; interest?: TrainingInterest }
  ) => void;
}

const CLUB_PHOTOS = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZxbzv2i4Qq20bBO3bwhDOXKCiH1qkNpzXyC7RoC9o5bMXAdlBGMt-QZNL9tatYWCXpDwUbEhyBpvZaV6xLcpd6ZSLFxLrdx-Wxv48MMr6DvXqMh4YaMGuAeGDfeKTsrl1c5TY9C14IOARH_3Xdy0RYNDHuOL-SoeRu3CgqZPrfJRX47wzCEmOMMs6jixUQcOGLWUpIMpwCSFNEJ5aJe_kgdbIgFQcDvZi1cMTk8B73fB1GFEzR89GFg',
    alt: 'Modern barbell strength training area with heavy steel power racks, rubberized flooring, and warm amber linear strip lighting in dark warehouse aesthetic gym.',
    caption: 'Barbell & Power Rack Zone',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKTl1dT7xWl4n9z-JNAmxvId-C6CwwPLOtmsDlJvHn3lXURm_giFjA083zjNPXAEtZdYcph5G934PH-h-ZWXDPiDRcwEQ-AcS694AEVEpZL772SqBIvdL2rCA-zQp7lzroCItYnEkaLIfCrekzPetSKqeW16T5pfY4gclm15jvTNN_7BV79MtPshpUt2Ncb_HBj3AUySK7Hqf8BIB99-e3xqtaRYvCZann_Z3vQ1rUqMPm5K6t1cazrg',
    alt: 'Precision dumbbell rack with neat tiers of black hexagonal and round urethane weights aligned under subtle gym accent lights.',
    caption: 'Calibrated Free-Weight Tiers',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq07DZltveSZqF8c8PZLIrNLUnH9g475-QHj3b_HTCSvnmYcx0pBYnkAYCchqgbbwVKIW1gDpChmhi6MK1JvHapBapSGARhchc39K9VqKAWY8F40GExWcx2czgEeIndPBrXAQ93uuuGdTBxQ0Slfpv0KKX6y3-Lh_rIJIm6bCemrAS3hhhFYi8c1Sk80E1oJH1nHPvgEOMa6bPMV7qR-y2o8QaIeOZc6zXQFwsFh6bYdtBVcWcQcPoMw',
    alt: 'Cardio conditioning floor featuring rows of clean motorized treadmills and assault air bikes under low ceiling industrial beams.',
    caption: 'High-Capacity Cardio Deck',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1O16scEwnR8KvRlC3yZyX-3KNEWRCCUaHuc-2M9FTT44wathq4O7pXk4NGYd5WHPtV1RnJm7Mac4x6OlGjhNWgFqVHPEcsMZsb1hySy5xRuu4P7BDui-i_VXGx-q4rTeZh_OIQp5TGKJkTpMqB7L9rT-9mw9eDd2hINocGeYZ-dk5BXXI3Jhat6aF812kGq_qt_Fd6S9WktqplkJtt4JJELWiAyT9W5Sj9s9z6gW7WIRaKiYkh-fWWQ',
    alt: 'Spacious functional turf sprint track and kettlebell station in modern athletic fitness center with architectural backlighting.',
    caption: 'Functional Sprint & Conditioning Turf',
  },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );

  const handleLink = (
    e: React.MouseEvent,
    page: PagePath,
    options?: { branch?: BranchLocation; interest?: TrainingInterest }
  ) => {
    e.preventDefault();
    onNavigate(page, options);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full -mt-20 overflow-hidden min-h-[92vh] flex items-center justify-center">
        {/* Hero Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-alt="Ultra-modern dark luxury gym interior with warm linear overhead lighting, matte black Rogue power racks, heavy cast iron dumbbell tiers, polished charcoal concrete floors, and a dedicated athletic training zone in Poonamallee Chennai."
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4gaa9J9JgLsOq_reFWnTTncUfE2Yq0xeXWaPDv9IAftBkTPkLrdmnjveyiJ6HFgittGr4-edFwdemDZ9-GnMWQlQ1gjTB7_b8jklNhixsad1HaY-VzXRq2uxiWqXeOMs85a2fAzJT5VS0vtBj3f-OVEwnJQ22pUov99x37WEgjnQTOhnjdCfRqojU9Jaz4ksW4ne9GxTEUrtblEvnb26EeS8n6GsPYZXSBnNJADI_Pu_Nye1dLms0Rg')",
          }}
        ></div>
        {/* Scrim / Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/75 to-surface/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-surface-container-lowest/80"></div>
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-36 pb-20 w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high/90 text-primary font-label-caps text-label-caps uppercase tracking-wider mb-space-lg shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
            Poonamallee • Vanagaram
          </div>
          <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero uppercase tracking-tight text-on-surface max-w-4xl text-balance mb-space-md">
            Build Your Strength.
            <br className="hidden sm:inline" /> Build Yourself.
          </h1>
          <p className="font-headline-sm text-headline-sm text-on-surface-variant font-normal mb-space-xl tracking-normal">
            Train smarter. Get stronger.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
            <a
              href="#book-a-free-trial"
              onClick={(e) => handleLink(e, 'book-a-free-trial')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase tracking-wider px-space-xl py-space-md rounded-lg hover:bg-tertiary-container hover:text-on-tertiary-container shadow-[0_0_20px_-2px_rgba(255,86,37,0.35)] transition-all"
            >
              Book a Free Trial
            </a>
            <a
              href="#membership"
              onClick={(e) => handleLink(e, 'membership')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container-high/70 text-on-surface font-headline-sm text-headline-sm uppercase tracking-wider px-space-xl py-space-md rounded-lg hover:bg-surface-container-highest transition-all"
            >
              View Membership
            </a>
          </div>
          {/* Quick Metrics Strip */}
          <div className="mt-space-2xl grid grid-cols-2 md:grid-cols-4 gap-space-lg w-full max-w-3xl pt-space-lg border-t-0">
            <div className="flex flex-col items-center">
              <span className="font-stat-numeric text-stat-numeric text-primary">
                2
              </span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mt-1">
                Chennai Locations
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-stat-numeric text-stat-numeric text-on-surface">
                5:00 AM
              </span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mt-1">
                Early Access
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-stat-numeric text-stat-numeric text-on-surface">
                1-on-1
              </span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mt-1">
                Coaching
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-stat-numeric text-stat-numeric text-primary">
                100%
              </span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mt-1">
                Focus
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK TRAINING SECTION */}
      <section className="w-full py-space-2xl bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
            <div>
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-space-xs">
                Program Spectrum
              </span>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase tracking-tight text-on-surface">
                Train With Purpose
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Engineered routines targeted toward progressive physiological
              adaptations and raw structural resilience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Card 1 */}
            <div
              onClick={() =>
                onNavigate('book-a-free-trial', {
                  interest: 'Strength Training',
                })
              }
              className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container transition-all group shadow-sm cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-lg group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[26px]">
                    fitness_center
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-space-xs">
                  Strength Training
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Focus on progressive overload and functional power.
                </p>
              </div>
              <div className="mt-space-lg pt-space-md flex items-center text-primary font-label-caps text-label-caps uppercase tracking-wider">
                <span>Heavy Free Weights</span>
              </div>
            </div>
            {/* Card 2 */}
            <div
              onClick={() =>
                onNavigate('book-a-free-trial', {
                  interest: 'Cardio + Strength',
                })
              }
              className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container transition-all group shadow-sm cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-lg group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[26px]">
                    favorite
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-space-xs">
                  Cardio
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  High-intensity conditioning to boost cardiovascular health.
                </p>
              </div>
              <div className="mt-space-lg pt-space-md flex items-center text-primary font-label-caps text-label-caps uppercase tracking-wider">
                <span>Endurance &amp; Stamina</span>
              </div>
            </div>
            {/* Card 3 */}
            <div
              onClick={() =>
                onNavigate('book-a-free-trial', {
                  interest: 'Personal Training',
                })
              }
              className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container transition-all group shadow-sm cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-lg group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[26px]">
                    person_celebrate
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-space-xs">
                  Personal Training
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Dedicated 1-on-1 coaching tailored to your physique.
                </p>
              </div>
              <div className="mt-space-lg pt-space-md flex items-center text-primary font-label-caps text-label-caps uppercase tracking-wider">
                <span>Bespoke Protocols</span>
              </div>
            </div>
            {/* Card 4 */}
            <div
              onClick={() =>
                onNavigate('book-a-free-trial', {
                  interest: 'Not Sure',
                })
              }
              className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container transition-all group shadow-sm cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-lg group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[26px]">
                    flag
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-space-xs">
                  Beginner Training
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Structured fundamentals and guided posture mechanics.
                </p>
              </div>
              <div className="mt-space-lg pt-space-md flex items-center text-primary font-label-caps text-label-caps uppercase tracking-wider">
                <span>Form &amp; Confidence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY FITNESS SQUARE */}
      <section className="w-full py-space-2xl bg-surface">
        <div className="max-w-5xl mx-auto px-margin-mobile lg:px-margin text-center">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-space-xs">
            The Standard
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase tracking-tight text-on-surface mb-space-2xl">
            Why Fitness Square?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            {/* Point 1 */}
            <div className="flex flex-col items-center bg-surface-container p-space-lg rounded-xl shadow-sm hover:translate-y-[-2px] transition-transform">
              <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[28px]">
                  sports
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-space-xs">
                Professional Guidance
              </h3>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Certified master coaches
              </span>
            </div>
            {/* Point 2 */}
            <div className="flex flex-col items-center bg-surface-container p-space-lg rounded-xl shadow-sm hover:translate-y-[-2px] transition-transform">
              <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[28px]">
                  trending_up
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-space-xs">
                Goal-Oriented Training
              </h3>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Data-backed progressive steps
              </span>
            </div>
            {/* Point 3 */}
            <div className="flex flex-col items-center bg-surface-container p-space-lg rounded-xl shadow-sm hover:translate-y-[-2px] transition-transform">
              <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[28px]">
                  groups
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-space-xs">
                Supportive Environment
              </h3>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Uncluttered athletic culture
              </span>
            </div>
            {/* Point 4 */}
            <div className="flex flex-col items-center bg-surface-container p-space-lg rounded-xl shadow-sm hover:translate-y-[-2px] transition-transform">
              <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[28px]">
                  tune
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-space-xs">
                Personalized Training
              </h3>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Customized biomechanics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEMBERSHIP PREVIEW */}
      <section className="w-full py-space-2xl bg-surface-container-lowest">
        <div className="max-w-6xl mx-auto px-margin-mobile lg:px-margin">
          <div className="text-center max-w-xl mx-auto mb-space-2xl">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-space-xs">
              Transparent Pricing
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase tracking-tight text-on-surface mb-space-xs">
              Membership Plans
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Simple, direct access tiers with full floor access at Poonamallee
              and Vanagaram.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
            {/* Tier 1: Strength Training */}
            <div className="bg-surface-container p-space-xl rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none"></div>
              <div>
                <div className="flex items-baseline justify-between mb-space-lg">
                  <div>
                    <span className="font-label-caps text-label-caps uppercase text-primary tracking-wider">
                      Core Program
                    </span>
                    <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface mt-1">
                      Strength Training
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[28px]">
                    exercise
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  Unrestricted access to the free-weights area, barbell
                  platforms, cable stacks, and selectorized machinery.
                </p>
                {/* Price Breakdown Grid */}
                <div className="grid grid-cols-2 gap-space-md pt-space-md mb-space-xl bg-surface-container-high/40 p-space-md rounded-lg">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      Monthly
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface mt-0.5">
                      ₹1,500
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      2 Months
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface mt-0.5">
                      ₹2,700
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      6 Months
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface mt-0.5">
                      ₹6,500
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      12 Months
                    </span>
                    <span className="font-headline-md text-headline-md text-primary mt-0.5">
                      ₹10,500
                    </span>
                  </div>
                </div>
              </div>
              <a
                href="#membership"
                onClick={(e) =>
                  handleLink(e, 'membership', {
                    interest: 'Strength Training',
                  })
                }
                className="w-full inline-flex items-center justify-center bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary-container font-headline-sm text-headline-sm uppercase tracking-wider py-space-sm rounded-lg transition-colors"
              >
                Select Strength Plan
              </a>
            </div>
            {/* Tier 2: Cardio + Strength */}
            <div className="bg-surface-container-high p-space-xl rounded-xl shadow-lg flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 px-space-md py-1 bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase tracking-wider rounded-bl-lg">
                Most Popular
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-space-lg">
                  <div>
                    <span className="font-label-caps text-label-caps uppercase text-primary tracking-wider">
                      All Access
                    </span>
                    <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface mt-1">
                      Cardio + Strength
                    </h3>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  Full facility entry including the high-capacity cardio zone,
                  rowing ergs, curved runners, and weight room.
                </p>
                {/* Price Breakdown Grid */}
                <div className="grid grid-cols-2 gap-space-md pt-space-md mb-space-xl bg-surface-container-lowest/60 p-space-md rounded-lg">
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      Monthly
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface mt-0.5">
                      ₹2,000
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      2 Months
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface mt-0.5">
                      ₹3,600
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      6 Months
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface mt-0.5">
                      ₹8,500
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      12 Months
                    </span>
                    <span className="font-headline-md text-headline-md text-primary mt-0.5">
                      ₹14,000
                    </span>
                  </div>
                </div>
              </div>
              <a
                href="#membership"
                onClick={(e) =>
                  handleLink(e, 'membership', {
                    interest: 'Cardio + Strength',
                  })
                }
                className="w-full inline-flex items-center justify-center bg-primary-container text-on-primary-container hover:bg-tertiary-container hover:text-on-tertiary-container font-headline-sm text-headline-sm uppercase tracking-wider py-space-sm rounded-lg shadow-sm transition-colors"
              >
                Select Complete Plan
              </a>
            </div>
          </div>
          <div className="mt-space-xl text-center">
            <a
              href="#membership"
              onClick={(e) => handleLink(e, 'membership')}
              className="inline-flex items-center gap-space-xs font-headline-sm text-headline-sm uppercase tracking-wider text-primary hover:text-tertiary transition-colors"
            >
              <span>View Membership Details</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. OPENING HOURS HIGHLIGHT */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-4xl mx-auto px-margin-mobile lg:px-margin">
          <div className="bg-surface-container-low p-space-xl rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-space-lg">
            <div className="flex items-center gap-space-md">
              <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[32px]">
                  schedule
                </span>
              </div>
              <div>
                <span className="font-label-caps text-label-caps uppercase tracking-wider text-primary">
                  Daily Access
                </span>
                <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface">
                  Opening Hours
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                  Morning &amp; Evening Training Available
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-space-lg w-full md:w-auto shrink-0 bg-surface-container px-space-lg py-space-md rounded-lg">
              <div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block">
                  Mon – Sat
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  5:00 AM – 10:00 PM
                </span>
              </div>
              <div className="hidden sm:block w-px bg-surface-container-highest"></div>
              <div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block">
                  Sunday
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  6:00 AM – 1:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR TRAINERS */}
      <section className="w-full py-space-2xl bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="text-center max-w-xl mx-auto mb-space-2xl">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-space-xs">
              Floor Leadership
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase tracking-tight text-on-surface">
              Our Trainers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Trainer 1 */}
            <div className="bg-surface-container rounded-xl overflow-hidden shadow-sm group">
              <div className="w-full aspect-square overflow-hidden bg-surface-container-high">
                <img
                  alt="Athletic fitness male trainer Arun Kumar in black athletic sportswear, confident stance, warm gym studio lighting, professional portrait."
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc1ZLoO5jPsFTtaXNl9LfZUyhCjT10See8i3vfx5TR8pgRCY0OVm3boQQ54QDJRTeHJzJVzGAhg0mG7mlj2J1TWXcblMamoB4UkPeOc7C7c2CIym8OlqFYJgBIjlhEA_5twa-LXFCh4nxX5n3B31NKaCd5bPevQ-vE3O5S2uIZRDKfPFnogTH-SvSY4j-VGHXH1mAka2Vq-TuO-imid6hhoNhKyw8PlNc4vMqCEsFjLmfcJccB-j4VPg"
                />
              </div>
              <div className="p-space-lg">
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                  Arun Kumar
                </h3>
                <span className="font-body-md text-body-md text-primary mt-1 block">
                  Strength &amp; Conditioning
                </span>
              </div>
            </div>
            {/* Trainer 2 */}
            <div className="bg-surface-container rounded-xl overflow-hidden shadow-sm group">
              <div className="w-full aspect-square overflow-hidden bg-surface-container-high">
                <img
                  alt="Athletic male trainer Rahul S posing professionally in front of modern squat racks in black fitness gym apparel with focused athletic demeanor and warm studio rim lighting in Chennai."
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIXqPgTp9qUa4U3mifKg67QZkhYqus5z_RaQH1VSxji4JFOy6Nw7L-EEh0O2Fl5-tw7R5AUeSkC_eBIb9doZn0Gu6GOF11x8XnQqJcPFmJHRXOpZ149a1sJ0qRSs5WNjVthdRIluOV25l8YsUwpGa7ZbOXLcm13tkUvLtt7tLtix_oa0og1dwUPEhR76BvtKgNkY79Sx3UwiFSXdFvpuqrpZK7UAslMUtUl-MQEaktF_N5J3CSlCvTXw"
                />
              </div>
              <div className="p-space-lg">
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                  Rahul S
                </h3>
                <span className="font-body-md text-body-md text-primary mt-1 block">
                  Personal Trainer
                </span>
              </div>
            </div>
            {/* Trainer 3 */}
            <div className="bg-surface-container rounded-xl overflow-hidden shadow-sm group">
              <div className="w-full aspect-square overflow-hidden bg-surface-container-high">
                <img
                  alt="Energetic professional male fitness trainer Karthik M standing in dark ambient gym studio with clean warm background lighting and premium workout gear."
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXbBzw0eLnJPtJ2Xu6E-R3SffUU98Od-tNRk8Z_7X52FcmnNy6aBGEhnj9h36jDsP0nKNup7IoyPIkEzw8gMTmS0q4SUYRJVDsajpjRPtQhL71lkTdsBiFB33lTJ3nwnZU4uuDgPpeQMwlqaOqnx4HUDvAyJhczuR4WPFK6Jjr5omayAxOfAF0CYUWdmM8zumAqYHmku-F2kOFJb3Dljc-bYFhHVRS_8mGGSm4kKNr2SZitLKZcx_xMA"
                />
              </div>
              <div className="p-space-lg">
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                  Karthik M
                </h3>
                <span className="font-body-md text-body-md text-primary mt-1 block">
                  Fitness &amp; Weight Management
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GALLERY PREVIEW */}
      <section className="w-full py-space-2xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-xl gap-space-sm">
            <div>
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-space-xs">
                The Facility
              </span>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase tracking-tight text-on-surface">
                The Club
              </h2>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Poonamallee • Vanagaram
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
            {CLUB_PHOTOS.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setSelectedPhotoIndex(index)}
                className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-high shadow-sm group cursor-pointer focus:outline-none"
              >
                <img
                  alt={photo.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={photo.src}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MEMBER EXPERIENCES & TRIAL OFFER */}
      <section className="w-full py-space-2xl bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="text-center max-w-xl mx-auto mb-space-2xl">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-space-xs">
              Verified Results
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase tracking-tight text-on-surface">
              Member Experiences
            </h2>
          </div>
          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-space-2xl">
            <div className="bg-surface-container p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-primary mb-space-md">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                  “The absolute cleanest gym in Poonamallee. Plates are always
                  racked, machines run ultra-smooth, and the coaching is
                  strictly focused on proper form.”
                </p>
              </div>
              <div className="mt-space-lg pt-space-md flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Venkatesh R.
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Member since 2023
                </span>
              </div>
            </div>
            <div className="bg-surface-container p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-primary mb-space-md">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                  “Transitioned from casual workouts to systematic strength
                  training under Arun&apos;s guidance. The barbell cages and
                  atmosphere give you serious drive every session.”
                </p>
              </div>
              <div className="mt-space-lg pt-space-md flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Divya S.
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Member since 2024
                </span>
              </div>
            </div>
            <div className="bg-surface-container p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-primary mb-space-md">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                  “Great equipment variety, never overcrowded at peak hours, and
                  the trainers actually care about your progression rather than
                  pushing unnecessary sales.”
                </p>
              </div>
              <div className="mt-space-lg pt-space-md flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Anand K.
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Member since 2022
                </span>
              </div>
            </div>
          </div>

          {/* Free Trial Banner Card */}
          <div className="bg-surface-container-high rounded-xl p-space-xl md:p-space-2xl flex flex-col md:flex-row items-center justify-between gap-space-xl shadow-xl">
            <div className="flex flex-col items-start max-w-xl">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded bg-primary-container/20 text-primary-container font-label-caps text-label-caps uppercase tracking-wider mb-space-md">
                <span className="material-symbols-outlined text-[14px]">
                  verified
                </span>
                Special Offer
              </div>
              <h3 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase tracking-tight text-on-surface mb-space-xs">
                Free Fitness Assessment
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Included for all free trial bookings. Test your baseline
                mobility, body composition, and baseline conditioning with our
                head coach.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <a
                href="#book-a-free-trial"
                onClick={(e) => handleLink(e, 'book-a-free-trial')}
                className="w-full md:w-auto inline-flex items-center justify-center bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase tracking-wider px-space-2xl py-space-md rounded-lg hover:bg-tertiary-container hover:text-on-tertiary-container shadow-[0_0_24px_-4px_rgba(255,86,37,0.4)] transition-all"
              >
                Book a Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Gallery */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center p-space-lg"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-surface-container rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={CLUB_PHOTOS[selectedPhotoIndex].src}
              alt={CLUB_PHOTOS[selectedPhotoIndex].alt}
              referrerPolicy="no-referrer"
              className="w-full max-h-[75vh] object-cover"
            />
            <div className="p-space-md flex items-center justify-between bg-surface-container-low">
              <div>
                <span className="font-label-caps text-label-caps text-primary uppercase block">
                  The Club • Facility Showcase
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  {CLUB_PHOTOS[selectedPhotoIndex].caption}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhotoIndex(null)}
                className="px-space-md py-space-xs rounded-lg bg-surface-container-high text-on-surface hover:bg-primary-container hover:text-on-primary-container font-label-caps text-label-caps uppercase transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
