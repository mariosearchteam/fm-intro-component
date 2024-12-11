const validator = new JustValidate(".intro__form");

validator.addField("#first-name", [
  {
    rule: "required",
    errorMessage: "First name cannot be empty",
  },
]);
validator.addField("#last-name", [
  {
    rule: "required",
    errorMessage: "Last name cannot be empty",
  },
]);
validator.addField("#email", [
  {
    rule: "required",
    errorMessage: "Email cannot be empty",
  },
  {
    rule: "email",
    errorMessage: "Looks like this is not an email",
  },
]);
validator.addField("#password", [
  {
    rule: "required",
    errorMessage: "Password cannot be empty",
  },
  {
    rule: "minLength",
    errorMessage: "Password must be at least 8 characters",
    value: 8,
  },
]);
