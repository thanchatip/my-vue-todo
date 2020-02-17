<template>
    <div id="app" class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" 
                data-toggle="collapse" data-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a @click="loadTodo()" class="nav-link" href="#"> Todo List <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"> Create </a>
                </li>
                </ul>
            </div>
        </nav>
        <!--create page-->
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Add New Todo</h3>
                <label for="bookTitle">Input todo</label><br>
                <input type="text" v-model="newTask" class="form-control">
                <label for="bookTitle"><small>* Required</small></label><br>
                <label for="bookTitle">Description</label><br>
                <input type="text" v-model="newDescription" class="form-control"><br>
                <button type="button" class="btn btn-primary" v-on:click="loadTodo()"> Cancel </button>&nbsp;
                <button type="button" class="btn btn-primary" v-on:click="saveTodo()"> Save </button> 
            </div>
        </div>
        <br>
        <!--home page-->
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Todo List</h3>
                    <div class="card" v-for="(todo) in todos" v-bind:key="todo.id">
                    <div class="card-body" > 
                        <h5>{{todo.task}}</h5>
                        <h6>{{todo.description}}</h6>
                        <button class="btn btn-primary" > Edit </button>&nbsp;
                        <button class="btn btn-danger" v-on:click="removeTodo(todo.id)"> Delete </button>     
                    </div>
                    <br> 
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
                removeTask:'' 
            }
    },
    firestore() {
            return {
                todos:db.collection('todos'),
            }
        },
    methods: {
        saveTodo() {
                db.collection('todos').add({
                    task : this.newTask,
                    description : this.newDescription,
                });
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
            removeTodo(collectionID) {
                db.collection('todos').doc(collectionID).delete().then(function() {
                    }).catch(function(error) {
                        console.error("Error removing document: ", error);
                        });  
                this.loadTodo();        
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