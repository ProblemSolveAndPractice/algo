def solution(n, arr1, arr2):
    answer = []
    for num1, num2 in zip(arr1, arr2):
        binaryData = str(bin(num1 | num2))[2:]
        # 0붙이기
        # if len(binaryData) < n:
        #     binaryData = '0' * (n-len(binaryData)) + binaryData
        binaryData = binaryData.rjust(n, '0')
        binaryData = binaryData.replace('1', '#')
        binaryData = binaryData.replace('0', ' ')
        answer.append(binaryData)
    return answer

def failSolution(n, arr1, arr2):
  answer = []
  # 75점 (런타임에러)
  for i in range(n):
      num1 = arr1[i]
      num2 = arr2[i]
      binaryList1 = []
      binaryList2 = []
      while num1 != 0:
          binaryNum1 = num1 % 2
          num1 = num1 // 2
          binaryList1.append(binaryNum1)
          if num1 == 0 and len(binaryList1) != n:
              binaryList1.append(num1)
              while len(binaryList1) != n:
                  binaryList1.append(num1)
      binaryList1.reverse()
      # print(binaryList1)
          
      while num2 != 0:
          binaryNum2 = num2 % 2
          num2 = num2 // 2
          binaryList2.append(binaryNum2)
          if num2 == 0 and len(binaryList2) != n: 
              binaryList2.append(num2)
              while len(binaryList2) != n:
                  binaryList2.append(num2)
      binaryList2.reverse()
      # print(binaryList2)
      sharpOrEmpty = ""
      for j in range(n):
          resultOR = binaryList1[j] | binaryList2[j]
          if resultOR == 1: sharpOrEmpty += '#'
          else : sharpOrEmpty += ' '
      answer.append(sharpOrEmpty)
  return answer