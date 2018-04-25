/**
 * count派发器
 */
const count = (state = 0, action) => {
  switch (action.type) {
    case '__ADD__':
      // action.count 只读
      const addCount = Object.assign({}, { count: action.count }, {}); // 新count，可修改
      return ++addCount.count;
    case '__CUTBACK__':
      // action.count 只读
      const cutbackCount = Object.assign({}, { count: action.count }, {}); // 新count，可修改
      return --cutbackCount.count;
    default:
      return state;
  }
};

export default count;
