const getEmployeeImportance = (employees, id) => {
    let sum = 0;
    const employee = employees.find(employee => employee[0] === id);
    sum += employee[1];

    // пробежаться по массиву подчиненных и для каждого делать рекурсию
    for (let subordinate of employee[2]) {
    	sum += getEmployeeImportance(employees, subordinate);
    }

    return sum
}

console.log(getEmployeeImportance([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1)); // 11