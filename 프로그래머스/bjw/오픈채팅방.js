function solution(record) {
  let recordSub = record.map((data) => data.split(" "));
  let recordSub2 = record.map((data) => data.split(" "));
  let changeName = recordSub.filter((data) => data[0] !== "Leave");
  changeName.forEach((data) => data.shift());
  let obj = Object.fromEntries(changeName);

  let answer = recordSub2
    .map((data) => {
      if (data[0] === "Enter") return `${obj[data[1]]}님이 들어왔습니다.`;
      else if (data[0] === "Leave") return `${obj[data[1]]}님이 나갔습니다.`;
    })
    .filter((data) => data !== undefined);

  console.log(answer);
  return answer;
}
