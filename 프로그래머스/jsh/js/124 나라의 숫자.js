/**
 * 프로그래머스 - 124 나라의 숫자
 * 3진법 개념을 이용
 * n이 50억 이하의 자연수 이므로 완전 탐색을 하면 안됨
 * n이 3으로 나눈 나머지에 따라 124 숫자 구성
 * @param {*} n 
 * @returns 
 */
function solution(n) {
  let answer = '';
  while(n > 0) {
      if(n%3) {
          answer += `${n % 3}`;
          n = parseInt(n / 3)
      } else {
          answer += "4";
          n =  parseInt(n / 3) - 1;
      }
  }
  return answer.split('').reverse().join('');
}