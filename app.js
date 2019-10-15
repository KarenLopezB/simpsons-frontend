const Photo = document.getElementById('photo');
const FirstName = document.getElementById('firstname');
const SecondName = document.getElementById('secondname');
const LastName = document.getElementById('lastname');
const Age = document.getElementById('age');
const Description = document.getElementById('description');

const ApiUrl = 'https://localhost:5001/'

//const apiResponse = async url =>{
  //  const response = await fetch(url);
    // const data = response.json()
    // console.log


    let getsimpsonsData = async ()=> {
        const response = await fetch(`${ApiUrl}simpsons/character/0`);
        const simpsons = await response.json();
        console.log(simpsons);
        const {firstName, secondName, lastName, age, description} = simpsons;
        const photo = simpsons;
        
        Photo.src = photo;
        FirstName.innerText = firstName;
        SecondName.innerText = secondName;
        LastName.innerText = lastName;
        Age.innerText = age;
        Description.innerText = description;
    
    };
    
    getsimpsonsData();

    //

const photo2 = document.getElementById('photo2');
const FirstName2 = document.getElementById('firstname2');
const SecondName2 = document.getElementById('secondname2');
const LastName2 = document.getElementById('lastname2');
const Age2 = document.getElementById('age2');
const Description2 = document.getElementById('description2');

    let getsimpsonsData = async ()=> {
        const response2 = await fetch(`${ApiUrl}simpsons/character/1`);
        const simpsons2 = await response2.json();
        console.log(simpsons2);
        const {firstName, secondName, lastName, age, description} = simpsons2;
        const photo = simpsons2;
        
        Photo2.src = photo;
        FirstName2.innerText = firstName;
        SecondName2.innerText = secondName;
        LastName2.innerText = lastName;
        Age2.innerText = age;
        Description2.innerText = description;
    
    };
    
    getsimpsonsData();

    //

const Photo3 = document.getElementById('photo3');
const FirstName3 = document.getElementById('firstname3');
const SecondName3 = document.getElementById('secondname3');
const LastName3 = document.getElementById('lastname3');
const Age3 = document.getElementById('age3');
const Description3 = document.getElementById('description3');

    let getsimpsonsData = async ()=> {
        const response3 = await fetch(`${ApiUrl}simpsons/character/2`);
        const simpsons3 = await response3.json();
        console.log(simpsons3);
        const {firstName, secondName, lastName, age, description} = simpsons3;
        const photo = simpsons3;
        
        Photo3.src = photo;
        FirstName3.innerText = firstName;
        SecondName3.innerText = secondName;
        LastName3.innerText = lastName;
        Age3.innerText = age;
        Description3.innerText = description;
    
    };
    
    getsimpsonsData();

    //

const Photo4 = document.getElementById('photo4');
const FirstName4 = document.getElementById('firstname4');
const SecondName4 = document.getElementById('secondname4');
const LastName4 = document.getElementById('lastname4');
const Age4 = document.getElementById('age4');
const Description4 = document.getElementById('description4');

    let getsimpsonsData = async ()=> {
        const response4 = await fetch(`${ApiUrl}simpsons/character/3`);
        const simpsons4 = await response4.json();
        console.log(simpsons4);
        const {firstName, secondName, lastName, age, description} = simpsons4;
        const photo = simpsons4;
        
        Photo4.src = photo;
        FirstName4.innerText = firstName;
        SecondName4.innerText = secondName;
        LastName4.innerText = lastName;
        Age4.innerText = age;
        Description4.innerText = description;
    
    };
    
    getsimpsonsData();

    //
const Photo5 = document.getElementById('photo5');
const FirstName5 = document.getElementById('firstname5');
const SecondName5 = document.getElementById('secondname5');
const LastName5 = document.getElementById('lastname5');
const Age5 = document.getElementById('age5');
const Description5 = document.getElementById('description5');

    let getsimpsonsData = async ()=> {
        const response5 = await fetch(`${ApiUrl}simpsons/character/4`);
        const simpsons5 = await response5.json();
        console.log(simpsons5);
        const {firstName, secondName, lastName, age, description} = simpsons5;
        const photo = simpsons5;
        
        Photo5.src = photo;
        FirstName5.innerText = firstName;
        SecondName5.innerText = secondName;
        LastName5.innerText = lastName;
        Age5.innerText = age;
        Description5.innerText = description;
    
    };
    
    getsimpsonsData();

    //

const Photo6 = document.getElementById('photo6');
const FirstName6 = document.getElementById('firstname6');
const SecondName6 = document.getElementById('secondname6');
const LastName6 = document.getElementById('lastname6');
const Age6 = document.getElementById('age6');
const Description6 = document.getElementById('description6');

    let getsimpsonsData = async ()=> {
        const response6 = await fetch(`${ApiUrl}simpsons/character/5`);
        const simpsons6 = await response6.json();
        console.log(simpsons6);
        const {firstName, secondName, lastName, age, description} = simpsons6;
        const photo = simpsons6;
        
        Photo6.src = photo;
        FirstName6.innerText = firstName;
        SecondName6.innerText = secondName;
        LastName6.innerText = lastName;
        Age6.innerText = age;
        Description6.innerText = description;
    
    };
    
    getsimpsonsData();

    //

const Photo7 = document.getElementById('photo7');
const FirstName7 = document.getElementById('firstname7');
const SecondName7 = document.getElementById('secondname7');
const LastName7 = document.getElementById('lastname7');
const Age7 = document.getElementById('age7');
const Description7 = document.getElementById('description7');

    let getsimpsonsData = async ()=> {
        const response7 = await fetch(`${ApiUrl}simpsons/character/6`);
        const simpsons7 = await response7.json();
        console.log(simpsons7);
        const {firstName, secondName, lastName, age, description} = simpsons7;
        const photo = simpsons7;
        
        Photo7.src = photo;
        FirstName7.innerText = firstName;
        SecondName7.innerText = secondName;
        LastName7.innerText = lastName;
        Age7.innerText = age;
        Description7.innerText = description;
    
    };
    
    getsimpsonsData();


