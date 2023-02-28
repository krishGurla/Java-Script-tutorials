//Function type 1
        //function cookmaggie(minutes,litres){
          //  console.log('your maggie is ready in'+minutes+'and is ready to eatand is mae using'+litres+'of pani');
        //}
        //cookmaggie(4,3);

        //Function type 2
        let bread1 = prompt('enter the type of bresd you want:');
        let veggies1 = prompt('enter what vegetables you want in your sandwich:');
        let sauce1 = prompt('enter the type of sauce you want in your sandwich:');

        function vegSandwich(bread,veggies,sauce){
            let sandwich = bread + " " +'bread' + " " + veggies + " " + sauce + " " + 'sandwich';
            return sandwich;
        }
        let subwaySandwich = vegSandwich(bread1,veggies1,sauce1);
        console.log(subwaySandwich);
