import { BaseApiResponse } from "types/F1Api"

interface Fp1Results {
  fp1Id: number
  driverId: string
  teamId: string
  time: string
  driver: Driver
  team: Team
}

interface Fp2Results {
  fp2Id: number
  driverId: string
  teamId: string
  time: string
  driver: Driver
  team: Team
}

interface Fp3Results {
  fp3Id: number
  driverId: string
  teamId: string
  time: string
  driver: Driver
  team: Team
}

interface QualyResults {
  classificationId: number
  driverId: string
  teamId: string
  q1: string
  q2: string
  q3: string
  gridPosition: number
  driver: Driver
  team: Team
}

interface RaceResults {
  position: number
  points: number
  grid: number
  time: string
  fastLap: string | null
  retired: boolean | null
  driver: Driver
  team: Team
}

interface SprintQualyResults {
  sprintQualyId: number
  driverId: string
  teamId: string
  sq1: string
  sq2: string
  sq3: string
  gridPosition: number
  driver: Driver
  team: Team
}

interface SprintRaceResults {
  sprintRaceId: number
  driverId: string
  teamId: string
  position: number
  points: number
  gridPosition: number
  driver: Driver
  team: Team
}

interface Driver {
  driverId: string
  name: string
  surname: string
  nationality: string
  number: number
  shortName: string
  birthday: string
  url: string
}

interface Team {
  teamId: string
  teamName: string
  firstAppareance: number
  constructorsChampionships: number | null
  driversChampionships: number | null
  url: string
}

interface Circuit {
  circuitId: string
  circuitName: string
  country: string
  city: string
  circuitLength: string
  lapRecord: string
  firstParticipationYear: number
  corners: number
  fastestLapDriverId: string
  fastestLapTeamId: string
  fastestLapYear: number
  url: string
}

export interface Fp1ResultsApiResponse extends BaseApiResponse {
  season: string | number
  races: {
    round: string | number
    fp1Date: string
    fp1Time: string
    url: string
    raceId: string
    raceName: string
    circuit: Circuit
    fp1Results: Fp1Results[]
  }
}

export interface Fp2ResultsApiResponse extends BaseApiResponse {
  season: string | number
  races: {
    round: string | number
    fp2Date: string
    fp2Time: string
    url: string
    raceId: string
    raceName: string
    circuit: Circuit
    fp2Results: Fp2Results[]
  }
}

export interface Fp3ResultsApiResponse extends BaseApiResponse {
  season: string | number
  races: {
    round: string | number
    fp3Date: string
    fp3Time: string
    url: string
    raceId: string
    raceName: string
    circuit: Circuit
    fp3Results: Fp3Results[]
  }
}

export interface QualyResultsApiResponse extends BaseApiResponse {
  season: string | number
  races: {
    round: string | number
    qualyDate: string
    qualyTime: string
    url: string
    raceId: string
    raceName: string
    circuit: Circuit
    qualyResults: QualyResults[]
  }
}

export interface RaceResultsApiResponse extends BaseApiResponse {
  season: string | number
  races: {
    round: string | number
    date: string
    time: string
    url: string
    raceId: string
    raceName: string
    circuit: Circuit
    results: RaceResults[]
  }
}

export interface SprintQualyResultsApiResponse extends BaseApiResponse {
  season: string | number
  races: {
    round: string | number
    date: string
    time: string
    url: string
    raceId: string
    raceName: string
    circuit: Circuit
    sprintQualyResults: SprintQualyResults[]
  }
}

export interface SprintRaceResultsApiResponse extends BaseApiResponse {
  season: string | number
  races: {
    round: string | number
    date: string
    time: string
    url: string
    raceId: string
    raceName: string
    circuit: Circuit
    sprintRaceResults: SprintRaceResults[]
  }
}
