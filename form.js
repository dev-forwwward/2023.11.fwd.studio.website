var $form = $("form-contact-page");
var $form2 = $("form-webflow-page");
$.validator.addMethod("letters", function (value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
});
$.validator.addMethod("customEmail", function (value, element) {
  return (
    this.optional(element) || /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(value)
  );
});

$form.validate({
  rules: {
    contactname: {
      required: true,
      minlength: 3,
      letters: true
    },
    contactrole: {
      required: true,
      minlength: 3,
      letters: true
    },
    youremail: {
      required: true,
      email: true,
      customEmail: true // Add the customEmail validation
    },
    companyname: {
      required: true,
      minlength: 5,
      letters: true
    },
    companycontactname: {
      required: true,
      minlength: 5,
      letters: true
    },
    companyemail: {
      required: true,
      email: true
    }
  },
  messages: {
    contactname: "Please specify your name",
    contactrole: "Please specify your role",
    youremail:
      "Please specify a valid email address using the format user@example.com",
    companyname: "Please add your company's name",
    companycontactname: "Please add a person to contact",
    companyemail: "Please specify a valid email address"
  }
});


$form2.validate({
  rules: {
    youremail: {
      required: true,
      email: true,
      customEmail: true // Add the customEmail validation
    }
  },
  messages: {
    youremail:
      "Please specify a valid email address using the format user@example.com 222",
  }
});

