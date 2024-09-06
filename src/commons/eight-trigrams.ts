/**
 * 八卦
 */

// 八卦各key（无序）
export const eightTrigramKeys = [
  "qian",
  "kun",
  "zhen",
  "xun",
  "kan",
  "li",
  "gen",
  "dui",
];

// 八方方位 （数字表示的顺序是从南开始逆时针走4个到东北，然后从西南顺时针走到北）
enum Direction {
  // 南
  SOUTH = 1,
  // 东南
  SOUTHEAST = 2,
  // 东
  EAST = 3,
  // 东北
  NORTHEAST = 4,
  // 西南
  SOUTHWEST = 5,
  // 西
  WEST = 6,
  // 西北
  NORTHWEST = 7,
  // 北
  NORTH = 8,
}
export const eightTrigramsDetail: Record<string, Record<string, any>> = {
  qian: {
    name: "乾",
    // 先天八卦指代方位
    earlierHeavenDirection: Direction.SOUTH,
    // 卦爻从下往上看代表的二进制数字，0是阴爻 1是阳爻
    binary: 0b111,
  },
  kun: {
    name: "坤",
    earlierHeavenDirection: Direction.NORTH,
    binary: 0b000,
  },
  zhen: {
    name: "震",
    earlierHeavenDirection: Direction.NORTHEAST,
    binary: 0b100,
  },
  xun: {
    name: "巽",
    earlierHeavenDirection: Direction.SOUTHWEST,
    binary: 0b011,
  },
  kan: {
    name: "坎",
    earlierHeavenDirection: Direction.WEST,
    binary: 0b010,
  },
  li: {
    name: "离",
    earlierHeavenDirection: Direction.EAST,
    binary: 0b101,
  },
  gen: {
    name: "艮",
    earlierHeavenDirection: Direction.NORTHWEST,
    binary: 0b001,
  },
  dui: {
    name: "兑",
    earlierHeavenDirection: Direction.SOUTHEAST,
    binary: 0b110,
  },
};
