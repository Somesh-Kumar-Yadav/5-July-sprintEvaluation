let navbar = () => {
	return `
    
			<div class="logo"><h3>My Notes App</h3></div>
			<div class="add">
				<label for="day">Add notes:</label>
				<select id="day">
					<optgroup label="Select your day">
						<option>Day-1</option>
						<option>Day-2</option>
						<option>Day-3</option>
						<option>Day-4</option>
						<option>Day-5</option>
						<option>Day-6</option>
						<option>Day-7</option>
						<option>Day-8</option>
						<option>Day-9</option>
						<option>Day-10</option>
						<option>Day-11</option>
						<option>Day-12</option>
						<option>Day-13</option>
						<option>Day-14</option>
						<option>Day-15</option>
						<option>Day-16</option>
					</optgroup>
				</select>
			</div>
			<div class="go">
				<label for="day_">View notes:</label>
				<select id="day_">
					<optgroup label="Select your day">
						<option>Day-1</option>
						<option>Day-2</option>
						<option>Day-3</option>
						<option>Day-4</option>
						<option>Day-5</option>
						<option>Day-6</option>
						<option>Day-7</option>
						<option>Day-8</option>
						<option>Day-9</option>
						<option>Day-10</option>
						<option>Day-11</option>
						<option>Day-12</option>
						<option>Day-13</option>
						<option>Day-14</option>
						<option>Day-15</option>
						<option>Day-16</option>
					</optgroup>
				</select>
				<button id="go">View Notes</button>
			</div>
		`;
};
export default navbar;
