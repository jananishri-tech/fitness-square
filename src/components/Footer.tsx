import React from 'react';
import { PagePath, BranchLocation, TrainingInterest } from '../types';
import { LOGO_URL } from './Header';

interface FooterProps {
  onNavigate: (
    page: PagePath,
    options?: { branch?: BranchLocation; interest?: TrainingInterest }
  ) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (
    e: React.MouseEvent,
    page: PagePath,
    options?: { branch?: BranchLocation; interest?: TrainingInterest }
  ) => {
    e.preventDefault();
    onNavigate(page, options);
  };

  return (
    <footer className="w-full bg-surface-container-lowest py-space-2xl">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-xl pb-space-xl">
          <div className="max-w-md">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center gap-space-sm mb-space-sm w-fit"
            >
              <img
                alt="Fitness Square Logo"
                className="h-7 w-auto object-contain"
                referrerPolicy="no-referrer"
                src={LOGO_URL}
              />
              <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface">
                Fitness Square
              </span>
            </a>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              “Strength. Fitness. Consistency.”
            </p>
            <div className="flex flex-col gap-space-xs text-on-secondary-container font-body-sm text-body-sm">
              <button
                type="button"
                onClick={() =>
                  onNavigate('book-a-free-trial', {
                    branch: 'Poonamallee, Chennai',
                  })
                }
                className="flex items-center gap-space-xs hover:text-on-surface transition-colors w-fit cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">
                  location_on
                </span>
                <span>Poonamallee, Chennai</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  onNavigate('book-a-free-trial', {
                    branch: 'Vanagaram, Chennai',
                  })
                }
                className="flex items-center gap-space-xs hover:text-on-surface transition-colors w-fit cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">
                  location_on
                </span>
                <span>Vanagaram, Chennai</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-space-md">
            <div className="flex flex-wrap gap-x-space-lg gap-y-space-sm">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors"
              >
                About
              </a>
              <a
                href="#membership"
                onClick={(e) => handleNavClick(e, 'membership')}
                className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors"
              >
                Membership
              </a>
              <a
                href="#book-a-free-trial"
                onClick={(e) => handleNavClick(e, 'book-a-free-trial')}
                className="font-body-md text-body-md uppercase tracking-wider text-primary-container hover:text-tertiary-container transition-colors"
              >
                Book a Free Trial
              </a>
            </div>
            <a
              href="#book-a-free-trial"
              onClick={(e) => handleNavClick(e, 'book-a-free-trial')}
              className="inline-flex items-center justify-center bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase tracking-wider px-space-lg py-space-sm rounded-lg hover:bg-tertiary-container hover:text-on-tertiary-container transition-all"
            >
              Book a Free Trial
            </a>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-secondary-container">
          <p>© 2026 Fitness Square. All Rights Reserved.</p>
          <div className="flex items-center gap-space-md">
            <span className="text-outline">Discipline • Performance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
