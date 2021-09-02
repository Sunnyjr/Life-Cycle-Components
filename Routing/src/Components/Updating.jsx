import React from 'react'

function Updating() {
    const matter = [
        {
            title:"Updating",
            defination:"The next phase in the lifecycle is when a component is updated.",
            imgsrc:"https://raw.githubusercontent.com/Sunnyjr/Life-Cycle-Components/main/Images/Updating/updating.png",
            link_url:"https://www.w3schools.com/react/react_lifecycle.asp"
        },
        {
            title:"getDerivedStateFromProps",
            defination:"Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.This is still the natural place to set the state object based on the initial props.The example below has a button that changes the favorite color to blue, but since the getDerivedStateFromProps() method is called, which updates the state with the color from the favcol attribute, the favorite color is still rendered as yellow:",
            imgsrc:"https://raw.githubusercontent.com/Sunnyjr/Life-Cycle-Components/main/Images/Updating/gdsfp.png",
            link_url:"https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_getderivedstatefromprops2"

        },
        {
            title:"shouldComponentUpdate",
            defination:"In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not. The default value is true.The example below shows what happens when the shouldComponentUpdate() method returns false:",
            imgsrc:"https://raw.githubusercontent.com/Sunnyjr/Life-Cycle-Components/main/Images/Updating/scu.png",
            link_url:"https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_shouldcomponentupdate"
        },
        {
            title:"render",
            defination:"The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.The example below has a button that changes the favorite color to blue:",
            imgsrc:"https://raw.githubusercontent.com/Sunnyjr/Life-Cycle-Components/main/Images/Updating/render.png",
            link_url:"https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_render2"

        },
        {
            title:"getSnapshotBeforeUpdate",
            defination:"In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update. If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.",
            imgsrc:"https://raw.githubusercontent.com/Sunnyjr/Life-Cycle-Components/main/Images/Updating/gsbu.png",
            link_url:"https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_getsnapshotbeforeupdate"
        }, 
        {
            title:"componentDidMount",
            defination:"The componentDidUpdate method is called after the component is updated in the DOM.",
            imgsrc:"https://raw.githubusercontent.com/Sunnyjr/Life-Cycle-Components/main/Images/Updating/cdu.png",
            link_url:"https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_componentdidupdate"
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

export default Updating