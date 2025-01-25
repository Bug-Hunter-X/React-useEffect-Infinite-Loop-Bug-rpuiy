```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Log only on mount if no dependency needed
    console.log('Component Mounted. Initial Count:', count); 
  }, []); // Empty dependency array

  // Alternative: Log only when count changes, without causing an infinite loop
  useEffect(() => {
    console.log('Count changed:', count);
  },[count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```