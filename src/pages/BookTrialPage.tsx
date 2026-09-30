import React, { useState, useEffect } from 'react';
import {
  BranchLocation,
  TimeWindow,
  TrainingInterest,
  BookingRecord,
} from '../types';

interface BookTrialPageProps {
  initialBranch?: BranchLocation;
  initialInterest?: TrainingInterest;
  onAddBooking: (booking: BookingRecord) => void;
}

const getTomorrowDateString = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yyyy = tomorrow.getFullYear();
  const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const dd = String(tomorrow.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

export const BookTrialPage: React.FC<BookTrialPageProps> = ({
  initialBranch,
  initialInterest,
  onAddBooking,
}) => {
  const minDate = getTomorrowDateString();
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [preferredBranch, setPreferredBranch] = useState<BranchLocation>(
    initialBranch || 'Poonamallee, Chennai'
  );
  const [preferredDate, setPreferredDate] = useState(minDate);
  const [timeWindow, setTimeWindow] = useState<TimeWindow>(
    'Morning (6 AM - 10 AM)'
  );
  const [trainingInterest, setTrainingInterest] = useState<TrainingInterest>(
    initialInterest || 'Strength Training'
  );
  const [submittedBooking, setSubmittedBooking] =
    useState<BookingRecord | null>(null);

  useEffect(() => {
    if (initialBranch) {
      setPreferredBranch(initialBranch);
    }
  }, [initialBranch]);

  useEffect(() => {
    if (initialInterest) {
      setTrainingInterest(initialInterest);
    }
  }, [initialInterest]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = `FS-${Math.floor(100000 + Math.random() * 900000)}`;
    const newBooking: BookingRecord = {
      id: `${Date.now()}`,
      fullName: fullName.trim(),
      mobileNumber: mobileNumber.trim(),
      emailAddress: emailAddress.trim(),
      preferredBranch,
      preferredDate,
      timeWindow,
      trainingInterest,
      createdAt: new Date().toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      passCode: randomCode,
    };
    setSubmittedBooking(newBooking);
    onAddBooking(newBooking);
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFullName('');
    setMobileNumber('');
    setEmailAddress('');
  };

  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full py-space-xl lg:py-space-2xl px-margin-mobile lg:px-margin overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary-container/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute -top-24 right-1/4 w-[300px] h-[300px] bg-surface-container-high/40 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-center mb-space-xl">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high text-primary font-label-caps text-label-caps uppercase tracking-wider mb-space-sm shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
              Immediate Confirmation
            </div>
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface uppercase tracking-tight mb-space-xs">
              BOOK YOUR FREE TRIAL
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">
              Take the first step toward your fitness goals.
            </p>
          </div>

          <div className="w-full max-w-2xl bg-surface-container-low p-space-lg md:p-space-xl rounded-xl shadow-xl">
            <form
              className="flex flex-col gap-space-lg"
              id="trialBookingForm"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-space-xs">
                <label
                  className="font-label-caps text-label-caps uppercase text-on-surface-variant"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-space-md text-secondary text-[20px] pointer-events-none">
                    person
                  </span>
                  <input
                    className="w-full h-11 pl-11 pr-space-md bg-surface-container-lowest text-on-surface placeholder:text-secondary-container font-body-md text-body-md rounded-lg outline-none focus:bg-surface-container transition-colors shadow-inner"
                    id="fullName"
                    placeholder="Marcus Vance"
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    disabled={!!submittedBooking}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-caps text-label-caps uppercase text-on-surface-variant"
                    htmlFor="mobileNumber"
                  >
                    Mobile Number
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-space-md text-secondary text-[20px] pointer-events-none">
                      call
                    </span>
                    <input
                      className="w-full h-11 pl-11 pr-space-md bg-surface-container-lowest text-on-surface placeholder:text-secondary-container font-body-md text-body-md rounded-lg outline-none focus:bg-surface-container transition-colors shadow-inner"
                      id="mobileNumber"
                      placeholder="+91 98765 43210"
                      required
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      disabled={!!submittedBooking}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-caps text-label-caps uppercase text-on-surface-variant"
                    htmlFor="emailAddress"
                  >
                    Email Address
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-space-md text-secondary text-[20px] pointer-events-none">
                      mail
                    </span>
                    <input
                      className="w-full h-11 pl-11 pr-space-md bg-surface-container-lowest text-on-surface placeholder:text-secondary-container font-body-md text-body-md rounded-lg outline-none focus:bg-surface-container transition-colors shadow-inner"
                      id="emailAddress"
                      placeholder="athlete@domain.com"
                      required
                      type="email"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      disabled={!!submittedBooking}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-caps text-label-caps uppercase text-on-surface-variant"
                    htmlFor="preferredBranch"
                  >
                    Preferred Branch
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-space-md text-secondary text-[20px] pointer-events-none">
                      location_on
                    </span>
                    <select
                      className="w-full h-11 pl-11 pr-space-md bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg outline-none focus:bg-surface-container transition-colors shadow-inner appearance-none cursor-pointer"
                      id="preferredBranch"
                      required
                      value={preferredBranch}
                      onChange={(e) =>
                        setPreferredBranch(e.target.value as BranchLocation)
                      }
                      disabled={!!submittedBooking}
                    >
                      <option
                        className="bg-surface-container-low text-on-surface"
                        value="Poonamallee, Chennai"
                      >
                        Poonamallee, Chennai
                      </option>
                      <option
                        className="bg-surface-container-low text-on-surface"
                        value="Vanagaram, Chennai"
                      >
                        Vanagaram, Chennai
                      </option>
                    </select>
                    <span className="material-symbols-outlined absolute right-space-md text-secondary text-[20px] pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-caps text-label-caps uppercase text-on-surface-variant"
                    htmlFor="preferredDate"
                  >
                    Preferred Date
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-space-md text-secondary text-[20px] pointer-events-none">
                      calendar_month
                    </span>
                    <input
                      className="w-full h-11 pl-11 pr-space-md bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg outline-none focus:bg-surface-container transition-colors shadow-inner cursor-pointer [color-scheme:dark]"
                      id="preferredDate"
                      required
                      type="date"
                      min={minDate}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      disabled={!!submittedBooking}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-space-xs">
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                  Preferred Time Window
                </span>
                <div
                  aria-label="Preferred Time"
                  className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm"
                  role="radiogroup"
                >
                  {(
                    [
                      {
                        value: 'Morning (6 AM - 10 AM)',
                        label: 'Morning',
                        sub: '6 AM - 10 AM',
                      },
                      {
                        value: 'Afternoon (11 AM - 4 PM)',
                        label: 'Afternoon',
                        sub: '11 AM - 4 PM',
                      },
                      {
                        value: 'Evening (5 PM - 9 PM)',
                        label: 'Evening',
                        sub: '5 PM - 9 PM',
                      },
                    ] as const
                  ).map((item) => {
                    const isChecked = timeWindow === item.value;
                    return (
                      <label
                        key={item.value}
                        className={`group relative flex flex-col items-center justify-center p-space-sm rounded-lg transition-colors cursor-pointer text-center ${
                          isChecked
                            ? 'bg-primary-container/20 text-primary'
                            : 'bg-surface-container-lowest hover:bg-surface-container-high text-on-surface'
                        }`}
                      >
                        <input
                          checked={isChecked}
                          onChange={() => setTimeWindow(item.value)}
                          disabled={!!submittedBooking}
                          className="sr-only"
                          name="timeWindow"
                          type="radio"
                          value={item.value}
                        />
                        <span className="font-label-caps text-label-caps uppercase">
                          {item.label}
                        </span>
                        <span
                          className={`font-body-sm text-body-sm mt-0.5 ${
                            isChecked ? 'text-on-surface' : 'text-secondary'
                          }`}
                        >
                          {item.sub}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-space-xs">
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                  Training Interest
                </span>
                <div
                  aria-label="Training Interest"
                  className="flex flex-wrap gap-space-sm"
                  role="radiogroup"
                >
                  {(
                    [
                      'Strength Training',
                      'Cardio + Strength',
                      'Personal Training',
                      'Not Sure',
                    ] as const
                  ).map((interest) => {
                    const isChecked = trainingInterest === interest;
                    return (
                      <label
                        key={interest}
                        className={`group flex items-center justify-center px-space-md py-space-sm rounded-full transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-primary-container text-on-primary-container'
                            : 'bg-surface-container-lowest hover:bg-surface-container-high text-on-surface'
                        }`}
                      >
                        <input
                          checked={isChecked}
                          onChange={() => setTrainingInterest(interest)}
                          disabled={!!submittedBooking}
                          className="sr-only"
                          name="trainingInterest"
                          type="radio"
                          value={interest}
                        />
                        <span
                          className={`font-body-sm text-body-sm tracking-wide font-semibold ${
                            isChecked
                              ? 'text-on-primary-container'
                              : 'text-on-surface'
                          }`}
                        >
                          {interest}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="pt-space-sm">
                <button
                  disabled={!!submittedBooking}
                  className={`w-full h-12 bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase tracking-wider rounded-lg shadow-[0_0_24px_-4px_rgba(255,86,37,0.4)] transition-all flex items-center justify-center gap-space-sm ${
                    submittedBooking
                      ? 'opacity-60 cursor-not-allowed'
                      : 'hover:bg-tertiary-container hover:text-on-tertiary-container cursor-pointer active:scale-[0.99]'
                  }`}
                  type="submit"
                >
                  {submittedBooking ? (
                    <>
                      <span>TRIAL RESERVED</span>
                      <span className="material-symbols-outlined text-[20px]">
                        check
                      </span>
                    </>
                  ) : (
                    <>
                      <span>BOOK MY FREE TRIAL</span>
                      <span className="material-symbols-outlined text-[20px]">
                        arrow_forward
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {submittedBooking && (
              <div
                className="mt-space-md p-space-md rounded-lg bg-surface-container-high text-center"
                id="confirmationNotice"
              >
                <div className="w-10 h-10 mx-auto mb-space-xs rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined text-[22px]">
                    check
                  </span>
                </div>
                <p className="font-headline-sm text-headline-sm text-on-surface mb-0.5">
                  Booking Registered!
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Our facility desk will contact you via WhatsApp / Call with
                  your pass ({submittedBooking.passCode}).
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-space-sm inline-flex items-center gap-space-xs text-primary font-label-caps text-label-caps uppercase tracking-wider hover:text-on-surface transition-colors cursor-pointer"
                >
                  <span>Book another trial pass</span>
                  <span className="material-symbols-outlined text-[14px]">
                    refresh
                  </span>
                </button>
              </div>
            )}
          </div>

          <div className="w-full max-w-2xl mt-space-xl bg-surface-container-lowest p-space-lg rounded-xl shadow-md">
            <h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-md">
              What&apos;s included in your trial session:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
              <div className="flex items-start gap-space-sm">
                <div className="w-8 h-8 rounded-lg bg-surface-container-high flex-shrink-0 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    fitness_center
                  </span>
                </div>
                <div>
                  <p className="font-body-md text-body-md font-semibold text-on-surface">
                    1 Full Gym Session
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Complete floor &amp; weight room access
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-space-sm">
                <div className="w-8 h-8 rounded-lg bg-surface-container-high flex-shrink-0 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    vital_signs
                  </span>
                </div>
                <div>
                  <p className="font-body-md text-body-md font-semibold text-on-surface">
                    Fitness Assessment
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Complimentary baseline evaluation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-space-sm">
                <div className="w-8 h-8 rounded-lg bg-surface-container-high flex-shrink-0 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    support_agent
                  </span>
                </div>
                <div>
                  <p className="font-body-md text-body-md font-semibold text-on-surface">
                    1-on-1 Walkthrough
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    With a certified floor trainer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl mt-space-xl grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div
              onClick={() =>
                !submittedBooking &&
                setPreferredBranch('Poonamallee, Chennai')
              }
              className="relative h-44 rounded-xl overflow-hidden shadow-md cursor-pointer group"
            >
              <img
                alt="Moody cinematic interior photo of Fitness Square Poonamallee branch featuring heavy iron dumbbell racks, pristine black rubber flooring, and intense ambient orange strip lighting accentuating clean modern strength training equipment."
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBomVDpWgBEe75NicHHi7OEdeJDS_F6VT_Dz330yoTDDn5fmESUz2zXAm2QeLOh6W4zw-wsfd-uyz27EHr2_Al_dY9XDrI9JWDZF4-ZvtgsCqDmPRtACjtC_At_3NxXxJkb81MIMfOEFUALSF0q7wekkJxhhtKNx3etOV6zeTQyMz6bfmjKwZiCfvoOk3tOb8XsNvRVTMv74VylL9nPMZ55tyPsAW1drWZ8oLolH5IoU0WyPbrHnB8w_A"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent flex flex-col justify-end p-space-md">
                <span className="font-label-caps text-label-caps text-primary uppercase">
                  Branch Facility
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Poonamallee Floor
                </span>
              </div>
            </div>
            <div
              onClick={() =>
                !submittedBooking && setPreferredBranch('Vanagaram, Chennai')
              }
              className="relative h-44 rounded-xl overflow-hidden shadow-md cursor-pointer group"
            >
              <img
                alt="Clean and high-contrast fitness training zone at Fitness Square Vanagaram branch showing state of the art cable stations and Olympic squat racks under sharp focused lighting with an athletic dark aesthetic."
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGv2R8owf7Mv7zXI5r6y_yJW8ym0HmK_Dp_Ue4Ft3vIaTZfadnUKlPgDgcQh7Qp9OV46709aXAte5wCQgK2g7PeClJpQZI5r-LkR_ewVX41B4Buc4v5cQ_d23-K6Ra7ZF0CJW9h1ze4sEiRnbQg5BEjrJUAiCcgorVWE3EUWpgWe5kMr86K20LMDJq2ZpMaax7N0mVvQ9gHVqd-Rd1QXyDGNVhUr6thM4gsI80ls5CLl-H1y2Fh4M35A"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent flex flex-col justify-end p-space-md">
                <span className="font-label-caps text-label-caps text-primary uppercase">
                  Branch Facility
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Vanagaram Floor
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
