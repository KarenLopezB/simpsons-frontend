const FirstName = document.getElementById('firstname');
const SecondName = document.getElementById('secondname');
const LastName = document.getElementById('lastname');
const Age = document.getElementById('age');
const Description = document.getElementById('description');

const ApiUrl = 'https://localhost:5001/';

//const apiResponse = async url =>{
  //  const response = await fetch(url);
    // const data = response.json()
    // console.log


    let getsimpsonsData = async ()=> {
        const response = await fetch(`${ApiUrl}simpsons/character/0`);
        const simpsons = await response.json();
        console.log(simpsons);
        const {firstName, secondName, lastName, age, description} = simpsons;
       
        FirstName.innerText = `Nombre : ${firstName}`;
        SecondName.innerText = `Segundo nombre: ${secondName}`;
        LastName.innerText = `Apellido: ${lastName}`;
        Age.innerText = `Edad: ${age}`;
        Description.innerText = `Descripcion: ${description}`;
    
    };
    
    getsimpsonsData();

    //

const FirstName2 = document.getElementById('firstname2');
const SecondName2 = document.getElementById('secondname2');
const LastName2 = document.getElementById('lastname2');
const Age2 = document.getElementById('age2');
const Description2 = document.getElementById('description2');

    let getsimpsonsData2 = async ()=> {
        const response2 = await fetch(`${ApiUrl}simpsons/character/1`);
        const simpsons2 = await response2.json();
        console.log(simpsons2);
        const {firstName, secondName, lastName, age, description} = simpsons2;
        
        FirstName2.innerText = `Nombre : ${firstName}`;
        SecondName2.innerText = `Segundo nombre: ${secondName}`;
        LastName2.innerText = `Apellido: ${lastName}`;
        Age2.innerText = `Edad: ${age}`;
        Description2.innerText = `Descripcion: ${description}`;
    
    };
    
    getsimpsonsData2();

    //

const FirstName3 = document.getElementById('firstname3');
const SecondName3 = document.getElementById('secondname3');
const LastName3 = document.getElementById('lastname3');
const Age3 = document.getElementById('age3');
const Description3 = document.getElementById('description3');

    let getsimpsonsData3 = async ()=> {
        const response3 = await fetch(`${ApiUrl}simpsons/character/2`);
        const simpsons3 = await response3.json();
        console.log(simpsons3);
        const {firstName, secondName, lastName, age, description} = simpsons3;
        
        FirstName3.innerText = `Nombre : ${firstName}`;
        SecondName3.innerText = `Segundo nombre: ${secondName}`;
        LastName3.innerText = `Apellido: ${lastName}`;
        Age3.innerText = `Edad: ${age}`;
        Description3.innerText = `Descripcion: ${description}`;
    
    };
    
    getsimpsonsData3();

    //

const FirstName4 = document.getElementById('firstname4');
const SecondName4 = document.getElementById('secondname4');
const LastName4 = document.getElementById('lastname4');
const Age4 = document.getElementById('age4');
const Description4 = document.getElementById('description4');

    let getsimpsonsData4 = async ()=> {
        const response4 = await fetch(`${ApiUrl}simpsons/character/3`);
        const simpsons4 = await response4.json();
        console.log(simpsons4);
        const {firstName, secondName, lastName, age, description} = simpsons4;
        
        FirstName4.innerText = `Nombre : ${firstName}`;
        SecondName4.innerText = `Segundo nombre: ${secondName}`;
        LastName4.innerText = `Apellido: ${lastName}`;
        Age4.innerText = `Edad: ${age}`;
        Description4.innerText = `Descripcion: ${description}`;
    
    };
    
    getsimpsonsData4();

    //
const FirstName5 = document.getElementById('firstname5');
const SecondName5 = document.getElementById('secondname5');
const LastName5 = document.getElementById('lastname5');
const Age5 = document.getElementById('age5');
const Description5 = document.getElementById('description5');

    let getsimpsonsData5 = async ()=> {
        const response5 = await fetch(`${ApiUrl}simpsons/character/4`);
        const simpsons5 = await response5.json();
        console.log(simpsons5);
        const {firstName, secondName, lastName, age, description} = simpsons5;
        
        FirstName5.innerText = `Nombre : ${firstName}`;
        SecondName5.innerText = `Segundo nombre: ${secondName}`;
        LastName5.innerText = `Apellido: ${lastName}`;
        Age5.innerText = `Edad: ${age}`;
        Description5.innerText = `Descripcion: ${description}`;
    
    };
    
    getsimpsonsData5();

    //

const FirstName6 = document.getElementById('firstname6');
const SecondName6 = document.getElementById('secondname6');
const LastName6 = document.getElementById('lastname6');
const Description6 = document.getElementById('description6');

    let getsimpsonsData6 = async ()=> {
        const response6 = await fetch(`${ApiUrl}simpsons/character/5`);
        const simpsons6 = await response6.json();
        console.log(simpsons6);
        const {firstName, secondName, lastName, description} = simpsons6;
        
        FirstName6.innerText = `Nombre : ${firstName}`;
        SecondName6.innerText = `Segundo nombre: ${secondName}`;
        LastName6.innerText = `Apellido: ${lastName}`;
        Description6.innerText = `Descripcion: ${description}`;
    
    };
    
    getsimpsonsData6();

    //

const FirstName7 = document.getElementById('firstname7');
const SecondName7 = document.getElementById('secondname7');
const LastName7 = document.getElementById('lastname7');
const Age7 = document.getElementById('age7');
const Description7 = document.getElementById('description7');

    let getsimpsonsData7 = async ()=> {
        const response7 = await fetch(`${ApiUrl}simpsons/character/6`);
        const simpsons7 = await response7.json();
        console.log(simpsons7);
        const {firstName, secondName, lastName, age, description} = simpsons7;
        
        FirstName7.innerText = `Nombre : ${firstName}`;
        SecondName7.innerText = `Segundo nombre: ${secondName}`;
        LastName7.innerText = `Apellido: ${lastName}`;
        Age7.innerText = `Edad: ${age}`;
        Description7.innerText = `Descripcion: ${description}`;
    
    };
    
    getsimpsonsData7();


