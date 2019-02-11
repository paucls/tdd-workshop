# Bowling Game Kata
Create a program, which, given a valid sequence of rolls for one line of American Ten-Pin Bowling, produces the total score for the game. This is a summary of the rules of the game:

- Each game, or “line” of bowling, includes ten turns, or “frames” for the bowler.
- In each frame, the bowler gets up to two tries to knock down all the pins.
- If in two tries, he fails to knock them all down, his score for that frame is the total number of pins knocked down in his two tries.
- If in two tries he knocks them all down, this is called a “spare” and his score for the frame is ten plus the number of pins knocked down on his next throw (in his next turn).
- If on his first try in the frame he knocks down all the pins, this is called a “strike”. His turn is over, and his score for the frame is ten plus the simple total of the pins knocked down in his next two rolls.
- If he gets a spare or strike in the last (tenth) frame, the bowler gets to roll one or two more bonus balls, respectively. These bonus throws are taken as part of the same turn. If the bonus throws knock down all the pins, the process does not repeat: the bonus throws are only used to calculate the score of the final frame.
- The game score is the total of all frame scores.

Here are some things that the program will not do:
- We will not check for valid rolls.
- We will not check for correct number of rolls and
frames.
- We will not provide scores for intermediate frames.

The input is a sequence of rolls (number of pins knocked down each time player rolls the ball).

Sample games:

- [0,0,0,0,0,0,0,0,0,0]
A gutter-game, 0 pins for all rolls, giving a score of 0.

- [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]
Always hitting pins without getting spares or strikes, a total score of 60.

- [9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0,9,0]
Heartbreak, 9 pins down each round, giving a score of 90.

- [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5, 5]
A spare every round, giving a score of 150.

- [10,10,10,10,10,10,10,10,10,10, 10,10]
A perfect game, 12 strikes, giving a score of 300.

Source: The Coding Dojo Handbook, Emily Bache