#
# Complete the 'lilysHomework' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY arr as parameter.
#

def solve(arr):
    result = 0
    size = len(arr)
    sorted_arr = sorted(arr)
    dict_arr = {arr[i] : i for i in range(size)}
    #print(dict_arr)
    for i in range(size):
        if arr[i] == sorted_arr[i]: continue
        else :
            getIndex = dict_arr[sorted_arr[i]] # 3
            dict_arr[arr[i]] = dict_arr[sorted_arr[i]] # 2: 0 = 1: 0
            arr[getIndex], arr[i] = arr[i], arr[getIndex]
            #print(arr)
            result += 1
    return result

def lilysHomework(arr):
    # Write your code here
    reverse_arr = list(reversed(arr))
    return min(solve(arr), solve(reverse_arr))