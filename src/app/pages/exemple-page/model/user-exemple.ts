export interface UserExemple {
    type: string;
    nom: string;
    prenom: string;
    statut: string;
    niss: string;
    phone: string;
    email: string;
    adresse: string;
    ref: string;
    trajet: string;
    dossier: string;
    conjoint: UserExemple;
    technique: UserExemple;
}
