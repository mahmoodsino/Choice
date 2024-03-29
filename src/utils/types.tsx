//Leagues Types
export interface LeaguesDataTypes {
  fixtures: FixtureDetailsTypes[];
  id: number;
  image: string;
  name: string;
  country: CountryTypes;
  seasons: SeasonsTypes[];
  type: string;
  has_table: boolean;
  current_season: SeasonsTypes;
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

export interface TeamTypes {
  id: number;
  name: string;
  image: string;
}
export interface ScoreType {
  home: number;
  away: number;
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

interface EventsType {
  type: "SUBSTITUTION" | "REDCARD" | "YELLOWCARD" | "GOAL";
  type_text: string;
  subtype: string;
  subtype_text: string;
  player1: string;
  player2: null;
  minute: number;
  extra_minute: number;
  is_injured: boolean;
  team: string;
}

export interface FixtureDetailsTypes {
  id: number;
  events: EventsType[];
  home: TeamTypes;
  away: TeamTypes;
  state:
    | "NS"
    | "INPLAY_1ST_HALF"
    | "HT"
    | "BREAK"
    | "FT"
    | "INPLAY_ET"
    | "AET"
    | "FT_PEN"
    | "INPLAY_PENALTIES"
    | "POSTPONED"
    | "SUSPENDED"
    | "CANCELLED"
    | "TBA"
    | "WO"
    | "ABANDONED"
    | "DELAYED"
    | "AWARDED"
    | "INTERRUPTED"
    | "AWAITING_UPDATES"
    | "DELETED"
    | "EXTRA_TIME_BREAK"
    | "INPLAY_2ND_HALF"
    | "PENDING";
  time: {
    minutes: number;
    seconds: number;
  };
  is_live: boolean;
  starting_at: string;
  league: LeaguesDataTypes;
  score: ScoreType;
  lineups?: LineupsTypes;
  venue: TeamVenueType;
  season_id?: number;
  statistics: StatisticsTypes;
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

export interface TableType {
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

//teams

export interface TrophiesType {
  league_name: string;
  league_image: string;
  winner: string[];
  runnerup: string[];
}

export interface TeamVenueType {
  id: number;
  name: string;
  image: string;
  city_name: string;
  surface: string;
  capacity: number;
  lat: string;
  lng: string;
}

export interface TeamDetailsType {
  id: number;
  name: string;
  image: string;
  short_code: string;
  founded: number;
  country: CountryTypes;
  venue: TeamVenueType;
  league_season: {
    season_id: number;
    season_name: string;
    league_name: string;
    league_image: string;
  }[];
  trophies: TrophiesType[];
}

export interface TeamSquadType {
  id: number;
  name: string;
  short_name: string;
  image: string;
  country: CountryTypes;
  position: "Midfielder" | "Defender" | "Goalkeeper" | "Attacker";
}

//news
export interface EntityType {
  entity_id: number;
  type: string;
  entity_name: string;
  entity_image: string;
}

export interface NewsType {
  category: string[];
  slug: string;
  title: string;
  image: string;
  entities: EntityType[];
}

export interface NewsSlugDetails {
  category: string[];
  slug: string;
  title: string;
  image: string;
  entities: {
    entity_id: number;
    type: string;
    entity_name: string;
    entity_image: string;
  }[];
}

export interface TransfersType {
  id: number;
  player: {
    id: number;
    name: string;
    short_name: string;
    image: string;
    country: CountryTypes;
    position: string;
  };
  to_team: {
    id: number;
    name: string;
    image: string;
  };
  from_team: {
    id: number;
    name: string;
    image: string;
  };
}

//player

export interface PlayerType {
  id: number;
  name: string;
  short_name: string;
  height: number;
  weight: number | null;
  date_of_birth: string;
  gender: "male" | "female";
  image: string;
  country: CountryTypes | null;
  position: string;
  transfers: TransferPlayerType[];
  trophies: TrophiesType[];
}

export interface TransferPlayerType {
  id: number;
  player: {
    id: number;
    name: string;
    short_name: string;
    image: string;
    country: CountryTypes;
    position: string;
  };
  to_team: TeamTypes;
  from_team: TeamTypes;
}
