/*jshint esversion: 6*/
const stackChecker = (input) => {
  const parentheses = "()[]<>{}";
  const stack = [];
  let i;
  let char = input[i];
  let position;
  for(i = 0; i < input.length; i++) {
    char = input[i];
    position = parentheses.indexOf(char);

    if(position % 2 === 0) {
      stack.push(position + 1); // push next expected brace position
    } else {
      if(stack.length === 0 || stack.pop() !== position) {
        return false;
      }
    }
  }

  return stack.length === 0;
};