//FOR IN LOOPS FOR  OBJECTS 
        //nATURAL SYNTAX: for(key in object)
        const object = {
            type: "Krish",
            Gender:"Male",
            Profession:"Student",//defining your object
        };
        let txt = " ";
        for(x in object){   //for in loop
            txt+=object[x] + " ";
        };
        console.log(txt);

        //FOR IN LOOPS FOR ARRAYS
        const array = [45,34,23,12];
        let y = " ";
        for(z in array){
            y+=array[z] + " ";
        };
        console.log(y);

        //ARRAY SORT
        const cskTeam = ["Ruturaj","MSD","Rvindra Jadeja"];
        let v = cskTeam.sort();
        console.log(v);
