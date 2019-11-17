function renderLoginPage(node) {
	var loginPage = document.createElement("div");
	loginPage.innerHTML = `
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-t-50 p-b-90">
				<form class="login100-form validate-form flex-sb flex-w" onsubmit=authHandler()>
					<span class="login100-form-title p-b-51">
						Login
					</span>

					
					<div id='login-wrap' class="wrap-input100 validate-input m-b-16">
						<input class="input100" type="text" id="login" name="login" placeholder="Username" onClick=focusHandler(this.id)>
						<span class="focus-input100"></span>
					</div>
					
					
					<div id='password-wrap' class="wrap-input100 validate-input m-b-16">
						<input class="input100" type="password" id="password" name="password" placeholder="Password" onClick=focusHandler(this.id)>
						<span class="focus-input100"></span>
					</div>

					<div class="container-login100-form-btn m-t-17">
						<button class="login100-form-btn" type="submit">
							Login
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>	
	`;
	node.innerHTML = "";
	node.append(loginPage);
};