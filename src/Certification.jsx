

import React, { Component } from 'react';



class Certifications extends Component {

    componentWillMount() {
        const script = document.createElement("script");
        script.type = 'text/javascript';
        script.src = '//cdn.youracclaim.com/assets/utilities/embed.js';
        script.async = true;
        var o = document.getElementsByTagName('script')[0];
        o.parentNode.insertBefore(script, o);
        document.body.appendChild(script);
    }
    render() {
        return (
            <div className="content">
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="9de3f381-ea78-4f35-ac4c-90a4194acf15"></div>
            </div>
        );
    }
}

export default Certifications;
