//Starts the game by clearing squares and setting variabbles
		function startGame() {
		
            //Clears each square in the board
			for (var i = 1; i <= 9; i = i + 1) {
				clearBox(i);
			}
            
            //50/50 chance for who goes first
			if (Math.random() < 0.5) {
				document.turn = "O";
			}else{
                document.turn = "X";
            }
            
            //Setting all variables equal to null, these variables correspond to each tic tac toe board and who won each; etc: winner1 = "X" means x won board #1
			document.winner1 = document.winner2 = document.winner3 = document.winner4 =document.winner5 =document.winner6 =document.winner7 = document.winner8 = document.winner9 = null;
            
            //Sets the message to tell the user which player goes first
			setMessage(document.turn + " you get to go first!");
		}
		
        //Sets the message to whatever is passed to it
		function setMessage(msg) {
			document.getElementById("message").innerText = msg;
		}
		
        //Called when a square is clicked by user, data passed is the square itself and which table it came from
		function nextMove(square) {
            if (square.innerText == "") {
                    square.innerText = document.turn;
                    switchTurn();
                } else {
                    setMessage("That square is already used.");
                }
		}
            
        
		//If there is 3 in a row and no winner for the table has been decalred, then winner is set for that table
		function switchTurn() {
			if (checkForWinner(document.turn, 1) && document.winner1 == null) {
                document.winner1 = document.turn;//Sets the winner for that table to either 'x' or 'o'
                drawShape(1, document.winner1);//Draws an 'x' or 'o' in every square in that table for the winner
                
			}else if(checkForWinner(document.turn, 2) && document.winner2 == null){
                document.winner2 = document.turn;
                drawShape(2, document.winner2);
                
            }else if(checkForWinner(document.turn, 3) && document.winner3 == null){
                document.winner3 = document.turn; 
                drawShape(3, document.winner3);
                
            }else if(checkForWinner(document.turn, 4) && document.winner4 == null){
                document.winner4 = document.turn; 
                drawShape(4, document.winner4);
                
            }else if(checkForWinner(document.turn, 5) && document.winner5 == null){
                document.winner5 = document.turn; 
                drawShape(5, document.winner5);
                
            }else if(checkForWinner(document.turn, 6) && document.winner6 == null){
                document.winner6 = document.turn; 
                drawShape(6, document.winner6);
                
            }else if(checkForWinner(document.turn, 7) && document.winner7 == null){
                document.winner7 = document.turn; 
                drawShape(7, document.winner7);
                
            }else if(checkForWinner(document.turn, 8) && document.winner8 == null){
                document.winner8 = document.turn;
                drawShape(8, document.winner8);
                
            }else if(checkForWinner(document.turn, 9) && document.winner9 == null){
                document.winner9 = document.turn; 
                drawShape(9, document.winner9);
            }
            
            //This check for three games won in a row, end of game if true
            if(checkForBigWinner(document.turn)){
                setMessage(document.turn + " wins the game!");
                document.getElementById("message").style.fontSize = "xx-large";
            }else{
                //No winner has been found so switch turns and wait for next move by user
                if(document.turn == "X") {
                    document.turn = "O";
                    setMessage("It's " + document.turn + "'s turn!");
                }else {
                    document.turn = "X";
                    setMessage("It's " + document.turn + "'s turn!");
                }
            }
        }
		//This checks for a winner in the tic tac toe boards
		function checkForWinner(move, num) {
			var result = false;
            //Below are all possible outcomes for three in a row
			if (checkRow(1, 2, 3, move, num) || 
				checkRow(4, 5, 6, move, num) ||
				checkRow(7, 8, 9, move, num) || 
				checkRow(1, 4, 7, move, num) ||
				checkRow(2, 5, 8, move, num) ||
				checkRow(3, 6, 9, move, num) ||
				checkRow(1, 5, 9, move, num) ||
				checkRow(3, 5, 7, move, num)) {
				
				result = true;//There is a three in a row
			}
			return result;//No three in a row, so return false
		}
		
        //Gets the value of each square in a row, called in checkForWinner() 9 times
		function checkRow(a, b, c, move, num) {
			var result = false;
            //Calls getBox() to get the value of the square
			if (getBox(a, num) == move && getBox(b, num) == move && getBox(c, num) == move) {
				result = true;//There is a three in a row so return true
			}
			return result;//No three in a row so return false
		}
		
        //Grabs the value of each square in the table, called in checkRow()
		function getBox(number, num) {
            if(num == 1){
                return document.getElementById("a" + number).innerText;
            }else if(num == 2){
                return document.getElementById("b" + number).innerText;
            }
            else if(num == 3){
                return document.getElementById("c" + number).innerText;
            }else if(num == 4){
                return document.getElementById("d" + number).innerText;
            }else if(num == 5){
                return document.getElementById("e" + number).innerText;
            }else if(num == 6){
                return document.getElementById("f" + number).innerText;
            }else if(num == 7){
                return document.getElementById("g" + number).innerText;
            }else if(num == 8){
                return document.getElementById("h" + number).innerText;
            }else if(num == 9){
                return document.getElementById("i" + number).innerText;
            }
			
		}
		
        //Clears every square in the board, called from function startgame() and loops 9 times to get each square
		function clearBox(number) {
			document.getElementById("a" + number).innerText = "";//'a' corresponds to table 1 in html
            document.getElementById("b" + number).innerText = "";
            document.getElementById("c" + number).innerText = "";
            document.getElementById("d" + number).innerText = "";
            document.getElementById("e" + number).innerText = "";
            document.getElementById("f" + number).innerText = "";
            document.getElementById("g" + number).innerText = "";
            document.getElementById("h" + number).innerText = "";
            document.getElementById("i" + number).innerText = "";
		}
        
        //Checks for a winner by checking if three games in a row have been won
        function checkForBigWinner(shape){
                if(document.winner1 == shape && document.winner2 == shape && document.winner3 == shape){
                    return true;
                }else if(document.winner4 == shape && document.winner5 == shape && document.winner6 == shape){
                    return true;
                }else if(document.winner7 == shape && document.winner8 == shape && document.winner9 == shape){
                    return true;
                }else if(document.winner1 == shape && document.winner4 == shape && document.winner7 == shape){
                    return true;
                }else if(document.winner2 == shape && document.winner5 == shape && document.winner8 == shape){
                    return true;
                }else if(document.winner3 == shape && document.winner6 == shape && document.winner9 == shape){
                    return true;
                }else if(document.winner1 == shape && document.winner5 == shape && document.winner9 == shape){
                    return true;
                }else if(document.winner3 == shape && document.winner5 == shape && document.winner7 == shape){
                    return true;
                }else{
                    return false;
                }
            }
            
        //Draw an 'x' or 'o' in every square to show the winner of the table
        function drawShape(num, shape){
            if(num == 1){
                for(var i = 1; i <= 9; i++){
                    document.getElementById("a" + i).innerText = shape;
                }
            }else if(num == 2){
                for(var i = 1; i <= 9; i++){
                    document.getElementById("b" + i).innerText = shape;
                }
            }else if(num == 3){
                for(var i = 1; i <= 9; i++){
                    document.getElementById("c" + i).innerText = shape;
                }
            }else if(num == 4){
                for(var i = 1; i <= 9; i++){
                    document.getElementById("d" + i).innerText = shape;
                }
            }else if(num == 5){
                for(var i = 1; i <= 9; i++){
                    document.getElementById("e" + i).innerText = shape;
                }
            }else if(num == 6){
                for(var i = 1; i <= 9; i++){
                    document.getElementById("f" + i).innerText = shape;
                }
            }else if(num == 7){
                for(var i = 1; i <= 9; i++){
                    document.getElementById("g" + i).innerText = shape;
                }
            }else if(num == 8){
                for(var i = 1; i <= 9; i++){
                    document.getElementById("h" + i).innerText = shape;
                }
            }else if(num == 9){
                for(var i = 1; i <= 9; i++){
                    document.getElementById("i" + i).innerText = shape;
                }
            }
        }