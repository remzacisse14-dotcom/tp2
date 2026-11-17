export default function BookCard({titre,auteur, estDisponible,onClickEmprunt}) {
    return(
        <div style={{
            border:"1px solid grey",
            margin:"10px",
            borderRadius:"10px"
        }}>
            <h2>{titre}</h2>
            <p>Auteur : {auteur}</p>
            <p>{estDisponible ? "🟢 Disponible" : "🔴 Emprunté"} </p>
            <button onClick={onClickEmprunt}>{estDisponible ? "Emprunter" : "Rendre"}</button>

        </div>
    )
}