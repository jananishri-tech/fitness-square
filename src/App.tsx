/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  PagePath,
  BookingRecord,
  BranchLocation,
  TrainingInterest,
} from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MembershipPage } from './pages/MembershipPage';
import { BookTrialPage } from './pages/BookTrialPage';

const STORAGE_KEY = 'fitness_square_bookings_v1';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PagePath>('home');
  const [selectedBranch, setSelectedBranch] = useState<
    BranchLocation | undefined
  >(undefined);
  const [selectedInterest, setSelectedInterest] = useState<
    TrainingInterest | undefined
  >(undefined);
  const [bookings, setBookings] = useState<BookingRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    } catch {
      // Ignore storage errors
    }
  }, [bookings]);

  const handleNavigate = (
    page: PagePath,
    options?: { branch?: BranchLocation; interest?: TrainingInterest }
  ) => {
    if (options?.branch) {
      setSelectedBranch(options.branch);
    }
    if (options?.interest) {
      setSelectedInterest(options.interest);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddBooking = (booking: BookingRecord) => {
    setBookings((prev) => [booking, ...prev]);
  };

  const handleRemoveBooking = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container flex flex-col">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        bookings={bookings}
        onOpenProfileModal={() => setProfileModalOpen(true)}
      />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-280px)] flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'membership' && (
          <MembershipPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'book-a-free-trial' && (
          <BookTrialPage
            initialBranch={selectedBranch}
            initialInterest={selectedInterest}
            onAddBooking={handleAddBooking}
          />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Member Passes & Trial Bookings Modal */}
      {profileModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center p-space-md"
          onClick={() => setProfileModalOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-surface-container-low rounded-xl p-space-lg md:p-space-xl shadow-2xl border border-surface-container-highest"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-space-lg">
              <div className="flex items-center gap-space-sm">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    badge
                  </span>
                </div>
                <div>
                  <span className="font-label-caps text-label-caps text-primary uppercase block">
                    Athlete Portal
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface uppercase">
                    Trial Passes &amp; Bookings
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setProfileModalOpen(false)}
                aria-label="Close modal"
                className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  close
                </span>
              </button>
            </div>

            {bookings.length === 0 ? (
              <div className="bg-surface-container-lowest rounded-xl p-space-xl text-center">
                <span className="material-symbols-outlined text-primary text-[32px] mb-space-xs block">
                  fitness_center
                </span>
                <p className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                  No Active Trial Passes
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                  Reserve your complimentary floor session and baseline fitness
                  assessment at Poonamallee or Vanagaram.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setProfileModalOpen(false);
                    handleNavigate('book-a-free-trial');
                  }}
                  className="inline-flex items-center justify-center bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase tracking-wider px-space-lg py-space-sm rounded-lg hover:bg-tertiary-container transition-all cursor-pointer"
                >
                  Book a Free Trial
                </button>
              </div>
            ) : (
              <div className="space-y-space-md max-h-[60vh] overflow-y-auto">
                {bookings.map((b) => (
                  <div
                    key={b.id}
                    className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-space-xs border border-surface-container-high"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-label-caps text-label-caps uppercase text-primary">
                        Pass Code: {b.passCode}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveBooking(b.id)}
                        className="text-on-surface-variant hover:text-error font-body-sm text-body-sm cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="font-headline-sm text-headline-sm text-on-surface">
                      {b.fullName} • {b.trainingInterest}
                    </div>
                    <div className="font-body-sm text-body-sm text-secondary flex flex-wrap gap-x-space-md gap-y-1">
                      <span>{b.preferredBranch}</span>
                      <span>•</span>
                      <span>{b.preferredDate}</span>
                      <span>•</span>
                      <span>{b.timeWindow}</span>
                    </div>
                  </div>
                ))}

                <div className="pt-space-sm flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setProfileModalOpen(false);
                      handleNavigate('book-a-free-trial');
                    }}
                    className="inline-flex items-center justify-center bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase tracking-wider px-space-lg py-space-xs rounded-lg hover:bg-tertiary-container transition-all cursor-pointer"
                  >
                    New Trial Booking
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
