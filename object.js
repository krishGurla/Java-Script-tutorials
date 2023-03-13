<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Objects in HTML</title>
</head>

<body>
    <h1>Welcomw to Objects  Tutorial in JavaScript</h1>
    <script>
        const car = { type: 'Lambo', model: '2019', Price: '35,000,000' };//creating an object here type,model,price
        console.log("the type of car is " + car.type);
        console.log("the model of car is " + car.model);

        //Best way to declare or create objects

        const house = { // this is a way how different objects are created;
            type: '2BHK',
            model: '1996',
            size: '2000sft',
            Pricing: 'Rs 2000000000',

        };
        console.log("The type of house is " + house.type, "\n", "the model of house is " + house.model);

        //Ojects can be declared in many ways or Different Object Methods
        //One such MEthod is Assigning to Function()


//THIS METHOD IS KNOWN AS OBJECT METHOD
        const person = {
            firstName: "Gurla",
            midleName: "Venkata Sai",
            lastName: "Krish",
            fullName: function(){
                return this.firstName + " " + this.midleName + " " + this.lastName;
            }//Here this means the main object you declared;

        };
        console.log(person.fullName());//tHIS IS HOW OBJECT METHOD IS PRINTED ON CONSOLE

    </script>
</body>

</html>
