import React from 'react'


export default function Mounting() {

    const matter = [
        {
            title: "Mounting",
            defination: "Mounting means putting elements into the DOM. React has four built-in methods that gets called, in this order, when mounting a component:",
            imgsrc: "https://raw.githubusercontent.com/Sunnyjr/Life-Cycle-Components/main/Images/Mounting/mounting.png",
            link_url:"https://www.w3schools.com/react/react_lifecycle.asp"
        },
        {
            title: "Constructor",
            defination: "The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).",
            imgsrc: "https://raw.githubusercontent.com/Sunnyjr/Life-Cycle-Components/main/Images/Mounting/constructor.png",
            link_url: "https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_constructor"

        },
        {
            title: "getDerivedStateFromProps",
            defination: "The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM. This is the natural place to set the state object based on the initial props. It takes state as an argument, and returns an object with changes to the state. The example below starts with the favorite color being 'red', but the getDerivedStateFromProps() method updates the favorite color based on the favcol attribute:",
            imgsrc: "https://raw.githubusercontent.com/Sunnyjr/Life-Cycle-Components/main/Images/Mounting/gdsfp.png",
            link_url: "https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_getderivedstatefromprops"

        },
        {
            title: "render",
            defination: "The render() method is required, and is the method that actually outputs the HTML to the DOM.",
            imgsrc: "https://raw.githubusercontent.com/Sunnyjr/Life-Cycle-Components/main/Images/Mounting/render.png",
            link_url: "https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_render"
        },
        {
            title: "componentDidMount",
            defination: "The componentDidMount() method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM.",
            imgsrc: "https://raw.githubusercontent.com/Sunnyjr/Life-Cycle-Components/main/Images/Mounting/cdm.png",
            link_url: "https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_componentdidmount"
        }
    ]

    return (
        <div className="container">
            <div className="row">
                {matter.map((value) => {
                    return (
                        <div className="col-ms-4 col-lg-4 col-xl-12">
                            <div className="card mt-5">
                                <div class="card-body mb-3">
                                    <h5 class="card-title text-center">{value.title}</h5>
                                    <p class="card-text">{value.defination}</p>
                                </div>
                                <img src={value.imgsrc} class="card-img-top" alt="Please Check Your Network" />
                                <div class="card-body">
                                <a href={value.link_url} target="_blank" class="btn btn-primary">Try This</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}