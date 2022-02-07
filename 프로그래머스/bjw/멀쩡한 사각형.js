let gcd = (n1, n2) => {
  while (n2 > 0) {
    let r = n1 % n2;
    n1 = n2;
    n2 = r;
  }
  return n1;
};

function solution(w, h) {
  let answer = 0,
    gcd_num = gcd(w, h);
  answer = (w - 1) * (h - 1) + (gcd_num - 1);
  return answer;
}
