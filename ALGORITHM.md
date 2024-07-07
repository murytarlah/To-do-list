# Algorithm

### Step-by-Step Algorithm

1. **Initialize Elements**:
   - Get references to the input box, the list element, and the form element.

2. **Define Todos **:
   - Create an array of todo objects, each containing a text and a completed status.

3. **Render Existing Todos**:
   - If there are todos, iterate through each todo and add them to the list using a helper function.

4. **Form Submission**:
   - Add an event listener to the form to handle form submission.
   - Prevent the default form submission behavior.
   - Call the function to add a new todo.

5. **Create Todo Element**:
   - Create a new list item (LI) element with the given text.
   - Return the newly created list item.

6. **Add Todo Function**:
   - Get the text from the input field.
   - If a todo object is passed, use its text instead.
   - Create a new list item (LI) element using the createTodoELement function.
   - If the todo is marked as completed, add a 'completed' class to the element.
   - Add event listeners for click (toggle completed status) and context menu (remove todo) actions.
   - Append the new todo to the list and clear the input field.

