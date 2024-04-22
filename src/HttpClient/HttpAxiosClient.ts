import { Delivery, NewDelivery } from "@/types";
import { HttpClient } from "./types";
import axios from "axios";

export class HttpAxiosClient implements HttpClient {
  constructor() {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
  }

  async getDeliveries(): Promise<Delivery[]> {
    const { data } = await axios.get<{ deliveries: Delivery[] }>("deliveries");

    return data.deliveries;
  }

  deleteDelivery(
    deliveryId: number,
    owner: string,
    week: number
  ): Promise<void> {
    throw new Error("Method not implemented");
  }

  async createDelivery(newDelivery: NewDelivery): Promise<Delivery> {
    const { data } = await axios.post<{ delivery: Delivery }>(
      "deliveries",
      newDelivery
    );

    return data.delivery;
  }
}
