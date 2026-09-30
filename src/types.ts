export type PagePath = 'home' | 'about' | 'membership' | 'book-a-free-trial';

export type BillingPeriod = 'monthly' | '2months' | '6months' | '12months';

export type BranchLocation = 'Poonamallee, Chennai' | 'Vanagaram, Chennai';

export type TimeWindow =
  | 'Morning (6 AM - 10 AM)'
  | 'Afternoon (11 AM - 4 PM)'
  | 'Evening (5 PM - 9 PM)';

export type TrainingInterest =
  | 'Strength Training'
  | 'Cardio + Strength'
  | 'Personal Training'
  | 'Not Sure';

export interface BookingRecord {
  id: string;
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  preferredBranch: BranchLocation;
  preferredDate: string;
  timeWindow: TimeWindow;
  trainingInterest: TrainingInterest;
  createdAt: string;
  passCode: string;
}
