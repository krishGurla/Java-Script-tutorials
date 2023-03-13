//CREATING AN ARRAY
        const cricketers = ['MSD', 'VK', 'RJ'];
        console.log(cricketers);

        //FINDING THE LENGTH OF THE ARRAY
        const cskBatsman = ["MSDhoni", "Ruturaj Gaikwad", "Ajinkya Rahane"];
        console.log(cskBatsman.length);

        //ACCESSING THE FIRST ELEMENT IN THE ARRAY
        const cskBating = ["MSDhoni", "Ruturaj Gaikwad", "Ajinkya Rahane"];
        console.log(cskBating[0]);//first elemt of array appears in the  console output

        //ACCESSING THE LAST ELEMENT OF THE ARRAY(*IMPORTANT AND CONFUSING CASE)
        //basically the last element can be calculated by first finding out the length of the array and minusing out the last element
        const batsman = ["MS Dhoni", "rj", "VK", "Ruturaj Gaikwad"];
        console.log(batsman[batsman.length - 1]);

        //ADDING AN ELEMENT TO THE ARRAY: "push()" is used
        const batter = ["MS Dhoni", "rj", "VK", "Ruturaj Gaikwad"];
        console.log(batter.push("Ravindra Jadeja"));//therefore the new lwngth of array becomes 5
        console.log(batter);

        //CONVERTING ARRAYS TO STRING
        const fruits = ["Apple", "Banana", "Orange"];
        console.log(fruits);//Displaying Array, 
        console.log(fruits.toString());//Displaying String(ARRAY CONVERTED TO STRING)

        //PUSH() AND POP() FUNCTIONS IN ARRAYS IN JAVASCRIPT
        const vegetables = ["Carrot", "Beetroot", "Onion", "Potato"];
        console.log(vegetables);//Array before popping
        vegetables.pop();//pop() function executed
        console.log(vegetables);//Array after last element gets pooped

        const team = ["MI", "CSK", "RR", "KKR"];
        console.log(team);//Array before element is pushed
        team.push("RCB");//push() function executed
        console.log(team);//Array after  element gets pushed
        //SHIFT() IS ALSO SIMILAR TO POP() FUNCTION BUT INSTEAD OF LAST ELEMENT GETTING POPPED; FIRST ELEMENT GETS POPPED
        team.shift();
        console.log(team);//MI gets removed

        //UNSHIFT() IS ALSO SIMILAR TO PUSH() FUNCTION BUT INSTEAD OF ELEMRNT GETTING ADDED AT LAST PLACE ; ELEMENT IS ADDED AT FIRST PLACE
        team.unshift("DC");
        console.log(team);//DC gets added at the first

        //MERGING OR CONCATING THE ARRAYS
        const tiffins = ["Idli", "Dosa"];
        const chutnees = ["Maggie", "Sambhar"];
        const breakfast = tiffins.concat(chutnees);
        console.log(breakfast);

        //MERGING THREE ARRAYS
        const bat = ["Ruturaj Gaikwad", "Shivam Dube", "MS Dhoni"];
        const bowl = ["Deepak Chahar", "Mukesh Chowdhary", "Ravindra Jadeja"];
        const allRounder = ["Nidhant Sindhu", "Shaik Rashid", "Dwayne Pretorius"];
        var x = bat.concat(bowl, allRounder);
        console.log(x);

        //SPLICE() AND SLICE() PARAMETERS IN JAVASCRIPT ARRAYS
        const fruit = ["Banana", "Orange", "Apple", "Mango"];
         var y = fruit.splice(2, 2, "Lemon", "Kiwi");//HERE FIRST INDEX INDICATES WHERE TO BE ADDED AND SECOND INDEX INDICATES HOW MANY ELEMENTS TO BE REMOVED

         console.log(y);//HERE WE GET TO SEE THE ELEMENTS GETTING REMOVED;
         
         console.log(fruit);
         var z = fruit.slice(1);// index 1 element gets removed that is the function of slice
         console.log(z);
         
