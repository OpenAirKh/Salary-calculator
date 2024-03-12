let age = [] ;
    console.log(typeof(age));
function result_all() {
    let salary = document.getElementById('salary').value;
    let month = document.getElementById('month').value;
    let totalSalary = salary_month(salary, month);
    document.getElementById('totalSalary').innerHTML = totalSalary;

    
}

function salary_tax() {
   

    let salary_tax = document.getElementById('salary_tax').value;
    let month_tax = document.getElementById('month_tax').value;
    let tax_tax = document.getElementById('tax').value;
    let totalSalary_tax = salary_month_tax(salary_tax, month_tax, tax_tax);
    document.getElementById('totalSalary_tax').innerHTML = totalSalary_tax;
}