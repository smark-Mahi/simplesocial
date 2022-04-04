import { useRef, useState, useEffect, useContext } from 'react';
import styles from '../styles/Login.module.css'
//import AuthContext from '../context/AuthProvider';
import axios from 'axios';
//import cookie from 'js-cookie'
import { signInWithGoogle,signInWithFacebook } from '../Component/Firebase';
import {useRouter} from 'next/router'
import Link from 'next/link'



const Login = () => {
    const [err,seterr]=useState(false)
    const router  = useRouter()
    //const Jwt=require('jsonwebtoken');
    function userLogin(event){
        event.preventDefault()
        const form_data=new FormData(document.getElementById('formElement'))
        const options={
           method:'POST',
           body:form_data
        }
        const res=fetch(`http://simple-social-ark.herokuapp.com/login`,options).then(response=>response.json()).then(handleAuth).catch((
            error)=>{console.log('Error',error)});
            router.push('/')
            //what(res)
      }
      function what(res){
          if(err=!200){
            router.push('/')
          }else{
            seterr(true)
          }
      }
     /* function userLogin(event){
          try{
            event.preventDefault()
            const form_data=new FormData(document.getElementById('formElement'))
            const options={
               method:'POST',
               body:form_data
            }
            fetch(`http://simple-social-ark.herokuapp.com/login`,options).then(response=>response.json()).then(handleAuth)
                router.push('/')
          }
        catch(err){
            seterr
             console.log(err);
        }
      }*/
      function handleAuth(data){
          sessionStorage.setItem('access_token',data.access_token)
          sessionStorage.setItem('token_type',data.token_type)
      }
     
    return (
        <div className={styles.App}>
                <section className={styles.section}>
                    <h1>Sign In</h1>
                    <form className={styles.form} id="formElement" onSubmit={userLogin}>
                        <label htmlFor="username" className={styles.label}>Email:</label>
                        <input
                        className={styles.input}
                            type="email"
                            id="username"
                           name='username'
                            autoComplete="off" 
                            required
                        />

                        <label htmlFor="password"  className={styles.label}>Password:</label>
                        <input
                        className={styles.input}
                            type="password"
                            id="password"
                            name='password'
                            required
                        />
                        <input className={styles.button} type='submit'/>
                    </form>
                    <button className={styles.button} onClick={signInWithGoogle} >sigh in with Google</button><br/>
                    <button className={styles.button} onClick={signInWithGoogle} >sigh in with Google</button>
                    <p>
                        Need an Account?<br />
                        <span className={styles.line}>
                            {/*put router link here*/}
                            <Link href="/Register"><a >Sign Up</a></Link>
                        </span>
                    </p>
                    {err&&<span className={styles.error}>Wrong Credentials</span>}
                </section>
        </div>
    )
}

export default Login