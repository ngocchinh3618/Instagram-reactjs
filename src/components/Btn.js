// import React, { Component } from 'react';
// //2 props
// //1. loai nut
// //2. active hay ko active
// //3. clicked

// class Btn extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       btn: ""
//     }
//   }
  
//   render() {
//     switch(this.props.type) {
//         case "home":
//           if (this.props.active) {
//             this.state.btn = <svg aria-label="Trang chủ" class="_8-yf5 " fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>
//           } else {
//             this.state.btn = <svg aria-label="Trang chủ" class="_8-yf5 " fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path></svg>
//           } 
//           break;
//     }
//     return (
//       <div>
//         {this.state.btn}
//       </div>
//     );
//   }
// }

// export default Btn;