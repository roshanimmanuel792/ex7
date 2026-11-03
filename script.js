// Ex.7 - Working with jQuery (CarePlus Medical Appointment System)
$(document).ready(function () {

  // 1. Budget calculator
  $("#evaluate").click(function () {
    let amount = parseFloat($("#amount").val());
    let rent = parseFloat($("#rent").val()) || 0;
    let acc = parseFloat($("#accessories").val()) || 0;
    let emg = parseFloat($("#emergency").val()) || 0;
    let save = parseFloat($("#saving").val()) || 0;
    let totalPercent = rent + acc + emg + save;

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    if (totalPercent != 100) {
      alert("The amount cannot be divided. Total percentage is " + totalPercent + "%, it should be 100%.");
      return;
    }

    $("#rentAmt").text("Rs." + (amount * rent / 100));
    $("#accAmt").text("Rs." + (amount * acc / 100));
    $("#emgAmt").text("Rs." + (amount * emg / 100));
    $("#saveAmt").text("Rs." + (amount * save / 100));
  });

  // 2. Prescription order bill
  $("#placeOrder").click(function () {
    let total = 0;
    $("#billRows").empty();

    $(".qty").each(function () {
      let qty = parseInt($(this).val()) || 0;
      if (qty > 0) {
        let price = parseInt($(this).data("price"));
        let amount = qty * price;
        total += amount;
        $("#billRows").append("<tr><td>" + $(this).data("name") + "</td><td>" + qty +
          "</td><td>Rs." + price + "</td><td>Rs." + amount + "</td></tr>");
      }
    });

    if (total == 0) {
      alert("Please enter the quantity for at least one item");
      $("#bill").hide();
      $("#noOrder").show();
      return;
    }
    $("#totalPrice").text("Rs." + total);
    $("#noOrder").hide();
    $("#bill").fadeIn(400);
  });

  // 3. Home visit van workshop
  let bodyColors = ["#ffffff", "#f1c24c", "#16263a", "#9ad9c4", "#c5d0da"];
  let glassTints = ["#9ad9c4", "#5d6f80", "#16263a", "#bcd7f0"];
  let bodyIndex = 0;
  let glassIndex = 0;
  let tyreSize = 54;

  $("#bodyBtn").click(function () {
    bodyIndex = (bodyIndex + 1) % bodyColors.length;
    $("#body, #cab").css("background-color", bodyColors[bodyIndex]);
  });

  $("#glassBtn").click(function () {
    glassIndex = (glassIndex + 1) % glassTints.length;
    $(".glass").css("background-color", glassTints[glassIndex]);
  });

  $("#tyreUp").click(function () {
    if (tyreSize < 78) {
      tyreSize += 6;
      $(".tyre").animate({ width: tyreSize, height: tyreSize }, 200);
    }
  });

  $("#tyreDown").click(function () {
    if (tyreSize > 36) {
      tyreSize -= 6;
      $(".tyre").animate({ width: tyreSize, height: tyreSize }, 200);
    }
  });

  $("#resetBtn").click(function () {
    bodyIndex = 0;
    glassIndex = 0;
    tyreSize = 54;
    $("#body, #cab").css("background-color", bodyColors[0]);
    $(".glass").css("background-color", glassTints[0]);
    $(".tyre").stop().css({ width: tyreSize, height: tyreSize });
  });

});
