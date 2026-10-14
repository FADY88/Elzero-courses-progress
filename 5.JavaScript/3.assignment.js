let theTitle = "Elzero",
  desc = "Elzero Web School",
  date = "25/10";
let markup = `
  <div>
    <h3>Hello ${theTitle}</h3>
    <p>${desc}</p>
    <span>${date}<span>
  </div>
`;
document.write(markup.repeat(4));

let a = 10,
  b = 20;
console.log(a.toString() + b.toString());
console.log(typeof (a.toString() + b.toString()));

console.log(`${a}${b}`);
console.log(typeof `${a}${b}`);

console.log(a.toString() + "\n" + b.toString());
console.log(`${a}\n${b}`);

// assignment 2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
// assignment 3
/*
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``
*/
let x =
  '`I\'m In\n\\\\\nLove \\\\ """ \'\'\'\n++ With ++\n\\"""\\"""\n""JavaScript""``';
console.log(x);
// assignment 4
console.log(`_` + `${a}_${b}`.repeat(4) + `_`);
