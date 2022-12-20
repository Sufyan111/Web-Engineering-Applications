UseEffect:--

1. Unconditional :
   useEffect(()=>{})
   NO second argument means unconditional useEffect.

2. Conditional with empty dependency:
   useEffect(()=>{},[])
   runs only once when the Web Application is Loaded.
   it works same as componentDidMount() in class component.

3. Conditional with argument in second dependency :
   useEffect(()=>{},[arguments])
   runs everytime when there is change in arguments
   it works same as componentDidUpdate() in class component.

4. Conditional with empty dependency or filled depeendency array :
   useEffect(()=>{
   return ;
   },[] or [arguments])

   it can accept argument or not but it should return a value.
   it works same as componentWillUnmount()
