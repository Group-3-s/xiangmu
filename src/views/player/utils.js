// 获取逐行时间以及逐行歌词

/* eslint-disable prefer-const */
// eslint-disable-next-line import/prefer-default-export
export const HandleLyric = (lyric) => {
  function converToSeconds(timeArray) {
    const min = parseFloat(timeArray[0]);
    const sec = parseFloat(timeArray[1]);
    const total = min * 60 + sec;
    return total;
  }
  let line = lyric.split("\n");
  let value1 = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < line.length; i++) {
    let str = line[i];
    let part = str.split("]");
    let timestr = part[0].substring(1);
    let parts = timestr.split(":");
    let obj = {
      time: converToSeconds(parts).toFixed(2) * 1000,
      word: part[1],
    };

    value1.push(obj);
  }
  return value1;
};
