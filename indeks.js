// let name = "Касымалы"
// let name1 = name.slice(0,3).toLowerCase()
// let name2 = name.slice(3).toUpperCase()
// alert(name1 + name2)


// let secondsInMin = 60
// let minInHour = 60
// let hourInDay = 24
// let secondsInDay = secondsInMin * minInHour * hourInDay 
// alert(secondsInDay)
// console.log(secondsInDay)


// let name = "эй,как дела?"
// let name1 = name.slice(1).toLowerCase()
// let name2 = name.slice(0,1).toUpperCase()
// alert(name2 + name1) 


// let cars = ["Tesla","Audi","Mers","Honda"]
// cars.pop()
// cars.shift()
// console.log(cars)


// let arr = [34,true,23,[23,34,53]]
// arr[3][2]
// console.log(arr[3][2])


// let arr1 = [67434]
// let arr2 = [142344]
// let arr3=arr1.concat(arr2)
// alert(arr3)
// console.log(arr3)


// let colors=["Зелёный","Белый","Красный"]
// alert(colors.join("-"))


// Math.random()*10
// Math.floor(Math.random()*10)
// alert(Math.floor(Math.random()*10))


// let randomBodyParts = ["красивая", "чудная", "прелесная"]
// let randomAdjectives = ["сон", "океан", "принцесса"]
// let randomWords = ["(｡◕‿◕｡)", "(｡◕‿◕｡)"]
// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)]
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)]
// let randomWord = randomWords[Math.floor(Math.random() * 2)]
// let randomInsult = "Ты " + randomBodyPart + " как " +
// randomAdjective + " " + randomWord + "!"
// alert(randomInsult)



// let user={
// name:"Касымалы",
// age:16
// }
// console.log(user.name)
// console.log(user.age)
// console.log(user)


// let kar = {}
// kar.name="Хонда"
// kar.err="2004"
// kar.spit="160км/ч"
// kar.obi="2.3"
// kar.color="Чёрный"
// console.log(kar.color)



// let freicnds=[
// {name:"Байсултан",age:16},
// {name:"Азамат",age:17},
// ]
// let nam=('Это мои друзья')
// alert(nam+" "+freicnds[0].name+" "+freicnds[1].name)



// let part = prompt('Выберите апарат для себя:1,2,3,4')
// if (part == 1) {
    // alert('apple')
// } else if (part == 2){
    // alert('android')
// }
// else if (part == 3){
    // alert('samsung')
// } else{
    // alert('Вы ввели не правильно цифры')
// }

// let name = prompt('Введите своё имя?')
// if  (name === 'Касымалы'){
    // alert('Привет Касымалы')
// } else{
    // alert('Привет незнакомец')
// }


// let name = prompt('Введите имя')
// if (name == 'Касымалы' || name == 'Данияр'){
    // alert('Привет' + name)
// } else {
//    alert('Сен кимсин?')
// }

// for(let i = 0; i < 10; i++){
//     console.log('Мы поссчитали'+ i + 'с помощью for')
// }



// for (let i = 3; i < 300000; i = i *3){
//     console.log(i)
// }


//  let food = ['Warface','Dota 2','Counter Strike','GTA 5']

//  for(let i = 0; i < food.length; i++){
//      alert('Моя любимая игра ' + food[i])
//  } 








        //    Задача js

//  function func(){
//   alert('Касымалы')  }
//  func();


// for(let i = 1;i < 100; i++){
//     alert(i)
// }



// let coube = prompt("Число для куба") 
// function func(){
//     alert(coube * coube* coube);
// }
// func();


//  function minys(num){
//      if(num>0) {
//    alert("+++");
//    }
//      else alert("---");
// }
// minys(-5);
// minys(18);
// minys(522222);


//  function func(num1, num2, num3) {
//  	alert(num1 + num2 + num3);
//  }

//  func(764, 6, 7);



//  function sum (num1,num2,num3){
//      alert(num1+num2+num3);
//      }
//      let param1 = 764;
//      let param2 = 6;
//      let param3 = 7;
//   sum(param1,param2,param3);



//  function func(num = 5) {
// 	alert(num * num);
//  }
//  func(2);//4
//  func(3);//9
//  func();//25    



// function func(num1 , num2) {
// 	alert(num1 + num2);
// }
// func(2, 3);//5
// func(3);//3
// func();//0


// function coube (num) {
//     return Math.pow(num,3);
//     }
//     let result = coube(3);
//     alert(result);



// function sqrt (num) {
//     return Math.sqrt(num);
//     }
//     alert(sqrt(3)+sqrt(4));


// function sqrt(num) {
//     return Math.sqrt(num);
//     }
    
//     function round(num) {
//     return num.toFixed(3);
//     }
//     alert(round(sqrt(2)));


// function sqrt(num) {
//     return Math.sqrt(num);
//     }
    
//     function sum(num1, num2, num3) {
//     return num1 + num2 + num3;
//     }
//     let result = sum(sqrt(2),sqrt(3),sqrt(4));
//     alert(result);


// function round(num) {
//     return num.toFixed(3);
//     }
//     function sqrt(num) {
//     return Math.sqrt(num);
//     }
    
//     function sum(num1, num2, num3) {
//     return num1 + num2 + num3;
//     }
//     let result = round(sum(sqrt(2),sqrt(3),sqrt(4)));
//     alert(result);


// function func(num) {
//     return num;
    
//     let result = num * num;
//     return result;
//     }
    
//     alert( func(3) );//3


// function func(num) {
//     if (num <= 0) {
//     return Math.abs(num);
//     } else {
//     return num * num;
//     }
//     }
    
//     alert( func(10) ); //100
//     alert( func(-5) );//5

// function func(num) {
//     if (num <= 0) {
//     return Math.abs(num);
//     }
    
//     return num * num;
//     }
    
//     alert( func(10) ); //100
//     alert( func(-5) );//5


// function func(num) {
//     let sum = 0;
    
//     for (let i = 1; i <= num; i++) {
//     sum += i;
//     }
//     return sum;
//     }
    
//     alert( func(5) );//15


// function func(num){
//     let i = 0;
//     while(true){
//     if(num<=10) return i;
//     num /= 2;
//     i++;
//     }
//     }
//     alert(func(300000000000));


// function func(num1, num2) {
//     if (num1 > 0 && num2 > 0) {
//     return num1 * num2;
//     } else {
//     return num1 - num2;
//     }
//     }
//     alert(func(3, 4));













// let animals = ["Кот","Рыба", "Лемур","Комоцский воран"];
// for (let i = 0; i < animals.length; i++) {
//     animals[i] = animals[i] +" - прекрасное животное";
// }
// console.log(animals)


// let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
//     alpho = '';
//     while (alpho.length < 8) {
//         alpho += alphabet[Math.floor(Math.random() * alphabet.length)]; 
//       }
//       alert (alpho);



// let words = [" программа"," маккака","прекрасный","олодушек"]

// let word = words [Math.floor(Math.random() * words.length)]
// alert(word)

// let ansverArray = []

// for (let i = 0; i < word.length; i++) {
//     ansverArray[i] = '_'
// }

// let remainingLetters = word.length

// while (remainingLetters > 0) {
//     alert(ansverArray.join(' '))
//     let gues = prompt('Угадай букву, или нажмите отмена для выхода из игры')
//     gues = gues.toLowerCase()
//     if (gues === null){
//         break
//     } else if (gues.length !== 1) {
//         alert('Пожалуйста, введите одну букву!')
//     } else{
//         for (let i = 0; i < word.length; i++) {
//             if (word[i] === gues) {
//                 ansverArray[i] = gues
//                 remainingLetters--
//             }
//         }
//     }
//  }

// alert(ansverArray.join(''))
// alert('Отлично! Было задано слово' + word )



// let numberoffilms = prompt('Сколько фильмов вы уже посмотрели?')

// personalMovieDB = {
//     cont:numberoffilms,
//     movies:{},
//     actors:{},
//     genres:{},
//     privat:false
// } 

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Один из последних просмотренных фильмов'),
//         b = prompt('На сколько оцените его?')
//         personalMovieDB.movies[a] = b
     
//  }
 
//  if (personalMovieDB.cont < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.cont >= 10  && personalMovieDB.cont < 30) {
//         console.log('Вы классический зритель');
// } else if (personalMovieDB.cont >= 30) {
//         console.log('Вы киноман');
// } else {
//         console.log('Произошла ошибка');
// }

// console.log(personalMovieDB.movies)


// function prinrText(text) {
//     alert('Мы написали ' + text)
// }
// let str = prompt('Введите текст?')
// prinrText(str)
// prinrText('Касымалы')


// function name() {
//     let name1 = prompt('Как тебя завут')
//     alert("Привет " + name1)
// }
// name()

// function double(a) {
//     return a * a
// }
// alert(double(double(2)))

//  let printCats = function(a) {
//      for (let i = 0; i < a; i++) {
//         console.log(i + '=^.^=')
//      }
//  }

//  printCats(10)

// let add = function (a, b) {
//      return a + b;
//    };
//  let multiply = function (a, b) {
//      return a * b;
//    };
//  alert(add (multiply(36325,9824), 777 ))

// let areArraysSame = function (arr1, arr2) {
//    if (arr1.length !== arr2.length) {
//       return false
//      }
  
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//          return false
//       }
//     }
//     return true
//    }
//  let result = areArraysSame([1,2,4,], [1,2,4,])
//  alert(result)


// let str = 'nurs, ilim,syltan'

// console.log(str.split('a'))


// let btn = document.querySelector('#btn')
// let btnc1 = document.querySelector('.btnclass')
// let btnteg = document.querySelector('buttom')

// 

// let list = document.querySelector('#ul')
// let header = document.createElement('h1')
// let header2 = document.createElement('li')
// let li1 = document.createElement('li')
// let li2 = document.createElement('li')

// list.style.border = '2px solid red'


// header.innerHTML = '<a href="">Hello world</a>'
// header.textContent = '<a href="">Hello world</a>'
// header2.innerHTML = 'Header after'
// li1.innerHTML = 'prepand li'
// li2.innerHTML = 'apendd li'

// list.before(header)
// list.after(header2)
// list.prepend(li1)
// list.append(li2)

// list.insertAdjacentHTML('beforebegin','<h1>header befort</h1>')
// list.insertAdjacentHTML('afterend','<h2>header befort</h2>')
// list.insertAdjacentHTML('afterbegin','<li>afterbegin</li>')
// list.insertAdjacentHTML('beforeend','<li>afterbegin</li>')

// let image = document.createElement('img')

// image.src = 'http://www.rosphoto.com/images/u/articles/1510/7_5.jpg'

// image.style.width = '370px'

// list.after(image)

// let p = document.createElement('p')
// p.innerHTML = 'csvwvwvwvwndvls lznlvlsnls'

// list.replaceWith(p)



// console.log(document.querySelector('#second').nextElementSibling.nextElementSibling)

// let btns = document.querySelectorAll('button')

// btns.forEach((btn) =>{
//     btn.addEventListener('click', () =>{
//         btn.previousElementSibling.style.background = 'red'
//     })
// })

// btns.forEach((btn) =>{
//     btn.addEventListener('dblclick', () =>{
//         btn.nextElementSibling.style.background = 'blue'
//     })
// })

        // 1
var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');
if (year != 2011){
    alert('А вот..');
    alert('..и неправильно!');
    }


    //    2
var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');
if (year < 2011) {
    alert('Это слишком рано..');
    }
else if (year > 2011) {
    alert('Это поздновато..');}
else {
    alert('Да, точно в этом году!');
    }


    //    3
var month_names = new Array("January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December");
var d = new Date();
var current_date = d.getDate();
var current_month = d.getMonth();
var current_year = d.getFullYear();
alert("day - "+current_date+" ; month - " +current_month + " ; year - "+current_year);
if (current_month ==0) {
alert('На дворе январь'+ " ; "+ month_names[current_month]);
}
else if (current_month == 1) {
alert(' На дворе февраль'+ " ; "+ month_names[current_month]);
}
else {
alert('Месяц науке не известен!');
}


    //   4
var access;
var access2;
var age = prompt('Сколько вам лет?', '');
if (age > 14) {
access = true;
}
else
{
access = false;
}
access2 = (age > 14) ? true : false;
alert("access = "+access+" ; access2 = "+ access2);


        //  5
var hour = prompt('Введите интересующий час работы');
var isWeekend = prompt('Сегодня выходной? (да – true; нет - false)');
if (hour < 10 || hour > 18 || isWeekend) {
alert('Офис до 10 или после 18 или в выходной закрыт');}