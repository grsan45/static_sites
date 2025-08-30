import React, {useEffect, useRef} from 'react';
import View from "../components/View";
import PageHeader from "../components/PageHeader";
import CodeBlock from "../components/CodeBlock";

const NTM = () => {
    // yucky formatting :(
    const configSnippet = `{
  "autoStart": true,
  "hosts": [
    {
      "host":  "string",
      "flags": ["query param", "query param"]
    }
  ]
}`;

    return (
        <View>
            <PageHeader text={"NoTrackingMarkers"} logoUrl={"https://r2.grsan.xyz/NTMLogo.png"}/>
            <a href="https://github.com/grsan45/NoTrackingMarkers">Github Repository Link</a>

            <p>
                This is a simple Win32 program I made to remove those pesky url tracking markers in URLs copied to
                your clipboard.
            </p>

            <div>
                <img src={"https://r2.grsan.xyz/ntmpreview.png"}
                     alt={"Image highlighting a tracking marker in a url"}/>
                <br />
                <sub>(These Things)</sub>
            </div>

            <div className={"gy-4"}>
                <h2>Download</h2>
                <p>Get the latest version from the Github releases page <a href={"https://github.com/grsan45/NoTrackingMarkers/releases"}>here</a>.</p>
            </div>

            <div>
                <h2>Configuration</h2>
                <p>I made this application for myself as a fun project to learn Win32.
                    As such, I designed the configuration system to be something that's convenient for me.
                    <br/>
                    We work in JSON here.
                </p>
                <p>
                    Right click on the application icon in the system tray and select "Open Configuration File," and you'll
                    be presented with a file in your default text editor. Here's the schema:
                </p>
                <CodeBlock>
                    {configSnippet}
                </CodeBlock>

                From the top:
                <ul>
                    <li><code>autoStart</code> -- boolean, determines whether the application starts on user login</li>
                    <li><code>hosts</code> -- array of host configurations</li>
                    <li><code>host</code> -- a hostname to remove markers from, i.e. <code>youtu.be</code></li>
                    <li><code>flags</code> -- array of strings, these are the tracking keys to remove, i.e. <code>si</code> for YouTube</li>
                </ul>

                <p>Once you're done editing, save the file and select "Reload Configuration File" in the application menu.</p>
            </div>
    </View>
    );
}

export default NTM;