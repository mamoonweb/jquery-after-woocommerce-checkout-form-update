jQuery(document.body).on("updated_checkout", function () {
  let radioValues = jQuery("input[name='payment_method']:checked").val();
  console.log(radioValues);
  if (radioValues == "bacs") {
    let fileVals = jQuery("input[name='wcj_checkout_files_upload_1']").val();
    if (fileVals == "") {
      jQuery("button#place_order").prop("disabled", true);
      jQuery(".form-row.place-order").after(
        "<p class='my-err-text'>Please Upload Your Payment Screenshot First!</p>"
      );
    } else {
      jQuery("button#place_order").prop("disabled", false);
    }
  }
  // Check Which Payment is Selected
  jQuery("input[name='payment_method']").change(function () {
    let radioValue = jQuery("input[name='payment_method']:checked").val();
    let fileVal = jQuery("input[name='wcj_checkout_files_upload_1']").val();
    if (radioValue == "bacs") {
      if (fileVal == "") {
        jQuery("button#place_order").prop("disabled", true);
        jQuery(".form-row.place-order").after(
            "<p class='my-err-text'></p>"
          );
        jQuery(".my-err-text").html(
          "<p class='my-err-text'>Please Upload Your Payment Screenshot First!</p>"
        );
      } else {
        jQuery("button#place_order").prop("disabled", false);
        jQuery(".my-err-text").remove();
      }
    } else {
      jQuery("button#place_order").prop("disabled", false);
      jQuery(".my-err-text").remove();
    }
  });

  // Check File Empty or Not
  jQuery("input[name='wcj_checkout_files_upload_1").change(function () {
    let fileVal = jQuery("input[name='wcj_checkout_files_upload_1']").val();
    if (fileVal == "") {
      jQuery("button#place_order").prop("disabled", true);
      jQuery(".form-row.place-order").after(
        "<p class='my-err-text'></p>"
      );
      jQuery(".my-err-text").html(
        "<p class='my-err-text'>Please Upload Your Payment Screenshot First!</p>"
      );
    } else {
      jQuery("button#place_order").prop("disabled", false);
      jQuery(".my-err-text").remove();
    }
  });
});
