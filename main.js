// homework to replace Mission to Mars

// Vehicle class

class Vehicle {
    constructor(name, type){
        this.name = name // string represents the name of the vehicle
        this.type = type // (plane, train, boat, bus)
        this.crew = [] // empty array that will hole a list of crew onbaord the vehicle
    }

    // ready() returns true if the appropriate crew members is onboard 
    ready(){
        this.crew.forEach(function(member) {  
            if((member.job == "Pilot" && member.vehicle.type == "Plane") ||
              (member.job == "Captain" && member.vehicle.type == "Boat"))
            {
              console.log(`The ${member.vehicle.type} is ready to depart!`)
            } else {
              return false
            }
          })
      }
}

// Crewmember class

class CrewMember {
    constructor(name, job){
        this.name = name // name of crew member
        this.job = job // string represents the job of the crewmember (Pilot, Engineer, Driver, Captain)
        this.vehicle = null // start out null, but calling the board method should update it to be the vehcile they are currently in
    }
    
    // this method should add this crewmember to the passed in vehcile list of crew - vehicle.crew
    board(vehicle){
        this.vehicle = vehicle;
        vehicle.crew.push(this);
    }
}

// new vehicles
let plane = new Vehicle("P123", "Plane", "Pilot");
let boat = new Vehicle("USS Texas", "Boat", "Captain");

plane.ready() // should be false still
boat.ready // should be false still

// new crewmembers
let qasim = new CrewMember("Qasim", "Pilot");
let rachel = new CrewMember("Rachel", "Captain");

qasim.board(plane);
rachel.board(boat);

// both vehciles should be ready to board
plane.ready();
boat.ready();