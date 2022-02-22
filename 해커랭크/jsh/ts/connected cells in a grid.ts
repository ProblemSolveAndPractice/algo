/*
 * Complete the 'connectedCell' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

const dx = [-1,1,0,0,1,1,-1,-1];
const dy = [0,0,1,-1,1,-1,1,-1];

function solve(x: number, y: number, check: number[][], matrix: number[][], count: number) {
    check[x][y] = count;
    for (let i=0; i<8; i+=1) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || nx >= check.length || ny < 0 || ny >= check[0].length) continue;
        if (matrix[nx][ny] === 1 && check[nx][ny] === 0) {
            solve(nx, ny, check, matrix, count);
        }
    }
}

function connectedCell(n: number, m: number, matrix: number[][]): number {
    // Write your code here
    let visited = Array.from(Array(n), () => Array(m).fill(0));
    let ans = Array.from({length: n*m}, () => 0);
    let cnt = 0;
    for (let i=0; i<n; i+=1) {
        for (let j=0; j<m; j+=1) {
            if(matrix[i][j] === 1 && visited[i][j] === 0) {
                solve(i, j, visited, matrix, ++cnt);
            }    
        }
    }
    
    for (let i=0; i<n; i+=1) {
        for (let j=0; j<m; j+=1) {
            ans[visited[i][j]] += 1;
        }
    }
    ans.shift();
    return Math.max.apply(null, ans);
}