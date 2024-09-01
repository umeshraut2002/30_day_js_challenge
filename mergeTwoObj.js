// merging two objects or more object in single way as output 

const googleDev = {
    employeeName: "Umesh",
    id: "77364",
    groupName: "AI Powred Cloud Platformm",
    salary: 30000
}

const newGoogleFeature = {
    groupSize: 7,
    seniorDevNo: 2,
    internNo: 2,
    teamLead: "Abhishek",
    Manager: "Urvi Goel"
}

// merging an above objects in one way 

const obj = {...googleDev, ...newGoogleFeature};

console.log(obj);

console.log(Object.keys(googleDev));

console.log(googleDev.hasOwnProperty("employeeName"));

