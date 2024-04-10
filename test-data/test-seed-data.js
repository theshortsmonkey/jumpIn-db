export const testUserData = [
  {
    username: "testUSername1",
    firstName: "testFirstName1",
    lastName: "testLastName1",
    email: "testEmail1",
    password: "testPassword1",
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
  },
  {
    username: "testUSername2",
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
  },
  {
    username: "testUSername3",
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
  },
  {
    username: "testUSername4",
    firstName: "testFirstName4",
    lastName: "testLastName4",
    email: "testEmail4",
    password: "testPassword4",
    phoneNumber: "0123456789",
    bio: "testBio testBio4",
    car: null,
    identity_verification_status: false,
    driver_verification_status: false,
    licence_expiry_date: "2027-01-04",
  }
]

export const testRideData = [
  {
    to: "Manchester",
    from: "Leeds",
    to_region: "Manchester",
    from_region: "Leeds",
    driver_username: "testUsername1",
    rider_usernames: ["testUsername2",],
    available_seats: 1,
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
  },
  {
    to: "Manchester",
    from: "Birmingham",
    to_region: "Manchester",
    from_region: "Birmingham",
    driver_username: "testUsername2",
    rider_usernames: ["testUsername3",],
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
  },
  {
    to: "Manchester",
    from: "London",
    to_region: "Manchester",
    from_region: "London",
    driver_username: "testUsername3",
    rider_usernames: ["testUsername4",],
    available_seats: 1,
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
  },
  {
    to: "Manchester",
    from: "Edinburgh",
    to_region: "Manchester",
    from_region: "Edinburgh",
    driver_username: "testUsername4",
    rider_usernames: ["testUsername1",],
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
  }   
]

export const testFileNamesArr = [{name:'profile-pic-1.png',username: 'testUSername1'}, {name:'profile-pic-2.png',username: 'testUSername2'}, {name:'profile-pic-3.png',username: 'testUSername3'}, {name:'profile-pic-4.jpeg',username: 'testUSername4'}];