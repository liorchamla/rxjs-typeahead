const input = document.querySelector("input");
const resultats = document.querySelector(".resultats");

/**
 * Le résultat attendu via l'utilisation d'RxJS
 */

// const frappes$ = fromEvent(input, "input");

// frappes$
//   .pipe(
//     map((event) => event.target.value),
//     distinctUntilChanged(),
//     debounceTime(500),
//     switchMap((text) => ajax("https://geo.api.gouv.fr/communes?nom=" + text)),
//     map((resultats) => resultats.response)
//   )
//   .subscribe((communes) => {
//     let communesHtml = communes
//       .map((commune) => `<li>${commune.nom} (${commune.code})</li>`)
//       .join("");
//     resultats.innerHTML = `
//         <h2>Résultats : </h2>
//         <ul>
//             ${communesHtml}
//         </ul>
//     `;
//   });
