//call back
function formValidation() {
    setTimeout(() => {
            console.log("Form validation called");
            formValidationCompleted();
    }, 1000);
}
function formValidationCompleted() {
    console.log("Form validation completed");
}
formValidation();

//promise base exapmle
function proBaseEg() {
    let prom = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("This is a base Eg for resolve");
            reject("This is a base Eg for reject");
        },1000);
    });
    console.log(
        prom.then((val) => {
            console.log(val);
        }).catch (val =>{
            console.log(val);
        })
    );
}
proBaseEg("reject");

//real-time base example
function locationFinder() {
    time = 2000
    loc = "SKCET"
    setTimeout(() => {
    
    },time);
}

isLocationFound = (loc,time) => {
    isLoc = "SKCT"
    if(loc === isLoc && time1 <= time) {        // time <= 2000
        return true;
    }
    else {
        return false;
    }
};

function locationFinder() {
    time1 = 2001;
    time = 2000;
    loc = "SKCET";
    return new Promise((locFound,locNotFound) => {
    setTimeout(() => {
        if(isLocationFound(loc,time)) {
            return locFound("Location Found")                  //should give return or not
        }
        else  {
            return locNotFound("Location Not Found")
        }
    },time);
    });
}
locationFinder()
.then((val) => {
    console.log(val);
})
.catch((val) => {
    console.log(val);
});

//Async/Await

async function a(){
    await b();
    setTimeout(()=>{
    console.log('add a');
    },2000); 
}
async function b(){
    await c();
   setTimeout(() => {
    console.log("add b");
   }, 1000);
}
async function c(){
    setTimeout(()=>{
        console.log('add c');
    },1000);
}
a();