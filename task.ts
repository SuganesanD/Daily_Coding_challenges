
interface Task {
    id: number;
    name: string;
    completed: boolean;
  }
  

  class TaskManager {
    tasks: Task[] = [];

    addTask(task: Task): void {
      this.tasks.push(task);
    }
  
   
    getAllTasks(): Task[] {
      return this.tasks;
    }
  
  
    completeTask(id: number): boolean {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.completed = true;
        return true;
      }
      return false;
    }
  
    
    getPendingTasks(): Task[] {
      return this.tasks.filter(task => !task.completed);
    }
  }
  
 
  const taskManager = new TaskManager();
  

  taskManager.addTask({ id: 1, name: 'Learn TypeScript', completed: false });
  taskManager.addTask({ id: 2, name: 'Build a TypeScript Project', completed: true });
  
  
  console.log(taskManager.getAllTasks());  
  

  taskManager.completeTask(1);
  
 
  console.log(taskManager.getPendingTasks()); 
  