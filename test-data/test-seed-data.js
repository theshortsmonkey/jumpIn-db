
export const testUserData = [
  {
    username: "testUsername1",
    firstName: "testFirstName1",
    lastName: "testLastName1",
    email: "testEmail1",
    password: 'testPassword1',
    phoneNumber: "0123456789",
    bio: "testBio testBio1",
    car: {
      reg: "AB23 AAA",
      make: "testMAke1",
      colour: "testColour1",
      tax_due_date: "2025-01-01",
      fuelType: 'PETROL',
      co2Emissions: 222
    },
    identity_verification_status: false,
    driver_verification_status: true,
    licence_expiry_date: "2027-01-01",
    reports: []
  },
  {
    username: "testUsername2",
    firstName: "testFirstName2",
    lastName: "testLastName2",
    email: "testEmail2",
    password: "testPassword2",
    phoneNumber: "0123456789",
    bio: "testBio testBio2",
    car: {
      reg: "AB23 AAB",
      make: "testMAke2",
      colour: "testColour2",
      tax_due_date: "2025-01-02",
      fuelType: 'DIESEL',
      co2Emissions: 120
    },
    identity_verification_status: true,
    driver_verification_status: false,
    licence_expiry_date: "2027-01-02",
    reports: []
  },
  {
    username: "testUsername3",
    firstName: "testFirstName3",
    lastName: "testLastName3",
    email: "testEmail3",
    password: "testPassword3",
    phoneNumber: "0123456789",
    bio: "testBio testBio3",
    car: {
      reg: "AB23 AAC",
      make: "testMAke3",
      colour: "testColour3",
      tax_due_date: "2025-01-03",
      fuelType: 'PETROL',
      co2Emissions: 300
    },
    identity_verification_status: true,
    driver_verification_status: true,
    licence_expiry_date: "2027-01-03",
    reports: []
  },
  {
    username: "testUsername4",
    firstName: "testFirstName4",
    lastName: "testLastName4",
    email: "testEmail4",
    password: "testPassword4",
    phoneNumber: "0123456789",
    bio: "testBio testBio4",
    car: [],
    identity_verification_status: false,
    driver_verification_status: false,
    licence_expiry_date: "2027-01-04",
    reports: []
  }
]

export const testRideData = [
  {
    to: "Manchester",
    from: "Leeds",
    to_region: "North West",
    from_region: "Yorkshire",
    driver_username: "testUsername1",
    rider_usernames: [
      "testUsername3"
    ],
    jumpin_requests: [
      "testUsername4"
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
        "rider": "testUsername4",
        "driver": "testUsername1",
        "messages": [
          {
            "from": "testUsername4",
            "text": "testUsername4 would like to jumpIn",
            "timeStamp": "2024-05-06T12:51:00.152Z"
          },
        ]
      },
      {
        "rider": "testUsername2",
        "driver": "testUsername1",
        "messages": [
          {
            "from": "testUsername1",
            "text": "Request from testUsername2 rejected",
            "timeStamp": "2024-05-06T13:36:33.240Z"
          }
        ]
      },
      {
        "rider": "testUsername3",
        "driver": "testUsername1",
        "messages": [
          {
            "from": "testUsername1",
            "text": "Request from testUsername3 accepted",
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
    driver_username: "testUsername2",
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
      "rider": "testUsername4",
      "driver": "testUsername2",
      "messages": [
        {
          "from": "testUsername4",
          "text": "testUsername4 would like to jumpIn",
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
    driver_username: "testUsername3",
    rider_usernames: ["testUsername4",],
    jumpin_request: ["testUsername1","testUsername2",],
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
        "rider": "testUsername4",
        "driver": "testUsername3",
        "messages": [
          {
            "from": "testUsername3",
            "text": "Request from testUsername4 accepted",
            "timeStamp": "2024-05-06T13:37:10.395Z"
          }
        ]
      },
      {
        "rider": "testUsername1",
        "driver": "testUsername3",
        "messages": [
          {
            "from": "testUsername1",
            "text": "testUsername1 would like to jumpIn",
            "timeStamp": "2024-05-06T12:51:00.152Z"
          },
        ]
      },
      {
        "rider": "testUsername2",
        "driver": "testUsername3",
        "messages": [
          {
            "from": "testUsername2",
            "text": "testUsername2 would like to jumpIn",
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
    driver_username: "testUsername4",
    rider_usernames: ["testUsername1",],
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
        "rider": "testUsername1",
        "driver": "testUsername4",
        "messages": [
          {
            "from": "testUsername4",
            "text": "Request from testUsername1 accepted",
            "timeStamp": "2024-05-06T13:37:10.395Z"
          }
        ]
      }
    ]
  }   
]

export const testFileNamesArr = [{name:'profile-pic-1.png',username: 'testUsername1'}, {name:'profile-pic-2.png',username: 'testUsername2'}, {name:'profile-pic-3.png',username: 'testUsername3'}, {name:'profile-pic-4.jpeg',username: 'testUsername4'}];