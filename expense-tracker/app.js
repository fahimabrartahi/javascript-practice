let allExpenses=JSON.parse(localStorage.getItem("expenses")) || [];

function loadExpenses(){
    let list=document.getElementById("expenseList");
    for(i=0;i<allExpenses.length;i++){
        let item=document.createElement("li");
        item.innerText=allExpenses[i].expenseName+"-"+allExpenses[i].expenseAmount;
        list.appendChild(item);
    }
    total();
}

function inputExpense(){
    let name=document.getElementById("expenseName").value;
    let amount=document.getElementById("amount").value;
    let expense={expenseName: name, expenseAmount: amount};
    allExpenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(allExpenses));
    
    let list=document.getElementById("expenseList");
    let item=document.createElement("li");
    item.innerText=name+"-"+amount;
    list.appendChild(item);

    document.getElementById("expenseName").value="";
    document.getElementById("amount").value= "";
    total();
}

function total(){
    let total=0;
    for(i=0;i<allExpenses.length;i++){
        total=total+Number(allExpenses[i].expenseAmount);
    }
    document.getElementById("total").innerText=total;
}

loadExpenses();