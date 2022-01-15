import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:4000");

export default function Chat() {
  const [state, setState] = useState({ message: "", name: "" });
  const [message, setMessage] = useState([]);

  return (
    <div>
      <form action="">
        <h1>
          <div>
            <textarea />
          </div>
        </h1>
      </form>
    </div>
  );
}
