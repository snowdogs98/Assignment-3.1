 <title> Guess the Number</title>     
    </head>     <body>         <script>         
    var name =prompt("Enter your name" )         
    console.log(' Welcome to Guess the Number, ' + name)                 
    var targetNumber = Math.round(Math.random() * 100)
    console.log(targetNumber)             
    var maxGuess =10, playerGuessCount = 0             
    var guess = parseInt 
    (prompt("Guess the number."))
    //console.log( typeof guess)                         
     if (guess < targetNumber) {                 console.log('Your guess is too low. Try again')             }             
      else if (guess > targetNumber) {                 console.log(' Your guess is too high. Try again!')             } 
      else if( guess == targetNumber) {                 console.log(' Good job, ' + name + '! Your guess is correct!')             } 
    </script>     
    </body> 
    </html>