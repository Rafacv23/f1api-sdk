import { BaseApiResponse } from "types/F1Api"

interface Race {
  raceId: string
  championshipId: string
  raceName: string
  schedule: {
    race: {
      date: string
      time: string
    }
    qualy: {
      date: string
      time: string
    }
    fp1: {
      date: string
      time: string
    }
    fp2: {
      date: string
      time: string
    } | null
    fp3: {
      date: string
      time: string
    } | null
    sprintQualy: {
      date: string
      time: string
    } | null
    sprintRace: {
      date: string
      time: string
    } | null
  }
  laps: number
  round: number
  url: string
  fast_lap: {
    fast_lap: string
    fast_lap_driver_id: string
    fast_lap_team_id: string
  }
  circuit: {
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
  winner: {
    driverId: string
    name: string
    surname: string
    country: string
    birthday: string
    number: number | null
    shortName: string | null
    url: string
  } | null
  teamWinner: {
    teamId: string
    teamName: string
    country: string
    firstAppeareance: number
    constructorsChampionships: number | null
    driversChampionships: number | null
    url: string
  }
}

export interface RacesApiResponse extends BaseApiResponse {
  season: string | number
  championship: {
    championshipId: string
    championshipName: string
    url: string
    year: number
  }
  races: Race[]
}

export interface RaceApiResponse extends BaseApiResponse {
  season: string | number
  championship: {
    championshipId: string
    championshipName: string
    url: string
    year: number
  }
  race: Race[]
}
