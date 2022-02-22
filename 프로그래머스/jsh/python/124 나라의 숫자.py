# 올바른 풀이
def solution(n):
    answer = ''
    while n:
        if n%3 != 0:
            answer += str(n%3)
            n //= 3
        else:
            answer += "4"
            n = n // 3 - 1
    return answer[::-1]

# 효율성 테스트 통과 x
# 원인 : n이 50억 이하의 자연수 이므로 완전 탐색을 하면 안됨
# dp 이용
def solution2(n):
    answer = ''
    # dp = ["0" for _ in range(n+1)]
    # dp[0] = "0"
    if n == 1 or n == 2: return str(n)
    if n == 3: return str(4)
    # dp[1] = "1"
    # dp[2] = "2"
    # dp[3] = "4"
    #for i in range(4, n+1):
    while n:
        if n%3 != 0:
            answer += str(n%3)
            n //= 3
            #dp[i] = str(dp[i//3]) + str(dp[i%3])
        else:
            answer += "4"
            n = n // 3 -1
            #dp[i] = str(dp[(i//3) - 1]) + str("4")  
    #answer = str(dp[n])
    return answer