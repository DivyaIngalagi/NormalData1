console.log("Ajax tutorial in one video");

// let fetchBtn=document.getElementById('fetchBtn');
// fetchBtn.addEventListener('click',buttonClickHandler);



// function buttonClickHandler(params) {
//     console.log("clicked button");
//     //instatiate an xhr object
//     const xhr=new XMLHttpRequest();
//     //open the object
//     // xhr.open('GET','divya.txt',true);
//     // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
//     //POST
//     xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
//     xhr.getResponseHeader('Content-type','application/json');//to show url mai hi baje rha hu apna form kha data
//     //what to do on progress(optional)
// xhr.onprogress=function(){//apply fpr loaders and spinners
//     console.log("on progress");
// }

// // xhr.onreadystatechange=function(){//till we show spiner and wait for code 4
// //     console.log("ready state is",xhr.readyState);//0 1 2 3 4
// // }
// //or
// //what to do when response is ready
// //this means in 4
// xhr.onload=function(){
//     if(this.status==200){
//     console.log(this.responseText);
//     }else{
//         console.error("Some Error Occured");
//     }
// }

// //send the request
// para=`{"name":"divya786123","salary":"123","age":"23"}`;	

// xhr.send(para);
// // xhr.send();
// console.log("We Are Done");//block example
// }

let popBtn=document.getElementById('popBtn')
popBtn.addEventListener('click',popHandler);
function popHandler(){
    console.log("You have clicked the popHandler");
    //instatiate an xhr object
    const xhr=new XMLHttpRequest();
    //open the object
    // xhr.open('GET','divya.txt',true);
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);
    


// xhr.onreadystatechange=function(){//till we show spiner and wait for code 4
//     console.log("ready state is",xhr.readyState);//0 1 2 3 4
// }
//or
//what to do when response is ready
//this means in 4
xhr.onload=function(){
    if(this.status==200){
    let obj=JSON.parse(this.responseText);
    console.log(obj);
    str="";
    let list=document.getElementById('list');
    for(key in obj){
        str+="<li>"+obj[key].employee_name+"</li>";
    }
    list.innerHTML=str;
    }else{
        console.error("Some Error Occured");
    }
}

xhr.send();
console.log("We are Done!!!!!");
}