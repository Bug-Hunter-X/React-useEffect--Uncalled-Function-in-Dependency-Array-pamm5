```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Call the function
    function updateCount() {
      setCount((prevCount) => prevCount + 1);
    }
    const intervalId = setInterval(updateCount, 1000); // Call updateCount every second
    return () => clearInterval(intervalId); // Cleanup
  }, []);

  return <div>Count: {count}</div>;
}```