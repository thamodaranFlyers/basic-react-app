import Navbar from "../components/Navbar";

function SupportPage(){
    console.log ("this is support age");
    const currentUserPerms = JSON.parse(sessionStorage.getItem('perms'));

    return (
        <div>
            <Navbar perms={currentUserPerms}/>
            <div className="App">
                <header className="App-header">
                    this is header on support page.
                </header>
                <h1>you are seeing support page</h1>
            </div>
        </div>
    )
};

export default SupportPage;