import React, { useState } from 'react';
import {
  PagePath,
  BillingPeriod,
  BranchLocation,
  TrainingInterest,
} from '../types';

interface MembershipPageProps {
  onNavigate: (
    page: PagePath,
    options?: { branch?: BranchLocation; interest?: TrainingInterest }
  ) => void;
}

const PRICING_DATA: Record<
  BillingPeriod,
  {
    strength: string;
    strengthLabel: string;
    strengthEff: string;
    combo: string;
    comboLabel: string;
    comboEff: string;
  }
> = {
  monthly: {
    strength: '₹1,500',
    strengthLabel: '/ month',
    strengthEff: '₹1,500 / mo',
    combo: '₹2,000',
    comboLabel: '/ month',
    comboEff: '₹2,000 / mo',
  },
  '2months': {
    strength: '₹2,700',
    strengthLabel: '/ 2 months',
    strengthEff: '₹1,350 / mo',
    combo: '₹3,600',
    comboLabel: '/ 2 months',
    comboEff: '₹1,800 / mo',
  },
  '6months': {
    strength: '₹6,500',
    strengthLabel: '/ 6 months',
    strengthEff: '₹1,083 / mo',
    combo: '₹8,500',
    comboLabel: '/ 6 months',
    comboEff: '₹1,416 / mo',
  },
  '12months': {
    strength: '₹10,500',
    strengthLabel: '/ 12 months',
    strengthEff: '₹875 / mo',
    combo: '₹14,000',
    comboLabel: '/ 12 months',
    comboEff: '₹1,166 / mo',
  },
};

export const MembershipPage: React.FC<MembershipPageProps> = ({
  onNavigate,
}) => {
  const [period, setPeriod] = useState<BillingPeriod>('monthly');

  const currentPricing = PRICING_DATA[period];

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
      {/* Top Ambient Glow Field */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary-container/10 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg text-center relative z-10">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high text-primary font-label-caps text-label-caps uppercase tracking-widest mb-space-md">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
            Transparent Pricing
          </div>
          <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero uppercase tracking-tight text-on-surface mb-space-sm">
            Choose Your Plan
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Straightforward membership tiers. No hidden charges, just focused
            training.
          </p>

          {/* Billing Cycle Selector (Interactive Micro-toggle) */}
          <div className="mt-space-xl inline-flex flex-wrap justify-center p-1 bg-surface-container-lowest rounded-lg shadow-sm">
            <button
              type="button"
              onClick={() => setPeriod('monthly')}
              className={`px-space-lg py-space-xs font-label-caps text-label-caps uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                period === 'monthly'
                  ? 'bg-primary-container text-on-primary-container shadow-sm'
                  : 'text-secondary hover:text-on-surface'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setPeriod('2months')}
              className={`px-space-lg py-space-xs font-label-caps text-label-caps uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                period === '2months'
                  ? 'bg-primary-container text-on-primary-container shadow-sm'
                  : 'text-secondary hover:text-on-surface'
              }`}
            >
              2 Months
            </button>
            <button
              type="button"
              onClick={() => setPeriod('6months')}
              className={`px-space-lg py-space-xs font-label-caps text-label-caps uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                period === '6months'
                  ? 'bg-primary-container text-on-primary-container shadow-sm'
                  : 'text-secondary hover:text-on-surface'
              }`}
            >
              6 Months
            </button>
            <button
              type="button"
              onClick={() => setPeriod('12months')}
              className={`px-space-lg py-space-xs font-label-caps text-label-caps uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                period === '12months'
                  ? 'bg-primary-container text-on-primary-container shadow-sm'
                  : 'text-secondary hover:text-on-surface'
              }`}
            >
              12 Months
            </button>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pb-space-2xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-stretch">
            {/* CATEGORY 1: STRENGTH TRAINING */}
            <div className="flex flex-col justify-between bg-surface-container-low rounded-xl p-space-xl shadow-md hover:bg-surface-container transition-colors">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
                    Tier 01
                  </span>
                  <span className="inline-flex items-center gap-space-xs text-secondary font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      fitness_center
                    </span>
                    Resistance Only
                  </span>
                </div>
                <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase mb-space-xs">
                  Strength Training
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  Designed for pure resistance training, free weights, and power
                  rack access.
                </p>

                {/* Price Display Dynamic Area */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg mb-space-lg">
                  <div className="flex items-baseline gap-space-xs">
                    <span className="font-stat-numeric text-stat-numeric text-primary">
                      {currentPricing.strength}
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary uppercase">
                      {currentPricing.strengthLabel}
                    </span>
                  </div>
                  <div className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between">
                    <span>Effective monthly rate:</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      {currentPricing.strengthEff}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-space-sm mb-space-xl">
                  <div className="flex items-start gap-space-sm">
                    <span
                      className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Full weight floor access (Dumbbells up to 50kg, power
                      racks)
                    </span>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <span
                      className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Secure locker &amp; shower amenities
                    </span>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <span
                      className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Floor coach workout guidance &amp; form reviews
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-space-sm pt-space-md bg-surface-container-low">
                <a
                  href="#book-a-free-trial"
                  onClick={(e) =>
                    handleLink(e, 'book-a-free-trial', {
                      interest: 'Strength Training',
                    })
                  }
                  className="w-full text-center py-space-sm px-space-md rounded-lg font-headline-sm text-headline-sm uppercase tracking-wider bg-surface-container-high text-on-surface hover:bg-surface-bright transition-all"
                >
                  Join Strength Plan
                </a>
                <a
                  href="#book-a-free-trial"
                  onClick={(e) =>
                    handleLink(e, 'book-a-free-trial', {
                      interest: 'Strength Training',
                    })
                  }
                  className="w-full text-center py-space-xs text-primary font-body-sm text-body-sm uppercase tracking-wider hover:text-on-surface transition-colors"
                >
                  Or Book A Free Trial →
                </a>
              </div>
            </div>

            {/* CATEGORY 2: CARDIO + STRENGTH (Featured) */}
            <div className="relative flex flex-col justify-between bg-surface-container rounded-xl p-space-xl shadow-xl">
              {/* Featured Badge */}
              <div className="absolute -top-3.5 right-space-xl">
                <span className="px-space-md py-1 bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase tracking-widest rounded-full shadow-[0_0_16px_-2px_rgba(255,86,37,0.4)]">
                  Most Popular
                </span>
              </div>
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
                    Tier 02 • Complete
                  </span>
                  <span className="inline-flex items-center gap-space-xs text-primary font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      bolt
                    </span>
                    Hybrid Performance
                  </span>
                </div>
                <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase mb-space-xs">
                  Cardio + Strength
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  Complete access across functional cardio zones and heavy
                  resistance strength areas.
                </p>

                {/* Price Display Dynamic Area */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg mb-space-lg shadow-sm">
                  <div className="flex items-baseline gap-space-xs">
                    <span className="font-stat-numeric text-stat-numeric text-primary-container">
                      {currentPricing.combo}
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary uppercase">
                      {currentPricing.comboLabel}
                    </span>
                  </div>
                  <div className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between">
                    <span>Effective monthly rate:</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      {currentPricing.comboEff}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-space-sm mb-space-xl">
                  <div className="flex items-start gap-space-sm">
                    <span
                      className="material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">
                      All strength facilities &amp; power racks
                    </span>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <span
                      className="material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Full functional cardio zone (Treadmills, rowers, assault
                      bikes)
                    </span>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <span
                      className="material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Conditioning equipment &amp; turf track entry
                    </span>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <span
                      className="material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Comprehensive baseline fitness &amp; posture assessment
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-space-sm pt-space-md">
                <a
                  href="#book-a-free-trial"
                  onClick={(e) =>
                    handleLink(e, 'book-a-free-trial', {
                      interest: 'Cardio + Strength',
                    })
                  }
                  className="w-full text-center py-space-sm px-space-md rounded-lg font-headline-sm text-headline-sm uppercase tracking-wider bg-primary-container text-on-primary-container hover:bg-tertiary-container shadow-[0_0_20px_-2px_rgba(255,86,37,0.35)] transition-all"
                >
                  Join Cardio + Strength
                </a>
                <a
                  href="#book-a-free-trial"
                  onClick={(e) =>
                    handleLink(e, 'book-a-free-trial', {
                      interest: 'Cardio + Strength',
                    })
                  }
                  className="w-full text-center py-space-xs text-on-surface-variant font-body-sm text-body-sm uppercase tracking-wider hover:text-on-surface transition-colors"
                >
                  Or Book A Free Trial →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Divider & Club Proof Metrics */}
        <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pb-space-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="bg-surface-container-lowest p-space-lg rounded-xl flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[24px]">
                  verified
                </span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-on-surface">
                  Zero Sign-Up Fees
                </div>
                <div className="font-body-sm text-body-sm text-secondary">
                  Pay exactly the rate listed, no hidden locker or registration
                  charges.
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[24px]">
                  pin_drop
                </span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-on-surface">
                  Two Chennai Hubs
                </div>
                <div className="font-body-sm text-body-sm text-secondary">
                  Equally accessible facilities at Poonamallee and Vanagaram.
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[24px]">
                  schedule
                </span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-on-surface">
                  5:00 AM - 10:00 PM
                </div>
                <div className="font-body-sm text-body-sm text-secondary">
                  Extended training hours designed to fit professional
                  schedules.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Image Showcase */}
        <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pb-space-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            <div className="relative rounded-xl overflow-hidden group h-72 bg-surface-container-low shadow-md">
              <img
                alt="Dark, moodily lit gym floor with heavy black iron Olympic barbell plates, clean rubber flooring, and industrial power racks illuminated by focused warm spotlights in Chennai."
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPpH6QXHqru5jtK_h7zbEiDxLIFXqWm6r6kttKi5-RsLO545HjyZYnc_RmnpjYvWxoV_26iXan5gaz_wyR81r5npZU_7o3MQHJETnFwAlVw6PrtbQIZtfFS37CoRPQiNid5c8dVbGPQpr3Y6PlHDNmtYR54_Z3YKupdQUCd2faB8Bi-HYNQJOTal14AKKOxMMVhxfStd2VeG9RADCJljc7BzaXhtqYRV76I2jBNX8VE_2AW0-Cx85-Aw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent flex flex-col justify-end p-space-lg">
                <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest mb-space-xs">
                  Floor Focus
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Heavy Resistance &amp; Olympic Racks
                </h3>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden group h-72 bg-surface-container-low shadow-md">
              <img
                alt="Modern fitness club cardio zone with rowers, curved treadmills, and high-intensity conditioning turf under moody minimalist architecture with subtle orange accent lighting."
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_X2db4-GYWymzj_v7CMbGgaEcBtgP2XsOfPbIVii1QyG5OACnJ_ObWADswlIcpSge-hvvwWGW8wY6Fxo8g2_NRZq8olJgrHXzX6Xmqv5SDinJGcNHoapE2uCZueQVE5meKBdNibanUw1xLNOu2zNDItBUltFixXkbVV-QXL-IVotapSl_KzFivCUrWvLnRifO1wiWYuVJ-iYThDmCT25S300UIK6Xq9aVwITXPTxMxbesJYfX1o5opA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent flex flex-col justify-end p-space-lg">
                <span className="font-label-caps text-label-caps uppercase text-primary-container tracking-widest mb-space-xs">
                  Conditioning Area
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Functional Sprint &amp; Cardio Grid
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION & TRIAL BANNER */}
        <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pb-space-2xl">
          <div className="relative bg-surface-container-low rounded-xl p-space-xl lg:p-space-2xl shadow-xl overflow-hidden">
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-xl">
              <div className="max-w-xl">
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-container mb-space-xs block">
                  Experience The Difference
                </span>
                <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase mb-space-xs">
                  Still deciding? Experience the club first-hand.
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Includes a complimentary initial fitness assessment and
                  trainer consultation. No pressure, test the weights and the
                  community.
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-space-md w-full md:w-auto">
                <a
                  href="#book-a-free-trial"
                  onClick={(e) => handleLink(e, 'book-a-free-trial')}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-space-md bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase tracking-wider rounded-lg hover:bg-tertiary-container shadow-[0_0_24px_-2px_rgba(255,86,37,0.4)] transition-all"
                >
                  Book a Free Trial
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
