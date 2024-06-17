function customrender(element , container ){


/*    
//   const domelemnt = document.createElement("p") //direct nko element throw kru type vr
  const domelemnt = document.createElement(reactelement.type)
  domelemnt.innerHTML = reactelement.chaiden;
  domelemnt.setAttribute('href' , reactelement.props.href)
  domelemnt.setAttribute('target' , reactelement.props.target)

//   console.log(domelemnt);
container.appendChild(domelemnt) 
*/

//using loops : 
const domelemnt = document.createElement(reactelement.type)
domelemnt.innerHTML = reactelement.chaiden;

for (const prop in reactelement.props) {
     if(prop === 'children') continue;
     domelemnt.setAttribute(prop , reactelement.props[prop]) ;
    
    
}
container.appendChild(domelemnt);

};




const reactelement = {
    type :"a", // a mhanje ankar tag
    props : {
        href : "https:/google.com",
        target : "black"
    },
    chaiden : "click me to visit google"
};





const maincontainer = document.querySelector("#root");
customrender( reactelement , maincontainer);
