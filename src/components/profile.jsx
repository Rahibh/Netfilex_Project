 
function Profile() {
  return (
        <div>
            <h1>profile card challenge</h1>
            <ProfileCard
            name="alice"
            age={30}
            greeting={
                
                    <strong>hi alice, have a wonderful day!</strong>
                

            }
            >
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    )
}

export default Profile;


function ProfileCard({name, age, greeting, children}) {
    // const {name, age, greeting, children,}= props;
    console.log(`Name ${name} Age ${age} Greeting ${greeting}`);
    
    return(
        <>
        <h2>Name:{name}</h2>
        <p>Age:{age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
        </>
    )
}
