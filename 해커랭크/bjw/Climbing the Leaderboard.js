function binarySearch(sortedArray, seekElement) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  let resultIndex = 0;
  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (sortedArray[middleIndex] === seekElement) {
      return middleIndex;
    }
    if (sortedArray[middleIndex] > seekElement) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
  return startIndex;
}

function climbingLeaderboard(ranked, player) {
  let answer = [];
  ranked = Array.from(new Set(ranked));
  player.forEach((n) => answer.push(binarySearch(ranked, n) + 1));
  return answer;
}
