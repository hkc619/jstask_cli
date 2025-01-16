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

```
node install
npm link
```

### Add task
Add the task. If you do not have a data.json first, you should use specific command below.
- Add task

  ```
  task-cli add "<task description>"
  ```


  ![avatar](https://github.com/hkc619/jstask_cli/blob/main/media/addtask.png "Add task")
- Add task failed
  ![avatar](https://github.com/hkc619/jstask_cli/blob/main/media/addTaskFail.png "Add task failed")
  Because there is no file named data.json.  
  `task-cli add "<task description> new"`  
- Create a new json and add tesk  
  ![avatar](https://github.com/hkc619/jstask_cli/blob/main/media/addtaskCreate.png "Add task Create")
  Add "new" to create a new data.json file with task.  

### Delete Task
Delete the task.
  ```
  task-cli delete <task id>
  ```
### List Task
Show the task with or without condition. The tasks you delete before will not show.
- List without condition  
  ```
  task-cli list
  ```
- List with condition  
  ```
  task-cli list "<task status>"
  ```
### Mark Task
Mark your progress on the task.
- Mark In-Progress
  ```
  task-cli mark-in-progress <task id>
  ```
- Mark Done
  ```
  task-cli mark-done <task id>
  ```

### Update Task
Update the task with new description.
  ```
  task-cli update <task id> "<task new description>"
  ```

### Remove Task
Permanently remove the task from your data.json. The status of the task you want to remove should be deleted, which means you have to delete it first.
- Remove Task 
  ```
  task-cli remove <task id>
  ```
- Remove Task failed
