// This is a function to detect speeding and issue demerit points
function speedDetector(speed) {
    // Set a constant for the speed limit
    const speedLimit = 70;
    // Set a constant for the demerit points received per km/ph over the speed limit
    const pointsPerDemerit = 5;
    // Set the initial demerit points to zero
    let demeritPoints = 0;
  
    // Check if the speed is within the limit plus the points per demerit. If it is, print "Ok"
    if (speed < speedLimit + pointsPerDemerit) {
      console.log('Ok');
    } else {
      // Calculate the number of demerit points received
        demeritPoints = Math.floor((speed - speedLimit) / pointsPerDemerit);
      console.log(`Points: ${demeritPoints}`);
  
      // If the number of demerit points is greater than or equal to 12, print "License suspended"
      if (demeritPoints >= 12) {
        console.log('License suspended');
      }
    }
  } 
  // Call the function 
  speedDetector(200); // Output: "Points: 2"
  