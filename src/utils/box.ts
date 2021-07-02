type TBM = 't' | 'b' | 'm';
class BoxMaker {
  private boxparts = {
    t: {
      l: '┏',
      r: '┓'
    },
    b: {
      l: '┗',
      r: '┛'
    },
    m: {
      l: '┣',
      r: '┫',
      t: '┳',
      b: '┻'
    },
    h: '━',
    i: '╋'
  };

  horizontalBar(
    length: number,
    topBottomMiddle: TBM,
    cellDividerIdx?: number
  ): string {
    if (length < 5) throw new Error('length give is too small');
    else {
      let resultStr = '';
      let tempStr = '';

      switch (topBottomMiddle) {
        case 't':
          tempStr = `${this.boxparts.t.l}${this.boxparts.h.repeat(length - 2)}${
            this.boxparts.t.r
          }`;
          if (cellDividerIdx !== undefined) {
            resultStr =
              tempStr.substring(0, cellDividerIdx) +
              this.boxparts.m.t +
              tempStr.substring(cellDividerIdx + 1);
          } else {
            resultStr = tempStr;
          }
          return resultStr;
        case 'b':
          tempStr = `${this.boxparts.b.l}${this.boxparts.h.repeat(length - 2)}${
            this.boxparts.b.r
          }`;
          if (cellDividerIdx !== undefined) {
            resultStr =
              tempStr.substring(0, cellDividerIdx) +
              this.boxparts.m.b +
              tempStr.substring(cellDividerIdx + 1);
          } else {
            resultStr = tempStr;
          }
          return resultStr;
        case 'm':
          tempStr = `${this.boxparts.m.l}${this.boxparts.h.repeat(length - 2)}${
            this.boxparts.m.r
          }`;
          if (cellDividerIdx !== undefined) {
            resultStr =
              tempStr.substring(0, cellDividerIdx) +
              this.boxparts.i +
              tempStr.substring(cellDividerIdx + 1);
          } else {
            resultStr = tempStr;
          }
          return resultStr;
        default:
          throw new Error('Invalid topBottomMiddle arg');
      }
    }
  }
}

export const boxMaster9000 = new BoxMaker();
