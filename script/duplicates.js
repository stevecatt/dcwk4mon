let names= ["john","mary","alex","steve","mary","john","alex"]


let unique_array = []
    for(let i = 0;i < names.length; i++){
        if(unique_array.indexOf(names[i]) == -1){
            unique_array.push(names[i])
        }
    }
    


console.log(unique_array); 