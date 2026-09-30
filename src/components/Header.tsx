import React, { useState } from 'react';
import { PagePath, BookingRecord, BranchLocation, TrainingInterest } from '../types';
import logoUrl from '../ast/fslogo.jpeg';

interface HeaderProps {
  currentPage: PagePath;
  onNavigate: (
    page: PagePath,
    options?: { branch?: BranchLocation; interest?: TrainingInterest }
  ) => void;
  bookings: BookingRecord[];
  onOpenProfileModal: () => void;
}

export const LOGO_URL = logoUrl;

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  bookings,
  onOpenProfileModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, page: PagePath) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-space-sm cursor-pointer"
        >
          <img
            alt="Fitness Square Logo"
            className="h-8 w-auto object-contain"
            referrerPolicy="no-referrer"
            src={LOGO_URL}
          />
          <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface">
            Fitness Square
          </span>
        </a>

        <nav
          className="hidden md:flex items-center gap-space-xl"
          data-active-classes="text-primary-container font-headline-sm"
        >
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            aria-current={currentPage === 'home' ? 'page' : undefined}
            className={
              currentPage === 'home'
                ? 'uppercase tracking-wider transition-colors text-primary-container font-headline-sm text-headline-sm'
                : 'font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors'
            }
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            aria-current={currentPage === 'about' ? 'page' : undefined}
            className={
              currentPage === 'about'
                ? 'uppercase tracking-wider transition-colors text-primary-container font-headline-sm text-headline-sm'
                : 'font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors'
            }
          >
            About
          </a>
          <a
            href="#membership"
            onClick={(e) => handleNavClick(e, 'membership')}
            aria-current={currentPage === 'membership' ? 'page' : undefined}
            className={
              currentPage === 'membership'
                ? 'uppercase tracking-wider transition-colors text-primary-container font-headline-sm text-headline-sm'
                : 'font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors'
            }
          >
            Membership
          </a>
        </nav>

        <div className="flex items-center gap-space-md">
          <a
            href="#book-a-free-trial"
            onClick={(e) => handleNavClick(e, 'book-a-free-trial')}
            className="hidden sm:inline-flex items-center justify-center bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase tracking-wider px-space-lg py-space-sm rounded-lg hover:bg-tertiary-container hover:text-on-tertiary-container shadow-[0_0_16px_-2px_rgba(255,86,37,0.3)] transition-all whitespace-nowrap"
          >
            Book a Free Trial
          </a>

          <button
            type="button"
            onClick={onOpenProfileModal}
            aria-label="View Member Passes & Bookings"
            title="View Member Passes & Bookings"
            className="relative w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
            {bookings.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary-container text-on-primary-container font-label-caps text-[10px] flex items-center justify-center">
                {bookings.length}
              </span>
            )}
          </button>

          <div className="md:hidden relative">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              className="list-none cursor-pointer flex items-center justify-center w-10 h-10 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>

            {mobileMenuOpen && (
              <div className="absolute right-0 top-full mt-space-xs w-64 p-space-md bg-surface-container-low/95 backdrop-blur-xl rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex flex-col gap-space-sm z-50">
                <nav className="flex flex-col gap-space-sm">
                  <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, 'home')}
                    aria-current={currentPage === 'home' ? 'page' : undefined}
                    className={
                      currentPage === 'home'
                        ? 'px-space-md py-space-sm rounded-lg uppercase tracking-wider hover:bg-surface-container transition-all text-primary-container font-headline-sm text-headline-sm'
                        : 'px-space-md py-space-sm rounded-lg font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all'
                    }
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    onClick={(e) => handleNavClick(e, 'about')}
                    aria-current={currentPage === 'about' ? 'page' : undefined}
                    className={
                      currentPage === 'about'
                        ? 'px-space-md py-space-sm rounded-lg uppercase tracking-wider hover:bg-surface-container transition-all text-primary-container font-headline-sm text-headline-sm'
                        : 'px-space-md py-space-sm rounded-lg font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all'
                    }
                  >
                    About
                  </a>
                  <a
                    href="#membership"
                    onClick={(e) => handleNavClick(e, 'membership')}
                    aria-current={currentPage === 'membership' ? 'page' : undefined}
                    className={
                      currentPage === 'membership'
                        ? 'px-space-md py-space-sm rounded-lg uppercase tracking-wider hover:bg-surface-container transition-all text-primary-container font-headline-sm text-headline-sm'
                        : 'px-space-md py-space-sm rounded-lg font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all'
                    }
                  >
                    Membership
                  </a>
                </nav>
                <a
                  href="#book-a-free-trial"
                  onClick={(e) => handleNavClick(e, 'book-a-free-trial')}
                  className="mt-space-xs inline-flex items-center justify-center bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase tracking-wider py-space-sm rounded-lg hover:bg-tertiary-container hover:text-on-tertiary-container shadow-[0_0_16px_-2px_rgba(255,86,37,0.3)] text-center transition-all"
                >
                  Book a Free Trial
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
