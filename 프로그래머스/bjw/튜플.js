function comp(arr1, arr2) {
  return arr1.length > arr2.length;
}

function solution(s) {
  let answer = s.substring(1, s.length - 1).split("},");
  answer = answer
    .map((ans) => {
      let result = "";
      for (let i = 0; i < ans.length; i++)
        if (ans[i] !== "{" && ans[i] !== "}") result += ans[i];
      return result;
    })
    .map((ans) => ans.split(","));
  answer.sort(comp);
  return answer;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
