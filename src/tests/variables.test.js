const findProject = require('../variables').findProject;
const deleteFromProjectList = require('../variables').deleteFromProjectList;
const addTaskToProject = require('../variables').addTaskToProject;
const parseJsonToTask = require('../variables').parseJsonToTask;
const readProjectFromStorage = require('../variables').readProjectFromStorage;
const Task = require('../task').default;
const Project = require('../project').default;

let task = new Task('task test', 'task description', '2021-1-19', 'low', 1, 1);
let project1 = new Project('project1 test', 1);
let project2 = new Project('project2 test', 2);
let listProjects = [project1, project2];

test('FindProject Returns index of a project in a list of projects', ()=>{
  expect(findProject(listProjects, 2)).toBe(1);
});

test('deleteFromProjectList modifies project list by removing project with index', ()=>{
  deleteFromProjectList(listProjects, 1);
  expect(listProjects.length).toBe(1);
});

test('addTaskToProject modify a project from list of project by adding a task to it', () => {
  addTaskToProject(listProjects, 2, task);
  expect(listProjects[0].tasks.length).toBe(1);
});

test('parseJsonToTask parses a json object and returns a task', () => {
  const objJson = {
    "_title": 'my title',
    "_description": 'my description',
    "_dueDate": '2021-1-10',
    "_priority": 'medium',
    "_status": 'in-progress',
    "_projId": 1,
    "_id": 2
  }

  const myParsedTask = parseJsonToTask(objJson);
  expect(myParsedTask instanceof Task).toBeTruthy();
});

test('readProjectFromStorage parses a json object and resturns a project', () => {
  const projJson = {
    '_title': 'my proj',
    '_id': 3,
    '_tasks': [
      {
        "title": 'my title',
        "description": 'my description',
        "dueDate": '2021-1-10',
        "priority": 'medium',
        "status": 'in-progress',
        "projId": 1,
        "id": 2
      }
    ]
  };

  const myPoject = readProjectFromStorage(projJson);
  expect(myPoject instanceof Project).toBeTruthy();

});