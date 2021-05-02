import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import TopNavigation from './TopNavigation'
import Footer from './Footer'


function App() {
  const [html, setHtml] = useState("");
  const [css, setcss] = useState("");
  const [js, setjs] = useState("");

  const srcDoc = `
       <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
        `;

  return (
  <div className="container">
    <TopNavigation />
    <div className="main">
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          className="html"
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setcss}
        />

        <Editor
          language="javascript"
          displayName="JavaScript"
          value={js}
          onChange={setjs}
        />
      </div>

      <div className="output">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
        </div>

      </div>
      <Footer />
    </div>
    
  );
}

export default App;
