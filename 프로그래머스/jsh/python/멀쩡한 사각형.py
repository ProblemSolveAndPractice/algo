import math
# 최대공약수 이용
# 선이 정수인 좌표를 지날때 각각 width, height를 gcd로 나눈 값의 배수가되는 특징
def solution(w,h):
    return (w*h) - (w+h - math.gcd(w,h))