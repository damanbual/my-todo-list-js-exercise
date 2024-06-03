// Create a new task by adding to the arrays
// A new task will be created as incomplete

// eslint-disable-next-line func-style
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    // Method to log the task state
    logState: () => {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },
    // Method to mark the task as completed
    markCompleted: () => {
      task.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];
task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
