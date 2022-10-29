var flight;
var passenger;
var total;
var flightSrNo;
var checker1 = false;
var currentSrNo = 10;
var flsrno = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var flightNumbers = ["4563", "8205", "5455", "2853", "2956", "2653", "5959", "2468", "5012", "1752"];
var flnm = ["Indian Airlines", "Aero Float", "Emirates", "Lufthansa", "Singapore Air", "Etihad Airways", "Turkish Airlines", "American Airlines", "Thai Airways", "Qatar Airways"];
var flsrc = ["Delhi", "Kolkata", "Mumbai", "Chennai", "Goa", "Cochin", "Pune", "Assam", "Jaipur", "Mumbai"];
var fldst = ["London", "Moscow", "Dubai", "Berlin", "Singapore", "Abu Dhabi", "Istanbul", "New York", "Bangkok", "Al Khor"];
var prices = [40000, 30000, 20000, 35000, 20000, 20000, 25000, 45000, 20000, 25000];
$(document).ready(function() {
  ///////////Adding html and making the flight list visible///////

  for (var i = 0; i <= flsrno.length; i++) {
    $(".flightNo" + (i + 1) + ".srno").text(flsrno[i]);
    $(".flightNo" + (i + 1) + ".flno").text(flightNumbers[i]);
    $(".flightNo" + (i + 1) + ".flnm").text(flnm[i]);
    $(".flightNo" + (i + 1) + ".flsrc").text(flsrc[i]);
    $(".flightNo" + (i + 1) + ".fldst").text(fldst[i]);
    $(".flightNo" + (i + 1) + ".flprc").text("₹" + prices[i]);
  }

  ////////////////////Main Program//////////////////////////////
  $("body").hide();
  $("body").fadeIn(1000);
  $("h2").fadeOut(10000);
  $("#moreflights").hide();
  $("#enterPassengers").hide();
  $("#reFlightNo").hide();
  $("#rePassNo").hide();
  $("#extraStuff").hide();
  $("#confirm").hide();
  $("#flightNoBtn").on("click", function() {
    flight = $("#fNo").val();
    mainsystem(flight);
  });
  $(".flight").on("click", function() {
    flight = $(this).attr('id');
    mainsystem(flight);
  });

  function mainsystem(flightnum) {
    if (flight == "list") {
      $('.flight').fadeIn(1000);
      $(".choosehead").fadeIn(500);
    } else if (flight > 0) {
      var test = false;
      for (var i = 0; i < flightNumbers.length; i++) {
        if (flightNumbers[i] == flight) {
          flightSrNo = i;
          console.log(flightSrNo);
          test = true;
          break;
        }
      }
      if (test === false) {
        $("#returnError").html('<p class="text-danger text-center">Flight not found!</p>');
        $('.flight').fadeIn(1000);
        $(".choosehead").fadeIn(500);
      } else {
        $("#returnError").html("");
        var no = "#" + flight;
        $('.flight').not(no).slideUp(1000);
        $(no).fadeIn(1200);
        $(".choosehead").fadeOut(500);
        $("#enterFlightNo").fadeOut(500);
        $("#enterPassengers").fadeIn(500);
        $("#reFlightNo").show().on("click", function() {
          $("#enterFlightNo").fadeIn(500);
          $("#reFlightNo").hide();
          $("#enterPassengers").hide();
          $("#rePassNo").hide();
          $("#extraStuff").hide();
          $("#confirm").hide();
          $("#returnError2").html('');
        });

        $("#passengerBtn").on("click", function() {
          passenger = $("#passNo").val();
          if (passenger <= 0) {
            $("#returnError2").html('');
            $("#returnError2").html('<p class="text-danger text-center">Invalid number of passengers!</p>');
          } else if (passenger > 200) {
            $("#returnError2").html('');
            $("#returnError2").html('<p class="text-danger text-center">Number of passengers you input exceeds flight capacity of 200 !</p>');
          } else if (passenger > 0 && passenger <= 200) {
            total = prices[flightSrNo] * passenger;
            $("#passengerNames").show();
            // $("#returnError2").html('<p class="confirmation text-center">That will cost you a total of &#8377;' + total + '</p>');
            $("#enterPassengers").fadeOut(300);
            // $("#rePassNo").fadeIn(400).on("click", function() {
            //   $("#rePassNo").hide();
            //   $("#extraStuff").hide();
            //   $("#confirm").hide();
            //   $("#enterPassengers").fadeIn(300);
            //   $("#extraStuff").reset();
            //   $('#Bclass').attr('checked', false);
            // });;
            $("#reFlightNo").hide();
            // $("#extraStuff").show();
            
            $("#confirm").show();
            $(".yourTotal").html("");
            total = prices[flightSrNo] * passenger;
            $(".yourTotal").html("Your total amount: ₹" + total);
            $("#Bclass").click(function() {
              
    if ($("#Bclass").is(':checked')) {
                
                var additionalPrice = 5000 * passenger;
                total = (prices[flightSrNo] * passenger) + additionalPrice;
                $(".yourTotal").html("");
                $(".yourTotal").html("Your total amount: ₹" + total);
              } else {
                var additionalPrice = 5000 * passenger;
                total = total- additionalPrice;
                $(".yourTotal").html("");
                $(".yourTotal").html("Your total amount: ₹" + total);
              }
  
              
              
            });
            $("#getFood").click(function() {
              if ($("#getFood").is(':checked')) {
                var additionalPrice = 850 * passenger;
                total = total + additionalPrice;
                $(".yourTotal").html("");
                $(".yourTotal").html("Your total amount: ₹" + total);
              } else {
                var additionalPrice = 850 * passenger;
                total = total - additionalPrice;
                $(".yourTotal").html("");
                $(".yourTotal").html("Your total amount: ₹" + total);
              }

            });

          } else {
            $("#returnError2").html('');
            $("#returnError2").html('<p class="text-danger text-center">Invalid number of passengers!</p>');
          }
        });

      }
    }
  }
  ///Starting of more flight system:

  $(".morefl").on("click", function() {
    $(".flight").fadeOut(800);
    $(".inputs").fadeOut(800);
    $("#moreflights").show(1000);
  });

  var fromCity = $("#fromCity").val();
  var toCity = $("#toCity").val();
  $("#searchFlight").on("click", function() {
    if ($('#fromCity').val() == '') {
      $("#returnError3").html("");
      $("#returnError3").html('<p class="text-danger text-center">City name cannot be blank</p>');
    } else if ($('#toCity').val() == '') {
      $("#returnError3").html("");
      $("#returnError3").html('<p class="text-danger text-center">City name cannot be blank</p>');
    } else if ($('#enteredName').val() == '') {
      $("#returnError3").html("");
      $("#returnError3").html('<p class="text-danger text-center">Flight Name cannot be blank!</p>');
    } else {
      $("#returnError3").html("");
      fromCity = $("#fromCity").val();
      toCity = $("#toCity").val();
      var newFlightNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      var newSrno = currentSrNo + 1;
      currentSrNo = newSrno;
      var newFlight = $("#enteredName").val();
      var randomPrice = $("input[name='myRadio']:checked").val();
      console.log(randomPrice);
      if (randomPrice == "int") {
        randomPrice = (Math.floor(Math.random() * (50 - 15 + 1)) + 15) * 1000;
      } else if (randomPrice == "dom") {

        randomPrice = (Math.floor(Math.random() * (12 - 2 + 1)) + 2) * 1000;
      }

      ////PUSHING EVERYTHING!!!

      flsrno.push(newSrno);
      flightNumbers.push(newFlightNumber);
      flnm.push(newFlight);
      flsrc.push(fromCity);
      fldst.push(toCity);
      prices.push(randomPrice);

      //Done pushing :P

      $(".allFlights").append('<div class="row flight"' + newFlightNumber + '" id="' + newFlightNumber + '"><div class="col-sm-2"><h5 class="text-center srno flightNo' + newSrno + '">' + newSrno + '</h5></div><div class="col-sm-2"><h5 class="text-center flno flightNo' + newSrno + '">' + newFlightNumber + '</h5></div><div class="col-sm-2"><h5 class="text-center flnm flightNo' + newSrno + '">' + newFlight + '</h5></div><div class="col-sm-2"><h5 class="text-center flsrc flightNo' + newSrno + '">' + fromCity + '</h5></div><div class="col-sm-2"><h5 class="text-center fldst flightNo' + newSrno + '">' + toCity + '</h5></div><div class="col-sm-2"><h5 class="text-center flprc flightNo' + newSrno + '">₹' + randomPrice + '</h5></div></div>');
      $(".flight").show();
      $(".inputs").show();
      $("#moreflights").hide();
      $("#returnError4").html("");
      $(".flight").click(function() {
        flight = $(this).attr('id');
        mainsystem(flight);
        console.log(flight);
      });
      $("#returnError4").html('<p class="text-info text-center"> 1 flight was found!');
      $("#returnError4").fadeOut(3000);
      $("#returnError4  ").html("");
    }

  });
  //End of more flight system
  
  //Passenger Names:
  for(var i=0;i<passenger;i++){
    $("#passengerNames").append('<div class="row"><div class="col-sm-6"><p class="text-right">Enter Passenger '+(i+1)+'\'s full name : </p></div><div class="col-sm-6"><input id="pNm" class="text-center" type="text" name="pName" placeholder="Full Name eg:Bill Gates"><br></div></div>');
  }
  
  
  
  
  
  
});