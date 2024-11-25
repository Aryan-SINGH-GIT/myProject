Technical Documentation: Game Rock, Paper, Scissors

### HTML
HTML will be responsible for the overall structure of the game.

Title "Rock, Paper, Scissors" game header with the style of HTML `<u>`.

Buttons Three buttons - `rock`, `paper`, `scissor` have images and unique IDs for the input from the user.

Score Display Two spans `YourSc`, `CompSc` for the scores for the user and computer respectively.

Result Section Finally, will be used to display the results along with messages.

External Resources
- CSS: Connected through `style.css`.
  - JavaScript: Connected through `script.js` for interactivity.

----------

### **CSS**
The CSS styles the game interface for readability and interest.

- **Body**: Centered with a black background and white text.
- **Header**: Big with spacing below.
- **Buttons**: Padded with hover effects, with images centered inside
- **Dynamic Updates**:
  - Buttons highlight user/computer choices in green/red colors.
- Results and scores shown in larger print.

---
### **JavaScript**
 The JavaScript is the core of the game logic and interaction.

#### **Main Features**
1. **Random Computer Choice**:
   - `randomSelect()`: Returns a random choice (`rock`, `paper`, `scissor`).

2. **Game Logic**:
   - `game(userIn)`: Updates UI, highlights choices, and computes the score based on user and computer inputs.

3. **Score Tracking**:
   - Scores (`userScore`, `botScore`) are updated in real-time in the UI.

4. **Game Reset**:
- `newGame()`: Resets scores, UI, and messages when a player wins.

5. **Event Listeners**:
   - Buttons trigger `game()` with corresponding choices.
  
---
### **Screenshots**
![image](https://github.com/user-attachments/assets/ca78eca3-b2fb-48b8-a294-7923ab5a6567)


