
function Login() {
	return (
		<>
			<p className="title">Login</p>

			<form className="App">				
				<input type="email" placeholder="username@deloitte.com"/>
				<input type="password" placeholder="password"/>
				<input type={"submit"}
					style={{ backgroundColor: "#a1eafb" }} />
			</form>
		</>
	);
}