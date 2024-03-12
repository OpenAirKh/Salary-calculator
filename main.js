// function salary_month(salary,month){
  
//     return salary*month;
     
// }


// function salary_month_tax(salary,month,tax){
  
//     return salary * month % tax;
     
// }

// function result_all() {
   
//     let salary = document.getElementById('salary').value;
//     let month = document.getElementById('month').value;
    
   
//     let totalSalary = salary_month(salary, month);
    
   
//     document.getElementById('totalSalary').innerHTML =  totalSalary;
// }


// function salary_tax(salary,month,tax){

//     let salary = document.getElementById('salary_tax').value;
//     let month = document.getElementById('month_tax').value;
//     let tax = document.getElementById('tax').value;
//     let totalSalary_tax = salary_month_tax (salary,month,tax);
//     document.getElementById('totalSalary_tax').innerHTML =  totalSalary_tax;
// // console.log(salary);
// // console.log(month);
// // console.log(tax);

    
// }
// function salary_tax() {
//     let salary = parseFloat(document.getElementById('salary_tax').value);
//     let month = parseFloat(document.getElementById('month_tax').value);
//     let tax = parseFloat(document.getElementById('tax').value);
//     let totalSalary_tax = salary * month * (1 - tax / 100);
//     document.getElementById('totalSalary_tax').innerHTML =  totalSalary_tax;
// }

// function salary_tax() {
//     let salary = parseFloat(document.getElementById('salary_tax').value);
//     let month = parseFloat(document.getElementById('month_tax').value);
//     let tax = parseFloat(document.getElementById('tax').value);
//     let totalSalary_tax = salary_month_tax(salary, month, tax);
//     document.getElementById('totalSalary_tax').innerHTML =  totalSalary_tax;
// }
function salary_month(salary, month) {

return salary * month;

}


function salary_month_tax(salary, month, tax) {

    return salary * month * (1 - tax / 100);

}
let age = [] ;
    console.log(typeof(age));
function result_all() {
    let salary = document.getElementById('salary').value;
    let month = document.getElementById('month').value;
    let totalSalary = salary_month(salary, month);
    document.getElementById('totalSalary').innerHTML = totalSalary;

    // let salary_tax = document.getElementById('salary_tax').value;
    // let month_tax = document.getElementById('month_tax').value;
    // let tax_tax = document.getElementById('tax').value;
    // let totalSalary_tax = salary_month_tax(salary_tax, month_tax, tax_tax);
    // document.getElementById('totalSalary_tax').innerHTML = totalSalary_tax;
}

function salary_tax() {
   

    let salary_tax = document.getElementById('salary_tax').value;
    let month_tax = document.getElementById('month_tax').value;
    let tax_tax = document.getElementById('tax').value;
    let totalSalary_tax = salary_month_tax(salary_tax, month_tax, tax_tax);
    document.getElementById('totalSalary_tax').innerHTML = totalSalary_tax;
}