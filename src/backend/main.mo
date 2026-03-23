import Text "mo:core/Text";
import List "mo:core/List";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Order "mo:core/Order";
import Nat "mo:core/Nat";

actor {
  type Booking = {
    name : Text;
    phone : Text;
    service : Text;
    date : Text;
  };

  module Booking {
    public func compare(booking1 : Booking, booking2 : Booking) : Order.Order {
      switch (Text.compare(booking1.date, booking2.date)) {
        case (#equal) { Text.compare(booking1.name, booking2.name) };
        case (order) { order };
      };
    };
  };

  let bookings = Map.empty<Nat, Booking>();
  var autoIncrementBookingId = 0;

  func getNextBookingId() : Nat {
    autoIncrementBookingId += 1;
    autoIncrementBookingId;
  };

  public shared ({ caller }) func submitBooking(name : Text, phone : Text, service : Text, date : Text) : async () {
    if (name.isEmpty() or service.isEmpty()) { Runtime.trap("Name and service cannot be empty") };
    let booking : Booking = {
      name;
      phone;
      service;
      date;
    };
    let bookingId = getNextBookingId();
    bookings.add(bookingId, booking);
  };

  public query ({ caller }) func getAllBookings() : async [Booking] {
    bookings.values().toArray().sort();
  };
};
