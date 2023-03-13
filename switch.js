<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Switch Statement and structures</h1>
    <script>
        var fruitType = prompt('which fruit do you want:');
        switch (fruitType) {
            case 'apple':
                console.log('A dozen of apple costs 70 rupees');
                break;

            case 'banana':
                console.log('A sozen of bananas costs 100 rupees');
                break;

            default:
                console.log(`${fruitType} Fruit not available`);


        }
        console.log('enough of coding now go to sleep');

    </script>
</body>

</html>
