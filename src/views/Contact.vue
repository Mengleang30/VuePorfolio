<script setup>
import { useStore } from '@/stores/State';

const store = useStore();

</script>

<template>
    <div class="contact">
        <h3>Contact</h3>

        <div class="box">
            <span></span>
            <p></p>
        </div>
            <p>I'm always open discussing new projects. Opportunities in teach world</p>
            <form action="" class="form">
               <label for="name">
                 Name : 
                 <input type="text" >
               </label>
               <label for="name">
                 Email : 
                 <input type="text">
               </label>
               <label for="name">
                 Message : 
                 <input type="text">
               </label>
               <button :class="{darkMode: store.dartMode }">Submit</button>
            </form>
    </div>
   
</template>


<style scoped>

.contact{
    min-height: 100vh;
    padding: 5px;
}
.contact .form{
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 80%;
}
.form input{
    height: 2rem;
    border-radius: 4px;
    border: none;
    padding-left: 4px;
}
.form label {
    display: flex;
    flex-direction: column;
}
.form button {
    background-color: transparent;
    margin-top: 1rem;
    border-radius: 5px;
    border: 1px solid rgb(249, 145, 0);
    height: 2rem;
    cursor: pointer;
    width: 40%;
    min-width: 8rem;
    align-self: flex-end;
}
.form button:hover {
  background-color: royalblue;
  color: white;
  border: none;
}

</style>