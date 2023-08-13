let reg_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

console.log("matthew-hurst@gmail.com",reg_email.test("matthew-hurst@gmail.com"))
console.log("matthew--hurst@gmail.com", reg_email.test("matthew--hurst@gmail.com"))
console.log("matt@gmail.website",reg_email.test("matt@gmail.website"))
console.log("matt@gmail",reg_email.test("matt@gmail"))
console.log("matthewhurst@gmail.com",reg_email.test("matthewhurst@gmail.com"))