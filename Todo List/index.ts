import chalk from "chalk";
import * as inquirer from "inquirer";

enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN PROGRESS",
  DONE = "DONE",
}

interface Task {
  title: string;
  status: TaskStatus;
}

class TodoList {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  public addTask(title: string): void {
    const newTask: Task = {
      title: title,
      status: TaskStatus.TODO,
    };
    this.tasks.push(newTask);
    console.log(chalk.green(`Task added: ${title}`));
  }

  public displayTasks(): void {
    console.log(chalk.blue("=== TODO List ==="));
    this.tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.title} - ${chalk.keyword(
          getStatusColor(task.status)
        )(task.status)}`
      );
    });
    console.log(chalk.blue("================="));
  }
  public getTasks(): Task[] {
    return this.tasks;
  }
  public updateTaskStatus(index: number, newStatus: TaskStatus): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].status = newStatus;
      console.log(
        chalk.yellow(
          `Task updated: ${this.tasks[index].title} - New Status: ${newStatus}`
        )
      );
    } else {
      console.log(chalk.red("Invalid task index."));
    }
  }
}

function getStatusColor(status: TaskStatus): string {
  switch (status) {
    case TaskStatus.TODO:
      return "orange";
    case TaskStatus.IN_PROGRESS:
      return "yellow";
    case TaskStatus.DONE:
      return "green";
    default:
      return "white";
  }
}

const todoList = new TodoList();

function mainMenu(): void {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Choose an action:",
        choices: ["Add Task", "Display Tasks", "Update Task Status", "Exit"],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case "Add Task":
          addTask();
          break;
        case "Display Tasks":
          displayTasks();
          break;
        case "Update Task Status":
          updateTaskStatus();
          break;
        case "Exit":
          console.log(chalk.blue("Goodbye!"));
          break;
        default:
          console.log(chalk.red("Invalid action."));
          mainMenu();
      }
    });
}

function addTask(): void {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter task title:",
        validate: (value) =>
          value.trim() !== "" ? true : "Please enter a valid task title.",
      },
    ])
    .then((answers) => {
      todoList.addTask(answers.title);
      mainMenu();
    });
}

function displayTasks(): void {
  todoList.displayTasks();
  mainMenu();
}

function updateTaskStatus(): void {
  const tasks = todoList.getTasks();
  const taskChoices = tasks.map((task: any, index: any) => ({
    name: `${index + 1}. ${task.title}`,
    value: index,
  }));

  inquirer
    .prompt([
      {
        type: "list",
        name: "taskIndex",
        message: "Select task to update status:",
        choices: taskChoices,
      },
      {
        type: "list",
        name: "newStatus",
        message: "Select new status:",
        choices: Object.values(TaskStatus),
      },
    ])
    .then((answers) => {
      todoList.updateTaskStatus(answers.taskIndex, answers.newStatus);
      mainMenu();
    });
}

mainMenu();
