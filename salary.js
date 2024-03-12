
function result_all() {


    const salary = document.getElementById('salary').value;
    const month = document.getElementById('month').value;
    const totalSalary = salary_month(salary, month);
    document.getElementById('totalSalary').innerHTML = totalSalary;

    
}

function salary_tax() {
   

    const salary_tax = document.getElementById('salary_tax').value;
    const month_tax = document.getElementById('month_tax').value;
    const tax_tax = document.getElementById('tax').value;
    const totalSalary_tax = salary_month_tax(salary_tax, month_tax, tax_tax);
    document.getElementById('totalSalary_tax').innerHTML = totalSalary_tax;
   
}

