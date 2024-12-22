# React useEffect: Uncalled Function in Dependency Array

This example demonstrates a common error in React's `useEffect` hook.  A function is defined within the `useEffect`'s callback, but it's never actually invoked, leading to unexpected behavior. The `count` state variable remains unchanged because the `updateCount` function isn't called.

The solution showcases how to correctly use `useEffect` with functions to manage side effects.