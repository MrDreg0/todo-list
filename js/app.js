Vue.component('todo-item', {
  template: '\
    <li>\
      <h2>{{title}}</h2>\
      <p>{{ text }}</p>\
      <button v-on:click="$emit(`remove`)">X</button>\
      <input type="checkbox" v-on:change="$emit(`checkeds`)">\
    </li>\
  ',
  props: ['title', 'text', 'id']
})

new Vue({
  el: '#todo-list',
  data: {
    newTodoTitle: '',
    newTodoText: '',
    removedTodoItem: 0,
    todos: [
      {
        id: 1,
        title: 'Купить молоко',
        text: 'Но оно должно быть свежим и вкусным',
        checked: false
      },
      {
        id: 2,
        title: 'Выгулять собаку',
        text: 'Насладится прогулкой самому',
        checked: false
      },
      {
        id: 3,
        title: 'Постирать вещи',
        text: 'И прополоскать с кондиционером',
        checked: false
      }
    ],
    nextTodoId: 4
  },
  computed: {
    getTotalTodo: function () {
      return this.todos.length
    },
    getTotalCompletedTasks: function () {
      return this.todos.filter(function(item){return item.checked === true}).length
    }
  }, 
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoTitle,
        text: this.newTodoText,
        checked: false
      })
      this.newTodoTitle = '',
      this.newTodoText = ''
    },
    changeChecked: function (item) {
      item.checked = !item.checked
    },
    removeTodoItem: function (array, index) {
      array.splice(index, 1)
      this.removedTodoItem++
    }
  }
})