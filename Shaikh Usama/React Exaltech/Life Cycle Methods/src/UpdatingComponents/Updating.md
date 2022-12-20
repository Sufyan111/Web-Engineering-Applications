These methods are called when the components are re-rendered

Methods :

1.  static getDerivedStateFromProps(props, state) --> rarely used in updating phase

2.  shouldComponentUpdateMethod(nextProps, nextState) --> dictates if the comp should
    re-render or not. It also compares existing props and state and return or false based on the calculation. it is used for performance optimization.

    Don't call HTTP requests calling anf setState method as it will cause side effects

3.  render
4.  getSnapshotBeforeUpdate(prevProps, prevState) --> called right before changes from the vDOM are made to DOM. it is a rarely used method

5.  componentDidUpdate(prevProps, prevState, snapshot) called after the render is finished in the re-render cycles
