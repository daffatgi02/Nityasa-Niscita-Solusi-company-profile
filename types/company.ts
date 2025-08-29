// types/company.ts
/**
 * Company-related type definitions
 */

export interface CompanyProfile {
  name: string;
  description: string;
  established: string;
  industry: string;
  specializations: string[];
}

export interface VisionMission {
  vision: string;
  mission: string[];
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface CompanyData {
  profile: CompanyProfile;
  visionMission: VisionMission;
  coreValues: CoreValue[];
  stats?: {
    yearsExperience: number;
    clientsServed: number;
    projectsCompleted: number;
    teamMembers: number;
  };
}