/**
 * a와 b의 최대공약수를 구하는 함수
 * @param {*} a number
 * @param {*} b number
 * @returns 최대 공약수를 반환 gcd(a,b) = gdc(b,r)
 */
function gcd(a, b) {
  while (b != 0) {
      const r = a % b;
      a = b
      b = r
  }
  return a;
}

/**
 * 프로그래머스 - 멀쩡한 사각형
 * @param {*} w 폭 (number)
 * @param {*} h 높이 (number)
 * @returns 선분이 지나가는 정사각형의 개수 공식
 */
function solution(w, h) {
  return (w*h) - (w+h - gcd(w,h));
}

/**
 * 기울기를 이용한 풀이
 * @param {*} w 폭 (number)
 * @param {*} h 높이 (number)
 * @returns 선분이 지나가는 정사각형의 개수 공식
 */
function solution2(w,h){
    const slope = h / w;
    let result = 0;

    for(let i = 1; i <= w; i++){
        result += Math.ceil(slope * i); // 1.2개의 직사각형을 지나간다 => 2개 지나간것으로 처리
    }

    return ((h * w) - result) * 2;
}