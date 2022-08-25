<div align="center">
    <img src="https://user-images.githubusercontent.com/83414433/186296884-9ed0eafd-b135-4070-a90d-f7da56fee130.png" />
</div>

<div align="center">
  <h1><img src="https://user-images.githubusercontent.com/83414433/186297373-4e23e552-3ca6-4b48-998d-8399b77b4791.png" alt="imagem_project_cost" height="32" width="32"/> Cost Manager <img src="https://user-images.githubusercontent.com/83414433/186297373-4e23e552-3ca6-4b48-998d-8399b77b4791.png" alt="imagem_project_cost" height="32" width="32"/></h1>
</div>

## :page_facing_up: About
Cost is a project manager. In it we can create, edit and delete projects, and in the creation we define a total budget and later we have the possibility of allocating services that are fundamental for its execution, thus, we have in hand the control of the expenses that this project can generate until it is completed.

> Status: Developing :warning:

## :gear: Functionalities

>Management of all projects
>
>Create projects
>
>Definicion budget for the projects
>
>Edit projects
>
>By default there are four categories for projects
>
>Services alocation
>
>Expense control
>
>Possibilited add new categorys
>
>Data base alocated projects and services

<details>
<summary><b>Features in developement 🛠️ </b></summary>
</br>

>Layout responsive

>Edit services

>Search for added services

>Search for added projects

</details>

## :rocket: Technologies Used
<table border="1">
  <tr>
    <td>Javascript</td>
    <td>React</td>
    <td>React Icons</td>
    <td>React Router Dom</td>
    <td>Json Server</td>
    <td>Uuid</td>
  </tr>
  <tr>
    <td>ECM</td>
    <td>18.2</td>
    <td>4.4</td>
    <td>6.3</td>
    <td>0.17</td>
    <td>8.3</td>
  </tr>
</table>

## :construction_worker: How to use
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Prerequisites :warning:
<table border="1">
  <tr>
    <td>NodeJS</td>
    <td>v16.17</td>
  </tr>
  <tr>
    <td>NPM</td>
    <td>v8.15</td>
  </tr>
   <tr>
    <td>Git</td>
    <td>v2.37</td>
  </tr>
  <tr>
    <td>Code Editor</td>
    <td>*</td>
  </tr>
</table>

#### Here in the Github ![github](https://user-images.githubusercontent.com/83414433/186276983-84b59775-7cd6-4714-b3f6-0c1b49d8266a.png)
1. Copy this command `git clone https://github.com/Gabriel23i/cost-manager.git`

#### On your machine 🖥️

2. Open the terminal and run the command copied from Github

3. Enter in the project folder run command `npm i` for install the dependencies

4. In the code editor open the folder that contains the project

5. Open two terminals in the project folder and run the below commands separately in each terminal
  
    *  Command `npm run backend`
    
        *  Open [http://localhost:5000/projects](http://localhost:5000/projects) to view the project database
    
    *  Command `npm start`
    
        *  Open [http://localhost:3000](http://localhost:3000) to view the project in your browser

## 💬 Considerations Finalized 
>Main technologies applied in this project: React, React Router Dom, Hooks, Metodos HTTP, API REST, CRUD.

<details open="true">
<summary><b>Front-End <img width="18" src="https://user-images.githubusercontent.com/83414433/186509918-15d2b0ee-0c24-47cd-a954-3bbfcafc5218.png" alt="representação_front_end"/></b></summary>
I used hooks to deal with the life cycle of the components and make the change of state to change the data presented on the page, in that brief moment a "Component Loading" is displayed as a visual feedback to the user, thus respecting the concept of SPA, which should update page data without "Page Reload", providing the user with a fluid experience.
With forms I worked with data manipulation and validation. I made asynchronous requests to the backend to save, get, update and delete data, using the main HTTP verbs.
</details>

<details open="true">
<summary><b>Back-End 
<img width="18" src="https://user-images.githubusercontent.com/83414433/186509433-6ade5362-0547-4766-8562-e72997b748b2.png" alt="representação_back_end"/></b></summary>
I used the Json-Server library, which is succinctly a simulation of a REST API with a Database, where I worked on the CRUD implementation.
</details>

<details open="true">
<summary><b>Product <img src="https://user-images.githubusercontent.com/83414433/186297373-4e23e552-3ca6-4b48-998d-8399b77b4791.png" alt="imagem_project_cost" width="18"/></b></summary>
I carried out the implementation of business rules, one of them being: The Project has a budget to be followed, allowing the addition of services for the conclusion of the project, as long as the services do not exceed the value determined in the budget.
</details>

>Last, but not least, I want to express my sincere thanks to Matheus Battisti, he is the creator of [Curso React](https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO), which teaches in practice concepts, fundamentals and creation of projects in React. </br>
>Thanks [Matheus](https://github.com/matheusbattisti/), you are a very capable Dev and master the art of teaching!
