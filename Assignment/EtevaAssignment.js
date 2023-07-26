const List1=['Arjun', 'Adwait', 'Swapnil','Amit', 'Vishal', 'Adnan']; 
const List2=['Adwait','Laxman','Amit', 'Adnan','Nitin','Gaurav']; 

const newList1 = [];

for (let char of List1){
    if (!List2.includes(char)){
        newList1.push(char);
    }
}
console.log(newList1);

let newList2 = [];
for (let char of List2){
    if (!List1.includes(char)){
        newList2.push(char);
    }
}
console.log(newList2);

let newList3 = [];
for (let char of List1){
    if (List2.includes(char)){
        newList3.push(char);
    }
}
console.log(newList3);