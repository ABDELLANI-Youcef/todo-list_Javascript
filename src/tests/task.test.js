const Task = require('../task').default;

let task = new Task('task test', 'task description', '2021-1-19', 'low', 1, 1);

test('Create new task', ()=>{
  expect(task instanceof Task).toBeTruthy();
});
