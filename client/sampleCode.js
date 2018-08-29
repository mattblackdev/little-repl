// export default `
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       text: props.text
//     }
//   }

//   handleClick = () => {
//     this.setState({ text: 'LOLOLOLOLOL' })
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <div>{this.state.text}</div>
//         <button onClick={this.handleClick}>LOL ME!</button>
//       </React.Fragment>
//    )
//   }
// }

// MyComponent // <-- This is somehow necessary...
// `

export default `() => <div>hello</div>`
