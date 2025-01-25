# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop within the `useEffect` hook. The bug arises from incorrectly specifying the dependency array, leading to the effect running repeatedly, causing an infinite render cycle. 

## Bug Description
The `useEffect` hook in the `MyComponent` function has the `count` variable in its dependency array.  This is incorrect because every time `count` updates (which happens in the `onClick` handler), the effect reruns, leading to another state update (console logging), thereby creating an infinite loop. 

## Solution
To resolve the issue, remove `count` from the dependency array if the effect doesn't need to depend on it, or use an appropriate value that ensures it doesn't trigger the infinite loop.  If you need to log only when the component mounts, add an empty array `[]` as the dependency array.