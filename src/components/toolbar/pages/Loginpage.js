


import { Alert, AlertTitle, Button, Card, CardActionArea, CardContent, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../ReduxStore/Services';
import '../pages/Loginpage.css'

export const Loginpage = () => {
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',


    };
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const loginuserState = useSelector(state => state.loginuser);
    const [isSuccess, setIsSuccess] = useState(false)

    const userRef = useRef('') //creating a refernce for TextField Component
    const passwordRef = useRef('') //creating a refernce for TextField Component

    useEffect(() => {
        if (loginuserState.data.length > 0) {
            navigate("/")
        }
    }, [loginuserState.data])



    const sendValue = (e) => {
        // return console.log(userRef.current.value) //on clicking button accesing current value of TextField and outputing it to console 
        e.preventDefault();
        if (userRef.current.value.length > 0 && passwordRef.current.value.length > 0) {
            console.log(userRef.current.value)
            console.log(passwordRef.current.value)
            dispatch(login({
                "email": userRef.current.value,
                "password": passwordRef.current.value

            }))
        }


    }




    return (
        <div className='columns'>

            <form noValidate autoComplete='off' onSubmit={sendValue} >
                <Card sx={{ minWidth: 350, minHeight: 400 }} style={styles}  >

                    <TextField id="vale" type="text" size="small" placeholder='Username' inputRef={userRef} label="Username"
                        sx={{
                            justifyContent: 'center',
                            margin: 2,
                            width: { sm: 200, md: 300 },
                            "& .MuiInputBase-root": {
                                height: 50
                            }
                        }} />
                    <TextField id="time" type="text" size="small" placeholder='Password' inputRef={passwordRef}
                        sx={{
                            justifyContent: 'center',
                            margin: 2,
                            width: { sm: 200, md: 300 },
                            "& .MuiInputBase-root": {
                                height: 50
                            }
                        }} />

                    <span>hhhhhhhhh</span>

                    <Button variant="contained" type="submit" onSubmit={sendValue} >Continue</Button>
                </Card>

            </form>

        </div>
    )
}
