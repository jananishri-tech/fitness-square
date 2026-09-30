import React from 'react';
import { PagePath, BranchLocation, TrainingInterest } from '../types';

interface AboutPageProps {
  onNavigate: (
    page: PagePath,
    options?: { branch?: BranchLocation; interest?: TrainingInterest }
  ) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
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
      {/* Architectural Hero & Intro Section */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest">
        {/* Subtle Ambient Kinetic Glow Background */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-primary-container/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-tertiary-container/5 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-2xl md:py-32 relative z-10">
          <div className="flex flex-col max-w-4xl">
            <div className="inline-flex items-center gap-space-xs mb-space-md">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.2em]">
                Discipline • Environment • Intent
              </span>
            </div>
            <h1 className="font-display-hero text-headline-xl md:text-display-hero uppercase tracking-tight text-on-surface mb-space-md">
              About Fitness Square
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-2xl leading-relaxed">
              A premium training sanctuary engineered for pure performance and
              consistency.
            </p>
          </div>
          {/* Hero Cinematic Visual Showcase */}
          <div className="mt-space-2xl grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
            <div className="md:col-span-8 overflow-hidden rounded-xl bg-surface-container shadow-xl relative min-h-[360px] md:min-h-[460px]">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-[1.02] min-h-[360px] md:min-h-[460px]"
                data-alt="Interior of an ultra modern dark aesthetic strength and conditioning gym, matte black power racks, precision calibrated barbells, soft warm linear ceiling lights, polished dark concrete floor reflecting subtle warm lighting, athletes training in disciplined silence, immaculate athletic training environment"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtaelyI-O8nszD8BHBxt-94s2U-vjHsCa-YBU384ph2HA-NVvgaInLo_rjiadHl41R6BYDsFk3k0YpOcNMC8KIfGEt1lSWaxAV-Rade6oE0rjAVpKxYDWwLrNppTCMJGSxFMQTWNierTj_-W__B4TvfWWet1qpUkZrtmg8dzzw5hRd_nZn_ikhqUXwLSSkEOT3lke875ZrRsFtQBpSi3thLOY499ptIGM6fFdrk_QT_mrdDcdvoypjEQ')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-space-lg left-space-lg right-space-lg flex justify-between items-end">
                <div>
                  <p className="font-label-caps text-label-caps uppercase text-primary tracking-widest mb-space-xs">
                    Facility Standard
                  </p>
                  <p className="font-headline-sm text-headline-sm text-on-surface">
                    Calibrated for Human Peak Performance
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-space-sm bg-surface-container-high/80 backdrop-blur-md px-space-md py-space-xs rounded-lg">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    verified
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface uppercase tracking-wider">
                    Olympic Grade
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col justify-between gap-gutter">
              <div className="bg-surface-container p-space-xl rounded-xl shadow-md flex-1 flex flex-col justify-center">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-space-xs">
                  The Philosophy
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-space-sm">
                  Uncompromising Integrity
                </h2>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  We eliminate decorative gym culture. Every barbell, lifting
                  platform, and rack is selected for biomechanical perfection
                  and zero distraction.
                </p>
              </div>
              <div className="bg-surface-container-high p-space-xl rounded-xl shadow-md flex items-center justify-between">
                <div>
                  <div className="font-stat-numeric text-stat-numeric text-on-surface tracking-tight">
                    100%
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant uppercase tracking-wider mt-1">
                    Focus on Progression
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[28px]">
                    sports_gymnastics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Highlights / Short Sections */}
      <section className="w-full bg-surface py-space-2xl md:py-32">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl">
            <div>
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-[0.2em] mb-space-xs block">
                Engineered For Growth
              </span>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase tracking-tight">
                Systematic Pillars
              </h2>
            </div>
            <p className="font-body-md text-body-md text-secondary max-w-md mt-space-sm md:mt-0">
              Built upon athletic discipline, tailored structure, and
              intentional biomechanics.
            </p>
          </div>
          {/* Core Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Pillar 01: Our Approach */}
            <div className="group bg-surface-container-low p-space-xl rounded-xl transition-all duration-300 hover:bg-surface-container shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-lg">
                  <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
                    01 / Methodology
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                    <span className="material-symbols-outlined text-[22px]">
                      vital_signs
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm uppercase tracking-tight">
                  Our Approach
                </h3>
                <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                  We strip away the gimmicks to deliver science-backed strength,
                  functional movement, and sustainable conditioning in an
                  inspiring, focused space.
                </p>
              </div>
              <div className="pt-space-xl mt-space-lg flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm">
                <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">
                  Biomechanic Alignment
                </span>
              </div>
            </div>
            {/* Pillar 02: Professional Guidance */}
            <div className="group bg-surface-container-low p-space-xl rounded-xl transition-all duration-300 hover:bg-surface-container shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-lg">
                  <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
                    02 / Mentorship
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                    <span className="material-symbols-outlined text-[22px]">
                      clinical_notes
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm uppercase tracking-tight">
                  Professional Guidance
                </h3>
                <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                  Certified trainers dedicated to perfecting your form, tracking
                  your metrics, and keeping you accountable at every milestone.
                </p>
              </div>
              <div className="pt-space-xl mt-space-lg flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm">
                <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">
                  Daily Telemetry &amp; Tracking
                </span>
              </div>
            </div>
            {/* Pillar 03: Beginner-Friendly Training */}
            <div className="group bg-surface-container-low p-space-xl rounded-xl transition-all duration-300 hover:bg-surface-container shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-lg">
                  <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
                    03 / Accessibility
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                    <span className="material-symbols-outlined text-[22px]">
                      diversity_3
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm uppercase tracking-tight">
                  Beginner-Friendly Training
                </h3>
                <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                  Zero intimidation. Every new member receives equipment
                  orientation, foundational movement screening, and step-by-step
                  programming.
                </p>
              </div>
              <div className="pt-space-xl mt-space-lg flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm">
                <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">
                  Safe Progression Ramp
                </span>
              </div>
            </div>
            {/* Pillar 04: Strength & Fitness Goals */}
            <div className="group bg-surface-container-low p-space-xl rounded-xl transition-all duration-300 hover:bg-surface-container shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-lg">
                  <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
                    04 / Target Outcomes
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                    <span className="material-symbols-outlined text-[22px]">
                      fitness_center
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm uppercase tracking-tight">
                  Strength &amp; Fitness Goals
                </h3>
                <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                  Whether your priority is lifting heavier, dropping body fat,
                  or building athletic endurance, our facility provides the
                  exact tools you need.
                </p>
              </div>
              <div className="pt-space-xl mt-space-lg flex items-center gap-space-xs text-primary font-headline-sm text-headline-sm">
                <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">
                  Targeted Performance Yield
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Floor Visual Strip */}
      <section className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-gutter">
            <div className="h-64 rounded-xl overflow-hidden bg-surface-container relative">
              <div
                className="w-full h-full bg-cover bg-center"
                data-alt="Close up shot of heavy calibrated cast iron Olympic weight plates stacked cleanly on black steel storage pegs in a dimly lit high performance weight room with warm overhead downlights"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBS_28srgtZwlx5-kVKcmwUmGiFe9o9-pGcLMHrXbRYmi4DJf5dfqbxgJ6VLiPmOTA9HZ9f__TuXhSTFjReBp7vkqKNKRCJZZfTSyTVIvoU6ZuOWFNqFZ-hbmWlQFDZ6geeNRE07UOX9ukU7Ct3k5pz-Ai1T3ZhoXJ2UwhTfHhpaKkG5HXrclLD9RBYVl7vFHPbtHKA26Q6Am0BIo1Ip3QnoluLcGOyh0hezS6ssvJ6aqCCp-lRLDrd-A')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <span className="absolute bottom-space-md left-space-md font-label-caps text-label-caps uppercase tracking-wider text-on-surface">
                Calibrated Free Weights
              </span>
            </div>
            <div className="h-64 rounded-xl overflow-hidden bg-surface-container relative">
              <div
                className="w-full h-full bg-cover bg-center"
                data-alt="Sleek functional fitness training turf area with black sleds, battle ropes, and kettlebells lined up under directional architectural LED strip lights in an industrial gym"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6u4gEpxgIcOur2LVq1VZPYptEIjO2Xtr7Qqvu7ZRFsKUa-i7KA19FwFMS2pUiS71hyLgDrQQKdM_WwdXVl_Qc1wtKjAiKEXdPx5YbeMo_MKpqrRo7FrZ_K-_u5RWYQGmdZn5FV-x4QEKBJc6UZC2S4v-F6KGygKMh1mYRBrOfJ0WCkObJcZCryH3GQeGEin06XgFBFYwPugH7KHTmB4by9u8IAOaQjNb6xug9EDl3zcc4or__YlqZng')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <span className="absolute bottom-space-md left-space-md font-label-caps text-label-caps uppercase tracking-wider text-on-surface">
                Conditioning Turf
              </span>
            </div>
            <div className="h-64 rounded-xl overflow-hidden bg-surface-container relative sm:col-span-2 md:col-span-1">
              <div
                className="w-full h-full bg-cover bg-center"
                data-alt="Row of precision barbell squat racks with pull up bars inside a minimalist dark-themed gym interior with floor to ceiling mirrors and dark rubber flooring"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2LJZ8fzRMOT4J2o4EhldFYNCkhdJpOx3fF6zJCUnbi2U5YGDXaQkzBGJVvuGsh9o184HXvHd_VjizRSTFrZVvCOTz-MzxQUt9Le3xem8nzJsPQecwsv5Xe00otaEwdSZIn09jDE-dNETweEeU7M2J8nFRbBxrK4Xh-yiT1un2NLafM7YQkykRePcbXJ3BicVgBSXlxcdJPIzWlXd6MmX1UwwznfI_cEzXl4vKyFw4RfEGLET3gwOXFQ')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <span className="absolute bottom-space-md left-space-md font-label-caps text-label-caps uppercase tracking-wider text-on-surface">
                Heavy Rig System
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="w-full bg-surface py-space-2xl md:py-32">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="max-w-3xl mb-space-2xl">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-[0.2em] mb-space-xs block">
              Chennai Network
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase tracking-tight">
              Our Locations
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-space-xs">
              Two state-of-the-art facilities crafted with identical
              high-performance standards across Chennai.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Location 1: Poonamallee */}
            <div className="bg-surface-container-low rounded-xl p-space-xl flex flex-col justify-between shadow-md transition-all duration-300 hover:bg-surface-container">
              <div>
                <div className="flex items-center justify-between pb-space-md mb-space-lg">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary-container text-[24px]">
                      location_on
                    </span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                      Facility 01
                    </span>
                  </div>
                  <span className="bg-surface-container-highest px-space-sm py-space-xs rounded font-label-caps text-label-caps uppercase text-primary tracking-wider">
                    Open Daily
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mb-space-xs">
                  Poonamallee
                </h3>
                <p className="font-body-md text-body-md text-secondary mb-space-xl">
                  Poonamallee, Chennai, Tamil Nadu
                </p>
                <div className="space-y-space-md bg-surface-container-lowest/60 p-space-lg rounded-lg">
                  <div className="flex items-center gap-space-md">
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      schedule
                    </span>
                    <div className="text-on-surface font-body-sm text-body-sm">
                      <span className="font-semibold text-on-surface">
                        Mon – Sat:
                      </span>{' '}
                      5:30 AM – 10:00 PM{' '}
                      <span className="text-outline mx-1">•</span>{' '}
                      <span className="font-semibold text-on-surface">
                        Sun:
                      </span>{' '}
                      6:00 AM – 8:00 PM
                    </div>
                  </div>
                  <div className="flex items-center gap-space-md">
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      mail
                    </span>
                    <a
                      className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors truncate"
                      href="mailto:contact.poonamallee@fitnesssquare.com"
                    >
                      contact.poonamallee@fitnesssquare.com
                    </a>
                  </div>
                  <div className="flex items-center gap-space-md">
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      call
                    </span>
                    <a
                      className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors"
                      href="tel:+919876543210"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-space-xl pt-space-lg flex items-center justify-between">
                <a
                  href="#book-a-free-trial"
                  onClick={(e) =>
                    handleLink(e, 'book-a-free-trial', {
                      branch: 'Poonamallee, Chennai',
                    })
                  }
                  className="inline-flex items-center gap-space-xs text-primary-container hover:text-tertiary-container font-headline-sm text-headline-sm uppercase tracking-wider transition-colors group"
                >
                  <span>Visit or Book a Free Trial</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Location 2: Vanagaram */}
            <div className="bg-surface-container-low rounded-xl p-space-xl flex flex-col justify-between shadow-md transition-all duration-300 hover:bg-surface-container">
              <div>
                <div className="flex items-center justify-between pb-space-md mb-space-lg">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary-container text-[24px]">
                      location_on
                    </span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                      Facility 02
                    </span>
                  </div>
                  <span className="bg-surface-container-highest px-space-sm py-space-xs rounded font-label-caps text-label-caps uppercase text-primary tracking-wider">
                    Open Daily
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight mb-space-xs">
                  Vanagaram
                </h3>
                <p className="font-body-md text-body-md text-secondary mb-space-xl">
                  Vanagaram, Chennai, Tamil Nadu
                </p>
                <div className="space-y-space-md bg-surface-container-lowest/60 p-space-lg rounded-lg">
                  <div className="flex items-center gap-space-md">
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      schedule
                    </span>
                    <div className="text-on-surface font-body-sm text-body-sm">
                      <span className="font-semibold text-on-surface">
                        Mon – Sat:
                      </span>{' '}
                      5:30 AM – 10:00 PM{' '}
                      <span className="text-outline mx-1">•</span>{' '}
                      <span className="font-semibold text-on-surface">
                        Sun:
                      </span>{' '}
                      6:00 AM – 8:00 PM
                    </div>
                  </div>
                  <div className="flex items-center gap-space-md">
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      mail
                    </span>
                    <a
                      className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors truncate"
                      href="mailto:contact.vanagaram@fitnesssquare.com"
                    >
                      contact.vanagaram@fitnesssquare.com
                    </a>
                  </div>
                  <div className="flex items-center gap-space-md">
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      call
                    </span>
                    <a
                      className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors"
                      href="tel:+919876543211"
                    >
                      +91 98765 43211
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-space-xl pt-space-lg flex items-center justify-between">
                <a
                  href="#book-a-free-trial"
                  onClick={(e) =>
                    handleLink(e, 'book-a-free-trial', {
                      branch: 'Vanagaram, Chennai',
                    })
                  }
                  className="inline-flex items-center gap-space-xs text-primary-container hover:text-tertiary-container font-headline-sm text-headline-sm uppercase tracking-wider transition-colors group"
                >
                  <span>Visit or Book a Free Trial</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-surface-container-lowest py-space-2xl md:py-32 relative overflow-hidden">
        {/* Center Radial Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-container/5 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-margin-mobile lg:px-margin text-center relative z-10">
          <div className="inline-block p-space-xs px-space-md rounded-full bg-surface-container mb-space-md">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
              No Commitment • Experience The Floor
            </span>
          </div>
          <h2 className="font-display-hero text-headline-xl md:text-display-hero uppercase tracking-tight text-on-surface mb-space-md">
            Ready to begin your journey?
          </h2>
          <p className="font-body-lg text-body-lg text-secondary max-w-xl mx-auto mb-space-xl leading-relaxed">
            Step into Fitness Square. Meet our coaches, experience our
            state-of-the-art facilities, and discover your true physical
            baseline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md">
            <a
              href="#book-a-free-trial"
              onClick={(e) => handleLink(e, 'book-a-free-trial')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase tracking-wider px-space-2xl py-space-md rounded-lg hover:bg-tertiary-container hover:text-on-tertiary-container shadow-[0_0_24px_-4px_rgba(255,86,37,0.4)] transition-all"
            >
              Book a Free Trial
            </a>
            <a
              href="#membership"
              onClick={(e) => handleLink(e, 'membership')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm text-headline-sm uppercase tracking-wider px-space-xl py-space-md rounded-lg transition-all"
            >
              Explore Memberships
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
