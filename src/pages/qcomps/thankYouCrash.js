import { useState } from "react";

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);

  // state should be top-level, and cannot be created conditionally, which can
  // violate hooks rules and leads to unknown behaviour
  const [message, setMessage] = useState("");

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Sending: "${message}"`);
          setIsSent(true);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}
