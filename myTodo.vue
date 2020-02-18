<template>
    <div id="app" class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a v-on:click="loadTodo()" class="navbar-brand" href="#"><h4> MyTodo </h4></a>
            <button class="navbar-toggler" type="button" 
                data-toggle="collapse" data-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a v-on:click="loadTodo() , showCreate = false , showTodo = true" class="nav-link" href="#"> Todo List <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a v-on:click="showTodo = false , showCreate = true, isEmpty = false" class="nav-link" href="#"> Create <span class="sr-only">(current)</span></a>
                </li>
                </ul>
            </div>
        </nav>

        <!--create page-->
        <div v-if="showCreate" >
            <div v-if="isEmpty" class="alert alert-danger" role="alert">
                Please Enter Todo !!!
            </div>

            <div class="form-group">
                <label for="todoTitle"> Input todo </label><br>
                <input v-model="newTask" v-on:click="isEmpty = false" type="text" class="form-control">
                <label for="todoTitle" class="form-text text-muted"><small>* Required</small></label><br>
            </div>
            <div class="form-group">    
                <label for="todoTitle"> Description </label><br>
                <input v-model="newDescription" type="text" class="form-control"><br>
            </div>
                <button type="button" class="btn btn-primary" v-on:click="loadTodo(), showCreate = false , showTodo = true"> Cancel </button>&nbsp;
                <button type="button" class="btn btn-primary" v-if="isEmpty !== true" v-on:click="saveTodo(), showCreate = false , showTodo = true"> Save </button>
                <button type="button" class="btn btn-primary" v-if="isEmpty" v-on:click="showCreate = true , showTodo = false , isEmpty = true"> Save </button>   
        </div>
        <br>
        <!--home page-->
        <div v-if="showTodo">
            <div  class="card mb-2" v-for="(todo , index) in todos" v-bind:key="todo.id">
                <div class="card-body" > 
                    <h5 class="card-title">{{ todo.task }}</h5>
                    <p class="card-text">{{ todo.description }}</p>
                    <button v-on:click=" todoRef = todo.id ,showCreate = true , showTodo = false , isEdit = true" class="btn btn-primary" > Edit </button>&nbsp;
                    <button class="btn btn-danger" v-on:click="removeTodo(todo.id)"> Delete </button>&nbsp;
                    <button v-if="index !== 0" type="button" class="btn btn-outline-info" v-on:click="moveUp(index)"> Up </button>&nbsp;
                    <button v-if="index !== todos.length-1" type="button" class="btn btn-outline-info" v-on:click="moveDown(index)"> Down </button><br> 
            </div>
        </div>
    </div>
</div>
</template>

<!--firebase config-->
<script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-firestore.js"></script>

<script>
    import { firebase } from "@firebase/app";
    import "@firebase/firestore";
  
    var firebaseConfig = {
        apiKey: "AIzaSyDYs65_AIaAEI3-tpayM23T-1iMjILmPwI",
        authDomain: "vue-todo-f0129.firebaseapp.com",
        databaseURL: "https://vue-todo-f0129.firebaseio.com",
        projectId: "vue-todo-f0129",
        storageBucket: "vue-todo-f0129.appspot.com",
        messagingSenderId: "480055401847",
        appId: "1:480055401847:web:f9227fc0a48d381b7b1572"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore(); 

export default {
    data() {
            return {
                todos:[],
                newTask:'',
                newDescription:'',
                removeTask:'',
                showTodo: true,
                showCreate: false,
                isEdit: false,
                isEmpty:false,
                docRef:''
            }
    },
    mounted() {
        this.loadTodo();
    },
    firestore() {
            return {
                todos:db.collection('todos'),
            }
    },
    methods: {
        saveTodo() {
            let todo = [];
                if(this.newTask && this.newDescription != false){
                    db.collection('todos').add({
                        task : this.newTask,
                        description : this.newDescription,
                    }).then(this.newTask = '',this.newDescription ='');
                }
                this.loadTodo(); 
            },
            loadTodo() {
                let todolist = [];
                db.collection('todos').get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                    let todo = {
                        id: doc.id,
                        task: doc.data().task,
                        description: doc.data().description
                    }
                    todolist.push(todo)
                    });
                });
                this.todos = todolist;
            },
            editTodo(collectionID){
                db.collection('todos').doc(collectionID).update({ 
                    task: newTodo
                    })
                .then(() => {
                    console.log('updated!')
                });
            },
            removeTodo(collectionID) {
                db.collection('todos').doc(collectionID).delete().then(function() {
                    }).catch(function(error) {
                        console.error("Error removing document: ", error);
                        });  
                this.loadTodo();        
                    },
            moveUp(index) {
                if (index === 0) { return }
                let todo = this.todos[index]
                this.todos.splice(index, 1)
                console.log(todo)
                this.todos.splice(index-1, 0, todo)
        },
            moveDown(index) {
                if (index == this.todos.length - 1) { return }
                let todo = this.todos[index]
                this.todos.splice(index, 1)
                this.todos.splice(index+1, 0, todo)
        }         
        }
        
    }

</script>
<style>
    @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>