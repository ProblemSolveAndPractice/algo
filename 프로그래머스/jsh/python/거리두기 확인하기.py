def dfs(x,y,arr):
    dx, dy = [-1,1,0,0,1,1,-1,-1], [0,0,1,-1,1,-1,1,-1]
    for i in range(8):
        nx = x + dx[i]
        ny = y + dy[i]
        if nx < 0 or nx >= 5 or ny < 0 or ny >= 5: continue
        if arr[nx][ny] == 'P':
            if abs(nx - x) + abs(ny - y) == 2:
                if arr[nx][y] != 'X' or arr[x][ny] != 'X': return False
                return True
            return False
        if arr[nx][ny] == 'O' and abs(nx - x) + abs(ny - y) == 1:
            nnx, nny = nx + dx[i], ny + dy[i]
            if nnx < 0 or nnx >= 5 or nny < 0 or nny >= 5: continue
            if arr[nnx][nny] == 'P': return False
    return True
            
    
def solve(array):
    for i in range(len(array)):
        for j in range(len(array[i])):
            if array[i][j] == 'P':
                if dfs(i,j,array) == False: return False
    return True

def solution(places):
    answer = []
    for place in places:
        temp = []
        for string in place:
            temp.append(list(string))
        result = solve(temp)
        if result == False: answer.append(0)
        else: answer.append(1)
    return answer