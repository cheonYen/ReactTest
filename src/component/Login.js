import React from 'react'
import Form from './Form'

function Login() {
  return (
    <main className='main'>
      <section className='inner loginPage'>
        <h2 className='heading'>Login</h2>
        <form>
          <Form id="email" label="Email Address" type="email" pleaceHolder="이메일 주소를 입력하세요"/>
          <Form id="pw" label="Password" type="password" pleaceHolder="비밀번호를 입력하세요"/>
          <button type='sumbit' className='btn loginBtn'>Login</button>
        </form>
      </section>
    </main>
  )
}

export default Login