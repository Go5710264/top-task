export default class TaskList{
    constructor(textTask){
        this.textTask = textTask;
    }

    addToList() {
        let newTask = document.createElement('li'); // объявить новоый элемент
        newTask.className = 'task';
        newTask.textContent = this.textTask;
        newTask.innerHTML = '\
            <div class="task__title"></div> \
            <a href="#" class="task__remove">&times;</a>\
        '; // костыльный метод добавления вложенного элемента
        console.log(newTask)

        console.log(newTask)
        // taskList.insertBefore(newTask, taskList.firstElementChild); // добавить новую задачу в список задач
        // document.querySelectorAll('.task__title')[0].textContent = input.value; // такст первого элемента списка заменить на значение ввода
    }

    
}