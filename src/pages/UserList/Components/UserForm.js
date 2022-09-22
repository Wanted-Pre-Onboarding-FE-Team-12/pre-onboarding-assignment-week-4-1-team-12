// import React, { useState } from 'react';

// import styled from 'styled-components';
// import Layout from '@layout/index';

// function UserForm() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [gender, setGender] = useState('');
//     const [birthday, setBirtyday] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const onPostUser = (e) => {
//         const newUser = {
//             name : name
//         }
//     }
//   return (
//     <Layout>
//       <FormStyle>
//         <form onSubmit={onPostUser}>
//           <label htmlFor="userName">이름</label>
//           <input type="text" id="userName"></input>
//           <label htmlFor="email">이메일</label>
//           <input type="email" id="email"></input>
//           <label htmlFor="gender">성별코드</label>
//           <input type="text" id="gender"></input>
//           <label htmlFor="birthday">생년월일</label>
//           <input tpe="text" id="birthday"></input>
//           <label htmlFor="phoneNumber">휴대폰 번호(-포함)</label>
//           <input type="text" id="phoneNumber"></input>
//           <button type="submit">추가</button>
//         </form>
//       </FormStyle>
//     </Layout>
//   );
// }

// export default UserForm;

// const FormStyle = styled.div`
//   /* & > form {
//     padding: 0 10px;
//     margin-bottom: 50px;
//   }
//   & > form > textarea {
//     padding: 5px 1%;
//     width: 98%;
//     height: 50px;
//   }
//   & > form > input[type='text'] {
//     padding: 5px 1%;
//     width: 98%;
//     margin-bottom: 10px;
//   }
//   & > form > button {
//     padding: 0.375rem 0.75rem;
//     border-radius: 0.25rem;
//     border: 1px solid lightgray;
//     cursor: pointer;
//   } */
// `;
