var f1 = function () {
  console.log("original function f1");
};

f1();

var f2 = function () {
  console.log("original function f2");
};

f2();

f1 = f2;
f1();
