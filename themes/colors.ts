/**
 * this is my solution to avoiding the cancerous Chakra UI color
 * customisation, where the defining my own custom colors fails
 */

const colors = {
  BLACK_TEXT: "#3A3A3A",
  BLACK_70: "#454657",
  BLACK_50: "#737481",
  GREY: "#EDEDEF",
  WHITE: "#F5F5F6",
  DARK: {
    HEADER: "#4c4c5c",
    FOCUSED: "#959bff",
    ACTIVE: "#D36BA9",
    POSITIVE: "#58D28F",
    NEGATIVE: "#EC775D",
    BLUE: "#409DD0",
    ORANGE: "#E5A24A",
    SECTOR: {
      TECH: "#9FA5FF",
      FINANCIAL: "#F47E64",
      HEALTH: "#6FE1A2",
      ENERGY: "#FFF170",
      REAL_ESTATE: "#FFBF6B",
      DISCRETE: "#C66D2D",
      INDUSTRIAL: "#DB89BA",
      STAPLES: "#55B9FF",
      COMMS: "#DAEBFF",
      CASH: "#92C57A",
    },
  },
  LIGHT: {
    FOCUSED: "#6b74ff",
    ACTIVE: "#D94CA0",
    POSITIVE: "#23D975",
    NEGATIVE: "#F04520",
    BLUE: "#2AB1FC",
    ORANGE: "#FCA12B",
    SECTOR: {
      TECH: "#6B74FF",
      FINANCIAL: "#F04520",
      HEALTH: "#33D67C",
      ENERGY: "#FCE72B",
      REAL_ESTATE: "#FCA12B",
      DISCRETE: "#C95400",
      INDUSTRIAL: "#D94CA0",
      STAPLES: "#0E9CFF",
      COMMS: "#B8D9FF",
      CASH: "#66B342",
    },
  },
} as const;

export default colors;
