// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

/**
 * This function calculates the product of two given integers
 */

function CalculateProduct () {
  // initializing variables for first and second integer and product
  let firstInt = parseInt(document.getElementById('f-int').value)
  let secInt = parseInt(document.getElementById('s-int').value)
  let product = 0;
  let response = "";
  // converting the integers to their absolute value
  let absFirstInt = Math.abs(firstInt);
  let absSecInt = Math.abs(secInt);
  // response for when user did not enter either or both factors
  if ((isNaN(firstInt)) || (isNaN(secInt))) {
    response = "Please enter valid integers."
  }
  // else to start the loop
  else {
    // while loop to calculate the product using repeated addition
    for (let counter = 0; counter < absSecInt; counter++) {
      // add the first integer to the product for each execution of the loop
      product = product + absFirstInt
    }
    // return to original value of integers and accordingly turn the product negative
    if (firstInt < 0) {
      product = product * -1
    }
    if (secInt < 0) {
      product = product * -1
    }
    // response for when user enters valid integers
    response = firstInt + " x " + secInt + " = " + product
  }
    
  // display list to user
  document.getElementById('results').innerHTML = response
}
