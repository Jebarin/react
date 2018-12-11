# react OTP Component
Basic usage With Lazy Loading:

```javascript
import React, { Suspense } from 'react';
const ReactOtpComponent = React.lazy(() => import('react_opt'));  

export default class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading....</div>}> 
            <ReactOtpComponent inputs={6}   />
        </Suspense>
      </div>
    )
  }
}
```

Basic usage Without Lazy Loading:

```javascript
import React from 'react';
import {ReactOtpComponent} from 'react_opt';  

export default class App extends Component {
  render() {
    return (
      <div>
        <ReactOtpComponent inputs={6}   /> 
      </div>
    )
  }
}
```
