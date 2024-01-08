const heading = React.createElement("div",{id:"parent" ,abc:"xyz"},
[React.createElement("div",{id:"child1" ,abc:"xyz"},[React.createElement("h1",{id:"heading1" ,abc:"xyz"},"i am h1 tag"),React.createElement("h2",{id:"heading2" ,abc:"xyz"},"i am h2 tag")]),
React.createElement("div",{id:"child2" ,abc:"xyz"},[React.createElement("h1",{id:"heading3" ,abc:"xyz"},"i am h1 tag"),React.createElement("h2",{id:"heading4" ,abc:"xyz"},"i am h2 tag")])])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)






