/**
 * PasswordInput Component
 * Renders a password input field and listens
 * for changes while the user types.
 */
function PasswordInput() {
    // Handles typing in the password field
    function handleChange() {
      console.log("Entering password...");
    }
  
    return (
      <input
        type="password"
        onChange={handleChange}
      />
    );
  }
  
  export default PasswordInput;
  