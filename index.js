// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// upperCaseCustomerName(customerName);

function setBestCustomer() {
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'April';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'May';
}