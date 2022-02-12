/*
 * Complete the 'climbingLeaderboard' function below.
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

/**
 * ranked 배열 Set으로 중복제거
 * @param {*} ranked INTEGER_ARRAY 무조건 내림차순
 * @param {*} player INTEGER_ARRAY 무조건 오름차순
 * ranked 배열은 앞에서 부터 탐색, player는 뒤에서 부터 탐색
 * 점수가 같을 때, ranked에 등록된 점수가 더 높을떄로 구분
 * 점수가 같으면 ranked 인덱스에 +1해서 랭킹 등록
 * ranked에 등록된 점수가 더 높을떄는 +2
 * 그리고 다시 player for 문 key값을 j로 초기화하고 player index 바뀌었을 때 j부터 탐색하도록
 * j == 0인 경우는 1등 랭크란 의미
 * @returns 
 */
function climbingLeaderboard(ranked, player) {
  // Write your code here
  const result = [];
  const newSet = new Set(ranked);
  const filteredRanked = [...newSet];
  let key = filteredRanked.length - 1;
  for (let i=0; i<player.length; i+=1) {
      for (let j=key; j>=0; j-=1) {
          if(player[i] === filteredRanked[j]) {
              result.push(j+1);
              key = j;
              break;
          } else if(player[i] < filteredRanked[j]) {
              result.push(j+2);
              key = j;
              break;
          } else if(j==0) {
              result.push(1);
          }
      }
  }
  return result;
}