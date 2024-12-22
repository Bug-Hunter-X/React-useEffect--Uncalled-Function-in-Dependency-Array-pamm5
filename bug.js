```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: The function is defined but never called
    function updateCount() {
      setCount((prevCount) => prevCount + 1);
    }
  }, []);

  return <div>Count: {count}</div>;
}```