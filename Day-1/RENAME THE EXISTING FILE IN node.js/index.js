const fs = require('fs');
fs.rename('currentFile.txt', 'RenamedFile.txt', (error) => {
  if (error) {
      
    // Show the error 
    console.log(error);
  }
  else {
  
    
    console.log("\nFile Renamed\n");
   
  }
});
