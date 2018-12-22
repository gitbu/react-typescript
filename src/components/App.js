import * as React from 'react';
import { Button } from 'antd';
import type from '../utils/type';

const A = React.lazy(() => import('./A'))

export default class App extends React.Component {
  render() {
    console.log(type());
    return (
      <React.Suspense fallback={<div>loading</div>}>
        <Button type="primary">
          click me 111
        </Button>
        <A />
      </React.Suspense>
    )
  }
}