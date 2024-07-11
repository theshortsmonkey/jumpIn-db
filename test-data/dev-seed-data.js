export const devUserData = [
  {
    username: "user1",
    firstName: "User",
    lastName: "A",
    email: "user1@123.com",
    password: "User123!",
    phoneNumber: "0123456789",
    bio: "I am User1",
    car: {
      reg: "UA12 AAA",
      make: "Make1",
      colour: "Colour1",
      tax_due_date: "2025-01-01",
      fuelType: 'PETROL',
      co2Emissions: 300
    },
    identity_verification_status: false,
    driver_verification_status: true,
    licence_expiry_date: "",
    reports: []
  },
  {
    username: "user2",
    firstName: "User",
    lastName: "B",
    email: "user2@123.com",
    password: "User234!",
    phoneNumber: "0123456789",
    bio: "I am User2",
    car: {
      reg: "UC12 AAA",
      make: "Make3",
      colour: "Colour3",
      tax_due_date: "2025-01-03",
      fuelType: 'DIESEL',
      co2Emissions: 150
    },
    identity_verification_status: true,
    driver_verification_status: true,
    licence_expiry_date: "2027-01-02",
    reports: {
      reported_user: 'user1',
      report_history: [
        {
          text: 'Reporting user 1',
          timeStamp: '2024-04-01 12:15'
        }
      ]
    }
  },
  {
    username: "user3",
    firstName: "User",
    lastName: "C",
    email: "user3@123.com",
    password: "User345!",
    phoneNumber: "0123456789",
    bio: "I am User3",
    car: [],
    identity_verification_status: true,
    driver_verification_status: false,
    licence_expiry_date: "2027-01-03",
    reports: []
  },
  {
    username: "user4",
    firstName: "User",
    lastName: "D",
    email: "user4@123.com",
    password: "User456!",
    phoneNumber: "0123456789",
    bio: "I am User4",
    car: [],
    identity_verification_status: false,
    driver_verification_status: false,
    licence_expiry_date: "",
    reports: {
      reported_user: 'user3',
      report_history: [
        {
          text: 'Reporting user 3',
          timeStamp: '2024-04-04 10:25'
        }
      ]
    }
  }
]

export const devRideData = [
  {
    to: "Manchester",
    from: "Leeds",
    to_region: "North West",
    from_region: "Yorkshire",
    driver_username: "user1",
    rider_usernames: [
      "user3"
    ],
    jumpin_requests: [
      "user4"
    ],
    "available_seats": 2,
    carbon_emissions: 122,
    distance: 330,
    price: 1000,
    map: {
      properties: {
        fillcolor: "rgb(33,67,11)",
        fillopacity: 0.4,
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [35, 10],
            [45, 45],
            [15, 40],
            [10, 20],
            [35, 10],
          ],
          [
            [20, 30],
            [35, 35],
            [30, 20],
            [20, 30],
          ],
        ],
      },
      type: "Feature",
    },
    driver_rating: 2,
    rider_rating: 5,
    date_and_time: Date.now(),
    chats: [
      {
        "rider": "user4",
        "driver": "user1",
        "messages": [
          {
            "from": "user4",
            "text": "user4 would like to jumpIn",
            "timeStamp": "2024-05-06T12:51:00.152Z"
          },
        ]
      },
      {
        "rider": "user2",
        "driver": "user1",
        "messages": [
          {
            "from": "user1",
            "text": "Request from user2 rejected",
            "timeStamp": "2024-05-06T13:36:33.240Z"
          }
        ]
      },
      {
        "rider": "user3",
        "driver": "user1",
        "messages": [
          {
            "from": "user1",
            "text": "Request from user3 accepted",
            "timeStamp": "2024-05-06T13:37:10.395Z"
          }
        ]
      }
    ]
  },
  {
    to: "Manchester",
    from: "Birmingham",
    to_region: "North West",
    from_region: "Midlands",
    driver_username: "user2",
    rider_usernames: [],
    jumpin_request: [],
    available_seats: 1,
    carbon_emissions: 250,
    distance: 200,
    price: 5000,
    map: {
      properties: {
        fillcolor: "rgb(33,67,11)",
        fillopacity: 0.4,
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [35, 10],
            [45, 45],
            [15, 40],
            [10, 20],
            [35, 10],
          ],
          [
            [20, 30],
            [35, 35],
            [30, 20],
            [20, 30],
          ],
        ],
      },
      type: "Feature",
    },
    driver_rating: 4,
    rider_rating: 4,
    date_and_time: Date.now(),
    chats: [
    {
      "rider": "user4",
      "driver": "user2",
      "messages": [
        {
          "from": "user4",
          "text": "user4 would like to jumpIn",
          "timeStamp": "2024-05-06T12:51:00.152Z"
        },
      ]
    },
  ],
  },
  {
    to: "Manchester",
    from: "London",
    to_region: "North West",
    from_region: "South",
    driver_username: "user3",
    rider_usernames: ["user4",],
    jumpin_request: ["user1","user2",],
    available_seats: 3,
    carbon_emissions: 360,
    distance: 400,
    price: 4000,
    map: {
      properties: {
        fillcolor: "rgb(33,67,11)",
        fillopacity: 0.4,
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [35, 10],
            [45, 45],
            [15, 40],
            [10, 20],
            [35, 10],
          ],
          [
            [20, 30],
            [35, 35],
            [30, 20],
            [20, 30],
          ],
        ],
      },
      type: "Feature",
    },
    driver_rating: 5,
    rider_rating: 4,
    date_and_time: Date.now(),
    chats: [
      {
        "rider": "user4",
        "driver": "user3",
        "messages": [
          {
            "from": "user3",
            "text": "Request from user4 accepted",
            "timeStamp": "2024-05-06T13:37:10.395Z"
          }
        ]
      },
      {
        "rider": "user1",
        "driver": "user3",
        "messages": [
          {
            "from": "user1",
            "text": "user1 would like to jumpIn",
            "timeStamp": "2024-05-06T12:51:00.152Z"
          },
        ]
      },
      {
        "rider": "user2",
        "driver": "user3",
        "messages": [
          {
            "from": "user2",
            "text": "user2 would like to jumpIn",
            "timeStamp": "2024-05-06T12:51:00.152Z"
          },
        ]
      },
    ]
  },
  {
    to: "Manchester",
    from: "Edinburgh",
    to_region: "North West",
    from_region: "Scotland",
    driver_username: "user4",
    rider_usernames: ["user1",],
    jumpin_request: [],
    available_seats: 1,
    carbon_emissions: 400,
    distance: 200,
    price: 2000,
    map: {
      properties: {
        fillcolor: "rgb(33,67,11)",
        fillopacity: 0.4,
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [35, 10],
            [45, 45],
            [15, 40],
            [10, 20],
            [35, 10],
          ],
          [
            [20, 30],
            [35, 35],
            [30, 20],
            [20, 30],
          ],
        ],
      },
      type: "Feature",
    },
    driver_rating: 3,
    rider_rating: 4,
    date_and_time: Date.now(),
    chats: [
      {
        "rider": "user1",
        "driver": "user4",
        "messages": [
          {
            "from": "user4",
            "text": "Request from user1 accepted",
            "timeStamp": "2024-05-06T13:37:10.395Z"
          }
        ]
      }
    ]
  }   
]

export const devFileNamesArr =  [{name:'profile-pic-1.png',username: 'user1'}, {name:'profile-pic-2.png',username: 'user2'}, {name:'profile-pic-3.png',username: 'user3'}, {name:'profile-pic-4.jpeg',username: 'user4'}];