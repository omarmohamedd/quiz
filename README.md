Quiz Project

Steps:

1- #navigate as a normal user or an admin by navigating with "/admin"
2- admin can create edit or remove then user can explore the quizes

Requirements:

1- A quiz is represented with a title, description, final score, and a URL linking to a YouTube video.

2- Questions should be listed as an array that contains the question text and other metadata, such as the feedback displayed when the user correctly/incorrectly answers the question.

3- Answers should be listed as an array that contains metadata about the answer, as well as whether the answer is correct or not. There can only be one correct answer for each question.

4- When creating a new quiz, there should be no ID for the quiz, question, or answer, which means that  when you start creating a new quiz, you don't need to assign any unique identifiers (IDs) to the quiz, its questions, or its answers. You can assume that these IDs will be assigned later when the quiz is saved or submitted.

5- When editing, there will be IDs for each because they have already been created which means that When you edit an existing quiz, it means that the quiz, its questions, and its answers already have unique identifiers (IDs) assigned to them. These IDs are used to identify and update the specific components of the quiz during the editing process.

6- When adding a new quiz, the user should assume there is a local repository that assigns each entity an ID.

7- The initial interface should list all quizzes with the option to add a new one or edit an existing one.





Tasks:

1- Create a quiz list component that displays a list of all quizzes and has the option to add a new quiz or edit an existing one.

2- Create a quiz detail component that displays the title, description, final score, and YouTube video URL for a selected quiz.

3- Implement functionality for adding a new quiz, including creating a form for the user to input the quiz details and questions/answers.

4- Implement functionality for editing an existing quiz, including pre-populating the form with the existing quiz details and allowing the user to update the questions/answers.

5- Implement a local repository that assigns unique IDs to each quiz, question, and answer.

6- Store the quiz data in local storage or a database, so that it persists between sessions.



Application flow:

1- When the user opens the quiz app, they are presented with the quiz list component.

2- If the user clicks "Add Quiz," they are taken to the quiz detail component with a blank form.

3- If the user clicks "Edit" on a quiz in the list, they are taken to the quiz detail component with the form pre-populated with the quiz details and questions/answers.

4- When the user submits the form, the quiz data is validated and saved to the local repository, along with a unique ID.

5- When the user clicks on a quiz in the list, they are taken to the quiz detail component for that quiz.

6- When the user completes a quiz, their score is calculated and displayed on the quiz detail component.



