import re
from itertools import permutations

def calculate(case, sentence, cnt):
    result = 0
    print(sentence)
    if cnt == 2: return str(eval(sentence))
    if case[cnt] == '*':
        result = eval('*'.join([calculate(case, e, cnt+1) for e in sentence.split('*')]))
    elif case[cnt] == '-':
        result = eval('-'.join([calculate(case, e, cnt+1) for e in sentence.split('-')]))
    elif case[cnt] == '+':
        result = eval('+'.join([calculate(case, e, cnt+1) for e in sentence.split('+')]))
    return str(result)
    
def solution(expression):
    answer = 0
    # 연산자 추출
    num = re.compile(r'\d+')
    specialList = list(set(list(num.sub('', expression))))
    caseList = list(permutations((specialList), len(specialList)))
    for case in caseList:
        # print(case)
        result = int(calculate(case, expression, 0))
        answer = max(abs(result), answer)
    return answer