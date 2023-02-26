import TaskList from "../task_list/TaskList";

export default class TaskEntry {
    constructor(element) {
        if(typeof element === 'string'){
            element = document.querySelector(element); // поиск элемента ввода 
        }

        this.element = element;
        this.getTask = this.getTask.bind(this);


        this.element.addEventListener('change', this.getTask)
    }

    getTask(e) {

        // страница перезагружается!!!
        
        e.preventDefault(); // запрет на перезагрузку страницы

        this.element.value = this.element.value.trim(); // убрать пробелы по бокам от текста
        console.log(this.element.value)
        new TaskList(this.element.value).addToList();
        return false;
    }
} 