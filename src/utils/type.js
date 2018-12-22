import { sumBy } from 'lodash';

function type() {
  const arr = [{a: 1}, {a: 2}]
  const res = sumBy(arr, 'a');
  console.log(res);
}

export default type;