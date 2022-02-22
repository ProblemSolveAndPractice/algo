let len = 0;
let answer = 0;
const dfs = (count, num, numbers, target) => {
  if (count === len) {
    num === target ? answer++ : null;
    return;
  }
  count++;
  const arr = [numbers[count], -numbers[count]];
  arr.forEach((next) => dfs(count, num + next, numbers, target));
};

function solution(numbers, target) {
  len = numbers.length - 1;
  dfs(0, numbers[0], numbers, target);
  dfs(0, -numbers[0], numbers, target);
  return answer;
}
