export function RequiredFieldEmpty(x: number): Boolean {
  return x ? true : false;
}

export const RequiredModal = () => {
  return (
    <>
      <div>
        <h1>hello</h1>
      </div>
      <div>
        <h2>world</h2>
      </div>
    </>
  );
};

// <div id="customModal" class="modal">
//     <div class="modal-content">
//       <span class="close">&times;</span>
//       <p>Input is required!</p>
//     </div>
//   </div>

//   .modal {
//     display: none; /* Hidden by default */
//     position: fixed; /* Stay in place */
//     z-index: 1; /* Sit on top */
//     left: 0;
//     top: 0;
//     width: 100%; /* Full width */
//     height: 100%; /* Full height */
//     background-color: rgba(0,0,0,0.4); /* Black background with transparency */
//   }

//   /* Modal Content */
//   .modal-content {
//     background-color: #fefefe;
//     margin: 15% auto; /* 15% from the top and centered */
//     padding: 20px;
//     border: 1px solid #888;
//     width: 80%; /* Could be more or less, depending on screen size */
//   }

//   /* The Close Button */
//   .close {
//     color: #aaa;
//     float: right;
//     font-size: 28px;
//     font-weight: bold;
//   }
