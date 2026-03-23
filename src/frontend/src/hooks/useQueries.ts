import { useMutation, useQuery } from "@tanstack/react-query";
import type { Booking } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllBookings() {
  const { actor, isFetching } = useActor();
  return useQuery<Booking[]>({
    queryKey: ["bookings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBookings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitBooking() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      service: string;
      date: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitBooking(
        data.name,
        data.phone,
        data.service,
        data.date,
      );
    },
  });
}
