import React from 'react'
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div style={{justifyContent:"center", textAlign:"center"}}>
		<center>
        <div class="main" style={{marginTop:100, }}>  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Register</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
                    <Link to="/home">
                        <button>Register</button>
                    </Link>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
                    <Link to="/home">
                        <button>Login</button>
                    </Link>
					
				</form>
			</div>
	</div>
	</center>
    </div>
  )
}
