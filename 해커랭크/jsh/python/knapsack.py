# https://www.hackerrank.com/challenges/unbounded-knapsack/problem
# DP
def unboundedKnapsack(n, k, arr):
    # Write your code here
    dp = [2001] * (k + 1)
    dp[0] = 0
    for i in range(n):
        for j in range(arr[i], k+1):
            if dp[j-arr[i]] != 2001:
                dp[j] = min(dp[j], dp[j-arr[i]] + 1)
    if dp[k] == 2001:
        return unboundedKnapsack(n, k-1, arr)
    return k