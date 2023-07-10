//Leagues Types
export interface LeaguesDataTypes {
  fixtures: null;
  id: number;
  image: string;
  name: string;
  country: CountryTypes;
  seasons: SeasonsTypes[];
  type: string;
  has_table: boolean;
}

export interface LeaguesTypes {
  current_page: number;
  data: LeaguesDataTypes[];
  has_more: boolean;
  message: string;
  pagination: boolean;
  per_page: number;
  success: boolean;
}

export interface CountryTypes {
  id: number;
  image: string;
  name: string;
}

export interface SeasonsTypes {
  id: number;
  name: string;
}

//matches type

export interface MatchesDataType {
  message: string;
  pagination: boolean;
  per_page: number;
  current_page: number;
  has_more: boolean;
  data: MatchesType[];
  success: boolean;
}

export interface MatchesType {
  id: number;
  name: string;
  image: string;
  country: CountryTypes;
  fixtures: FixturesType[];
}

export interface TeamTypes {
  id: number;
  name: string;
  image: string;
}
export interface ScoreType {
  home: number;
  away: number;
}

export interface FixturesType {
  id: number;
  home: TeamTypes;
  away: TeamTypes;
  state: string;
  time: number;
  starting_at: string;
  score: ScoreType;
}

//Fixture types

export interface PlayerTypes {
  id: number;
  name: string;
  short_name: string;
  image: string;
}

export interface TeamLineupsTypes {
  field: PlayerTypes[][];
  bench: PlayerTypes[];
  coach: PlayerTypes;
}

export interface LineupsTypes {
  home: TeamLineupsTypes;
  away: TeamLineupsTypes;
}

export interface FixtureDetailsTypes {
  id: number;
  home: TeamTypes;
  away: TeamTypes;
  state: string;
  time: string;
  starting_at: string;
  league: LeaguesDataTypes;
  score: ScoreType;
  lineups?: LineupsTypes;
  season_id?: number;
  statistics:StatisticsTypes
}

export interface FixtureDetailsDataTypes {
  message: string;
  pagination: boolean;
  success: boolean;
  data: FixtureDetailsTypes;
}

//H2h Types

export interface StatisticsTypesH2H {
  count: number;
  percentage: number;
}

export interface H2HDataTypes {
  success: boolean;
  data: H2HTypes;
  message: string;
  pagination: boolean;
}

export interface H2HTypes {
  win: StatisticsTypesH2H;
  draw: StatisticsTypesH2H;
  lose: StatisticsTypesH2H;
  fixtures: FixtureDetailsTypes[];
}

//table

export interface TableData {
  success: string;
  data: Table;
  message: string;
  pagination: boolean;
}

export interface Table {
  overall: TableTrType[];
  home: TableTrType[];
  away: TableTrType[];
}

export interface TableTrType {
  result: string;
  details: TableTrDetails;
  team: TeamTypes;
}

export interface TableTrDetails {
  played_matches: number;
  wins: number;
  draw: number;
  lost: number;
  scored: number;
  conceded: number;
  difference: number;
  points: number;
}

//statistics

export interface PossessionType {
  away: string;
  home: string;
}

export interface StatisticsInfoType {
  away: number;
  home: number;
  text: string;
}

export interface StatisticsTypes {
  all: StatisticsInfoType[];
  possession: PossessionType;
}
