import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Booking {
    service: string;
    date: string;
    name: string;
    phone: string;
}
export interface backendInterface {
    getAllBookings(): Promise<Array<Booking>>;
    submitBooking(name: string, phone: string, service: string, date: string): Promise<void>;
}
