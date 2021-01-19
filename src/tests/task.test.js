const Task = require('../task').default;

const task = new Task('task test', 'task description', '2021-1-19', 'low', 1, 1);

test('Create new task', () => {
  expect(task instanceof Task).toBeTruthy();
});

test('Title getter returns task title', () => {
  expect(task.title).toBe('task test');
});

test('description getter returns task description', () => {
  expect(task.description).toBe('task description');
});

test('projId getter returns task projId', () => {
  expect(task.projId).toEqual(1);
});

test('id getter returns task id', () => {
  expect(task.id).toEqual(1);
});

test('dueDate getter returns task dueDate', () => {
  expect(task.dueDate).toBe('2021-1-19');
});

test('priority getter returns task priority', () => {
  expect(task.priority).toBe('low');
});

test('status getter returns task status', () => {
  expect(task.status).toBe('To-do');
});

test('formatedDueDate returns a formated task dueDate', () => {
  expect(task.formatedDueDate() instanceof Date).toBeTruthy();
});

test('Title setter modifies task title', () => {
  task.title = 'modified title';
  expect(task.title).toBe('modified title');
});

test('description setter modifies task description', () => {
  task.description = 'modified description';
  expect(task.description).toBe('modified description');
});

test('dueDate setter modifies task dueDate', () => {
  task.dueDate = '2022-2-20';
  expect(task.dueDate).toBe('2022-2-20');
});

test('priority setter modifies task priority', () => {
  task.priority = 'hight';
  expect(task.priority).toBe('hight');
});

test('status setter modifies task status', () => {
  task.status = 'in-progress';
  expect(task.status).toBe('in-progress');
});
