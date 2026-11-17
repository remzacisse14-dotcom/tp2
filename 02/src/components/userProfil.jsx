export default function UserProfil({prenom, age, isOnline}) {
  return (
    <div style={{
        border:"3px solid gray",
        borderRadius:"10px",
        padding: "20px",
        margin: "10px",
        width: "300px"
        }}>
      <h2>Prenom: {prenom}</h2>
      <p>Age: {age} ans</p>
      <p>Statut: {isOnline ? "🟢En Ligne" : "🔴Hors Ligne"}</p>
      <button style={{padding:"5px",
        borderRadius:"10px",
        border:"1px solid grey",
        marginTop:"2px",
        backgroundColor : isOnline ? "#dc2626" : "#16a34a"
        }}
        onClick={changeStatut}>
        {isOnline ? "se deconnecter" : "se connecter"}</button>
    </div>
  );

}