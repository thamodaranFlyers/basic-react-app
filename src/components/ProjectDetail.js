function ProjectDetail({item}) {
    console.log("in ProjectDetail component");
    return (
        <div>
            <h1>this is Project Detail component</h1>
            <div key={item.id}>
                <div>
                    <tr>{item.name}</tr>
                    <tr>{item.description}</tr>
                </div>
            </div>
        </div>    
    );
}

export default ProjectDetail;