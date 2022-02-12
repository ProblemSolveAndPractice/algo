/**
 * 프로그래머스 - 오픈채팅방 솔루션
 * https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript
 * 사용자 정보(uid, nickname)를 관리하는 Map 자료구조 사용
 * command에 따른 map update
 * 업데이트한 내용에 따라 command와 uid를 저장하고 탐색하면서 로그 저장
 * @param {*} record ["command, uid, nickname"] 형태의 문자열을 저장하는 배열 
 * @returns 최종 접속 로그를 반환
 */
function solution(record) {
  let answer = [];
  const userDB = new Map();
  const events = [];
  record.forEach(message => {
      const keywordList = message.split(' ');
      const [command, uid] = keywordList;
      if (command === "Enter" || command === "Change") {
          const nickname = keywordList[2];
          userDB.set(uid, nickname);
      }
      events.push([command, uid]);
      
  })
  events.forEach(event => {
      const [command, uid] = event;
      if (command === "Enter") {
          answer.push(`${userDB.get(uid)}님이 들어왔습니다.`);
      } else if (command === "Leave") {
          answer.push(`${userDB.get(uid)}님이 나갔습니다.`);
      }
  })
  return answer;
}