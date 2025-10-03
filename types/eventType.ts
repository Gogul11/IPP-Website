export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;        // could also be Date if you parse it
  time: string;        // keep as string if you’re displaying only
  members: number;
  location: string;
  prizePool: string;
  inChargeName: string;
  inChargeNumber: string;
  category: string;
}
