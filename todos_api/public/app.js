/* global $ */
$(document).ready(function(){
    getTodos();
    
    $('#todoInput').keypress(function(event){
       if(event.which == 13){
           createTodo();
       } 
    });
    
    $("ul.list").on("click", "span", function(e){
        e.stopPropagation();
        removeTodo($(this).parent());
    });
    
    $("ul.list").on("click", "li", function(){
        updateTodo($(this));
    })
});

function updateTodo(todo){
    let updateUrl = 'api/todos/'+ todo.data("id");
    let isDone = !todo.data("completed");
    let updateData = {completed: isDone};
    $.ajax({
        method:'PUT',
        url: updateUrl,
        data : updateData
    })
    .then(function(updatedTodo){
        todo.data("completed",isDone)
        todo.toggleClass("done");
    })
    .catch(function(err){
        console.log(err);
    })
}

function getTodos(){
    $.getJSON('/api/todos')
    .then(addTodos)
    .catch(function(err){
        console.log(err);
    });
}

function addTodos(todos){
    todos.forEach(function(todo){
      addTodo(todo);
    });
}

function addTodo(todo){
    console.log(todo.name);
        var newTodo = $('<li>'+ todo.name +' <span>X</span></li>');
        newTodo.data("id",todo._id);
        newTodo.data("completed",todo.completed);
        newTodo.addClass("task");
        if(todo.completed)
        newTodo.addClass("done");
        $('.list').append(newTodo);
}

function createTodo(){
    var userInput = $('#todoInput').val();
    $.post('/api/todos', {name: userInput})
    .then(function(newTodo){
        addTodo(newTodo);
        $('#todoInput').val("");
    })
    .catch(function(err){
        console.log(err);
    });
}

function removeTodo(todo){
        let deleteUrl = 'api/todos/'+ todo.data("id");
        $.ajax({
            method:'DELETE',
            url: deleteUrl
        })
        .then(function(data){
            console.log(data.message);
            todo.remove(); 
        })
        .catch(function(err){
            console.log(err);
        });
}