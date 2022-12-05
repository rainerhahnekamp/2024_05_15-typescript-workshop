export interface IFlight {
  from: string;
  to: string;

  log?: () => string;
}
