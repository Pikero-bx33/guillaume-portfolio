//Le page.tsx racine servira uniquement à rediriger vers la langue par défaut.

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/en");
}


/* 
page.tsx

↓

charge les données

↓

Hero

↓

affiche
*/

