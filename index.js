// Code your solution in this file!
const returnFirstTwoDrivers = function(array1) {
    return array1.slice(0,2);
}

const returnLastTwoDrivers = function(array1) {
    return array1.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int) {
    return function FareMultiplier(fare) {
        return fare*int;
    };
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

const selectDifferentDrivers = function(array1,func) {
    return func(array1);
}
