const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];
let by = 0;
let bx = 0;
let check = [];
let flag = false;

const boundary = (y, x) => y < 0 || y >= by || x < 0 || x >= bx;
const getVisited = (row, col) =>
  Array.from(Array(row), () => Array(col).fill(false));

const bfs = (y, x, arr) => {
  check[y][x] = true;
  const node = { y, x, count: 0 };
  const q = [node];
  while (q.length !== 0) {
    const curNode = q.shift();
    const cy = curNode.y;
    const cx = curNode.x;
    const count = curNode.count;
    if (count > 2) return;
    if (count > 0 && count <= 2 && arr[cy][cx] === "P") {
      flag = true;
      return;
    }
    for (let i = 0; i < 4; i++) {
      let ny = cy + dy[i];
      let nx = cx + dx[i];
      if (boundary(ny, nx) || check[ny][nx] || arr[ny][nx] === "X") continue;
      check[ny][nx] = true;
      const nextNode = { y: ny, x: nx, count: count + 1 };
      q.push(nextNode);
    }
  }
  return;
};

function solution(places) {
  let answer = [];
  for (let i = 0; i < places.length; i++) {
    const newPlace = places[i].map((str) => str.split(""));
    by = newPlace.length;
    bx = newPlace[0].length;
    check = getVisited(by, bx); // row , column
    flag = false;

    for (let j = 0; j < by; j++) {
      for (let k = 0; k < bx; k++) {
        if (newPlace[j][k] === "P") bfs(j, k, newPlace);
        if (flag) break;
      }
      if (flag) break;
    }
    flag ? answer.push(0) : answer.push(1);
  }
  return answer;
}

console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);
