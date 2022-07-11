//Function myCalc is executed on submit button onClick
function myCalc() {
    //Get the numbers and the value of the select option
    var getNum1 = document.getElementById('num1').value;
    var getNum2 = document.getElementById('num2').value;
    var getValue = document.getElementById('selectMath').value;
      //Use the value of getValue to run the 4 different math operations
      // input error if not a whole integer. UPDATE!
      //UPDATE!! use step="any" in the <input> type to fix this!!
      //UPDATE.... UMH Yeah so there is no error when inputting
      //A decimal but the calculator math is not right.
      //i tried using eval() in the total but didn't work, just added together the 
      //two numbers as a string UPDATE! parseInt cannot be used for decimal input!
      //UPDATE!!!! parseFloat works!! toFixed(8) rundar av resultat!
      if (getValue == 'add' ) { 
          var totalParse = parseFloat(getNum1) + parseFloat(getNum2);
          var total = totalParse.toFixed(2);
          var status = getNum1 + " + " + getNum2;
            document.getElementById('status').innerHTML = status;
            document.getElementById('answer').innerHTML = "= " + total;   
      } else if (getValue == 'minus' ) {
          var totalParse = parseFloat(getNum1) - parseFloat(getNum2);
          var total = totalParse.toFixed(2);
          var status = getNum1 + " - " + getNum2;
            document.getElementById('status').innerHTML = status;
            document.getElementById('answer').innerHTML = "= " + total; 
      } else if (getValue == 'multiply' ) {
          var totalParse = parseFloat(getNum1) * parseFloat(getNum2);
          var total = totalParse.toFixed(2);
          var status = getNum1 + " * " + getNum2;
            document.getElementById('status').innerHTML = status;
            document.getElementById('answer').innerHTML = "= " + total;
       } else {
          var totalParse = parseFloat(getNum1) / parseFloat(getNum2);
          var total = totalParse.toFixed(2);
          var status = getNum1 + " / " + getNum2;
            document.getElementById('status').innerHTML = status;
            document.getElementById('answer').innerHTML = "= " + total;
       }           
  }
  //Works fine but if NaN is input, will display NaN which could be imporoved.
  //Possibly function above could be written using less code but OK for now...

  /*NINJA NOTES

  A var outside a function can be used inside
  a function but not the other way around 
  unless the function returns result and
  then that result can be stored outside...

  Ninja uses document.querySelector('#div')
  HTML refreshes after submit...so unsubmit
  needs to be on button... not form
  
  .value used

  selectMath he used: (select.options[select.selectedIndex].value)

  do not use eval() !!!!!!'
  
  Ninja 4 different math:
  var = calculatedanswer;
  
  if(selectMath == 'add') {
    return num1 + num2;
    thecalculatedanswer = num1 + num2;
  } else if (selectMath == 'minus') {
    return num1 - num2;
    thecalculatedanswer = num1 - num2;
  } else if (selectMath == 'multiply') {
    return num1 * num2;
    thecalculatedanswer = num1 * num2;
  } else if (selectMath == 'divide') {
    return num1 / num2;
    thecalculatedanswer = num1 / num2;
  } else {
    alert('please select an operator');
    thecalcanswe ="invalived operator"
  }
  */
  // this is otuside of function
  //answer.innerHTML = thecalculatedanswer;
  //If calculatedanswer is defined for all results, less lines can be used