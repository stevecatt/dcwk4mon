let array = [2,3,4,7,5,444,3,2,99,0,]



  
    for (let i = 0; i < array.length; i++) { 
     
        for (let j = 0; j < (array.length - i - 1); j++) { 
       
            if(array[j] > array[j+1]) {
                
                let tmp = array[j];  
                array[j] = array[j+1]; 
                array[j+1] = tmp; 
            }
        }        
    }

  console.log(array) 
  console.log("largest number is  " + array[array.length-1])
  console.log("Smallest number is  " + array[0])