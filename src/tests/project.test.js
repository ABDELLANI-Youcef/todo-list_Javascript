const Project = require('../project').default;
const Task = require('../task').default;

const project = new Project('project test', 1);
const task = new Task('task test', 'task description', '2021-1-19', 'low', 1, 1);
test('Create new project', () => {
  expect(project instanceof Project).toBeTruthy();
});

test('Title getter returns project title', () => {
  expect(project.title).toBe('project test');
});

test('Id getter returns project id', () => {
  expect(project.id).toBe(1);
});

test('taskCounter getter returns project task counter', () => {
  expect(project.taskCounter).toBe(0);
});

test('Tasks getter returns project tasks', () => {
  expect(project.tasks instanceof Array).toBeTruthy();
  expect(project.tasks.length).toBe(0);
});

test('Title setters modifies project title', () => {
  project.title = 'modified title';
  expect(project.title).toBe('modified title');
});

test('addTask method adds task to the project', () => {
  project.addTask(task);
  expect(project.tasks.length).toBe(1);
  expect(project.taskCounter).toBe(1);
});

test('removeTask method removes task from the project', () => {
  project.removeTask(task);
  expect(project.tasks.length).toBe(0);
});
