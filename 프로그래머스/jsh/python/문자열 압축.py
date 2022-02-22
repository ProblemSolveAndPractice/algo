# 문자열 압축
# 문자열 슬라이싱 이용
def solution(s):
    # ex: s = "aabbaccc"
    answer = len(s)
    for i in range(1, len(s) // 2 + 1): # 문자열 잘라봤자 절반까지만 자를 수 있음
        sliceUnit = s[:i]  # a, aa, aab ...
        res = ""
        # print(sliceUnit)
        cnt = 1
        for j in range(i, len(s) + i, i):
            # print(s[j:j+i]) # a, ab, abb, ...
            if sliceUnit == s[j:j+i]: cnt += 1
            else : 
                if cnt == 1: res += sliceUnit
                else : res += str(cnt) + sliceUnit
                sliceUnit = s[j:j+i]
                cnt = 1

            #print(res)
        answer = min(answer, len(res))
    return answer