var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    TaskManager.prototype.getAllTasks = function () {
        return this.tasks;
    };
    TaskManager.prototype.completeTask = function (id) {
        var task = this.tasks.find(function (task) { return task.id === id; });
        if (task) {
            task.completed = true;
            return true;
        }
        return false;
    };
    TaskManager.prototype.getPendingTasks = function () {
        return this.tasks.filter(function (task) { return !task.completed; });
    };
    return TaskManager;
}());
var taskManager = new TaskManager();
taskManager.addTask({ id: 1, name: 'Learn TypeScript', completed: false });
taskManager.addTask({ id: 2, name: 'Build a TypeScript Project', completed: true });
console.log(taskManager.getAllTasks());
taskManager.completeTask(1);
console.log(taskManager.getPendingTasks());
