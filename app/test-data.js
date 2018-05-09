const data = {
  "staff" : [
    {
      "name": "Andrews Simon",
      "availability": [
        [1525932000000, 1525946400000],
        [1525953600000, 1525975200000],
      ],
      "bookings": [{
        "status": "start",
        "timeSlot": [1525939200000, 1525939800000],
      }, {
        "status": "booked",
        "timeSlot": [1525939800000, 1525946400000],
      }],
    }
  ],
  "status": {
    "free": {
      "color": "#ffffff",
      "name": "Free",
    },
    "start": {
      "color": "#ffffaa",
      "name": "Start",
    },
    "booked": {
      "color": "#ffaaff",
      "name": "Booked",
    },
    "clash": {
      "color": "#aaaaff",
      "name": "Clash",
    },
    "available": {
      "color": "#ffaaaa",
      "name": "Available",
    },
    "holiday": {
      "color": "#aaffaa",
      "name": "Holiday",
    },
    "sick": {
      "color": "#aaffcc",
      "name": "Sick",
    },
    "training": {
      "color": "#ccffaa",
      "name": "Training",
    },
    "other": {
      "color": "#ffccaa",
      "name": "Other",
    },
  }
};
