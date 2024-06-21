"use client";
import React,{useState} from "react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';
export default function Login() {

  const router = useRouter();

  const [inputValue,setInputValue] = useState({
    email : '',
    username : ''
  })

  const handleChange = (e) =>{
    const {name,value} = e.target;
 
    setInputValue({
      ...inputValue,
      [name] : value
    })
  }
 
  const handleSubmit =async(e) =>{
        e.preventDefault();
        if (inputValue.email === 'vivek' && inputValue.password === 'Vivek@1234') {
            try {
            const token = uuidv4();
            //   document.cookie = `construct-token=${token}; path=/`;
            //   document.cookie = serialize('construct-token', token, {
            //     maxAge: 60 * 60 * 24 * 7 // 1 week
            //   });

            Cookies.set('token', token, { expires: 7, path: '/' }); // Set cookie that expires in 7 days

            if(token){
                router.push('/add-projects');
            }
            } catch (error) {
              console.error('Error signing token:', error);
            }
          } else {
            alert('Invalid Credentials');
          }
  }

  return (
    <div className={styles.container}>
      <div className={styles.right_side}>
        <img src="/images/login.webp" alt="login" className={styles.image_css} />
      </div>
      <div className={styles.left_side}>
        <div className={styles.login_div}>
          <h2>Login</h2>
          <form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className={styles.input}
              value={inputValue.email}
              onChange={(e)=>handleChange(e)}

            />
            <input
              name="password"
              type="text"
              placeholder="Password"
              className={styles.input}
              value={inputValue.password}
              onChange={(e)=>handleChange(e)}

            />
            <button className={styles.button}>Submit</button>
           
          </form>
        </div>
      </div>
    </div>
  );
}
