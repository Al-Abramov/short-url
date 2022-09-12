export interface StatisticsState {
  info: StatisticsInfo[];
  limit: number;
  currentShort: string;
  isLoading: boolean;
  offset: number;
  total: number;
  page: number;
}

export interface StatisticsInfo {
  id: number;
  short: string;
  target: string;
  counter: number;
}

export interface StatsticsData {
  order: string;
  offset: number;
  limit: number;
}
