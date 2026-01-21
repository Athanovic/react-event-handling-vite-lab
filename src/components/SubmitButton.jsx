/**
 * SubmitButton Component
 * Renders a button and tracks mouse interactions
 * for security and anti-bot analysis.
 */
function SubmitButton() {
    // Triggered when mouse enters the button
    function handleEnter() {
      console.log("Mouse Entering");
    }
  
    // Triggered when mouse leaves the button
    function handleLeave() {
      console.log("Mouse Exiting");
    }
  
    return (
      <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        Submit Password
      </button>
    );
  }
  
  export default SubmitButton;
  