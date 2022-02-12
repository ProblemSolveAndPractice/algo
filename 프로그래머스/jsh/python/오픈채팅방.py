def solution(record):
    answer = []
    # DB개념으로 딕셔너리 자료형 사용 (Map)
    userDB = dict()
    events = []
    for message in record:
        keywordList = message.split(' ');
        command, uid = keywordList[0], keywordList[1]
        # Enter Change command 상관없이 DB를 업데이트
        if command == "Enter" or command == "Change":
            nickname = keywordList[2]
            userDB[uid] = nickname
        events.append((command, uid))
    
    for event in events:
        command, uid = event[0], event[1]
        if command == "Enter":
            answer.append(f'{userDB[uid]}님이 들어왔습니다.')
        elif command == "Leave":
            answer.append(f'{userDB[uid]}님이 나갔습니다.')
    
    return answer