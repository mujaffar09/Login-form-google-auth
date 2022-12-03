import { useEffect } from "react";
import Login1 from "./components/login/Login1";
import "./styles.css";

export default function App() {
  function handleCallback(respons) {
    console.log("id" + respons.credential);
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      clien_id:
        "580481929613-0dc5k3g9p4mfr208r7e193us8ki5fc1a.apps.googleusercontent.com",
      callback: handleCallback
    });

    google.accounts.id.renderButton(document.querySelector("#google-sign-in"));
  }, []);
  return (
    <div className="App">
      {/* <Login /> */}

      <Login1 />
    </div>
  );
}
