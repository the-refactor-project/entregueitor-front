import { Delivery, NewDelivery } from "@/types";

export interface HttpClient {
  getDeliveries: () => Promise<Delivery[]>;
  deleteDelivery: (owner: string, week: number) => Promise<void>;
  createDelivery: (newDelivery: NewDelivery) => Promise<Delivery>;
}
