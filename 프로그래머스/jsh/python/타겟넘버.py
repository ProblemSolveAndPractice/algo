total = 0
def dfs(numbers, target, sum_, n):
    global total
    if n == len(numbers):
        if sum_ == target:
            total += 1
        return
    
    dfs(numbers, target, sum_ + numbers[n], n+1)
    dfs(numbers, target, sum_ - numbers[n], n+1)
    
def solution(numbers, target):
    answer = 0
    # 타켓 넘버 만들기
    dfs(numbers, target, numbers[0], 1) # 더하거나
    dfs(numbers, target, -numbers[0], 1) # 빼서
    answer = total
    return answer