//SORTING FOR STRINGS
        const fruits = ["Banana", "Apple", "Orange"];
        fruits.sort();//Sorts the array
        console.log(fruits);//Array after sorting is displayed

        //SORTING FOR NUMERIC VALUES ; FOR NUMERIC VALUES SORT() CANNOT BE USED
        const number = [40, 0, 25, 34, 56, 67];
        var x = number.sort(function (a, b) {
            return a - b
        });//This function sorts the numeric values depending on comparision method
        //FUNCTION(A,B){RETURN A-B};--> THIS IS KNOWN AS THE COMPARE FUNCTION
        console.log(x);

        //CONSIDER THIS EXAMPLE 
        const batsmanYoyoTest = [20, 8, 23, 4, 15, 9];
        var y = batsmanYoyoTest.sort(function (a, b) { return a - b });
        console.log(y);

        //SORTING NUMBERS RANDOMLY USING FISHER YATES METHOD(SHUFFLING ARRAY)
        const points = [4,10,20,30];
        function myFunction(){
            for(let i = points.length-1; i>0; i--){
                let j = Math.floor(Math.random() * (i+1));
                let k = points[i];
                points[i] = points[j];
                points[j] = k;
            }
            console.log(points);
        };
        myFunction(points); 

        


