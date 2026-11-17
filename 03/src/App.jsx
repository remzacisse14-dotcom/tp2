import { useState } from "react";
import BookCard from "./components/BookCard";

function App() {

    // 1. Liste des livres
    const [books, setBooks] = useState([
        {
            id: 1,
            titre: "Les Misérables",
            auteur: "Victor Hugo",
            estDisponible: true
        },
        {
            id: 2,
            titre: "L'Étranger",
            auteur: "Albert Camus",
            estDisponible: false
        },
        {
            id: 3,
            titre: "Une si longue lettre",
            auteur: "Mariama Bâ",
            estDisponible: true
        },
        {
            id: 4,
            titre: "Le Petit Prince",
            auteur: "Antoine de Saint-Exupéry",
            estDisponible: true
        }
    ]);

    // 2. États du formulaire
    const [titre, setTitre] = useState("");
    const [auteur, setAuteur] = useState("");

    // 3. Emprunter ou rendre un livre
    function onClickEmprunt(bookId) {

        setBooks(books.map((livre) => {

            if (livre.id === bookId) {
                return {
                    ...livre,
                    estDisponible: !livre.estDisponible
                };
            }

            return livre;
        }));
    }

    // 4. Ajouter un livre
    function ajouterLivre(e) {

        e.preventDefault();

        if (titre.trim() === "" || auteur.trim() === "") {
            return;
        }

        const nouveauLivre = {
            id: Date.now(),
            titre: titre,
            auteur: auteur,
            estDisponible: true
        };

        setBooks([...books, nouveauLivre]);

        setTitre("");
        setAuteur("");
    }

    // 5. Affichage
    return (
        <div>

            <h1>Ma bibliothèque universitaire</h1>

            <h2>
                Livres disponibles : {
                    books.filter(livre => livre.estDisponible).length
                }
            </h2>

            <h2>Ajouter un livre</h2>

            <form onSubmit={ajouterLivre}>

                <input
                    type="text"
                    placeholder="Titre du livre"
                    value={titre}
                    onChange={(e) => setTitre(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Nom de l'auteur"
                    value={auteur}
                    onChange={(e) => setAuteur(e.target.value)}
                />

                <button type="submit">
                    Ajouter le livre
                </button>

            </form>

            <h2>Catalogue des livres</h2>

            <div>
                {books.map((livre) => (
                    <BookCard
                        key={livre.id}
                        titre={livre.titre}
                        auteur={livre.auteur}
                        estDisponible={livre.estDisponible}
                        onClickEmprunt={() => onClickEmprunt(livre.id)}
                    />
                ))}
            </div>

        </div>
    );
}

export default App;