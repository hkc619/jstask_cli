# Task tracker

https://roadmap.sh/projects/task-tracker

## Task Description

An Easy cli for task tracking.

## Task Properties

Each task should have the following properties:

- id: A unique identifier for the task
- description: A short description of the task
- status: The status of the task (todo, in-progress, done)
- createdAt: The date and time when the task was created
- updatedAt: The date and time when the task was last updated

## Task Methods

### Initialization

`npm link`

### Add task

- Add task
  `task-cli add "<task description>"`
  ![avatar](https://github.com/hkc619/jstask_cli/blob/main/media/addtask.png "Add task")
- Add tesk failed
  ![avatar](https://github.com/hkc619/jstask_cli/blob/main/media/addTaskFail.png "Add task failed")
  Because there is no file named data.json.
  `task-cli add "<task description> new"`
- Create a new json and add tesk
  ![avatar](https://github.com/hkc619/jstask_cli/blob/main/media/addtaskCreate.png "Add task Create")
  Add "new" to create a new data.json file with task.

### Delete Task

### List Task

### Mark Task

- Mark In-Progress
- Mark Done

### Update Task

### Remove Task
