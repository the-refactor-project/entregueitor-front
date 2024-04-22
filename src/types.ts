export interface Student {
  id: number;
  name: string;
}

export interface Delivery {
  id: number;
  owner: string;
  week: number;
  frontRepoUrl: string;
  frontProductionUrl: string;
  backRepoUrl: string;
  backProductionUrl: string;
  sprint1TrelloUrl: string;
  sprint2TrelloUrl: string;
  firstTeammateName: string;
  secondTeammateName: string;
}

export type NewDelivery = Omit<Delivery, "id">;
