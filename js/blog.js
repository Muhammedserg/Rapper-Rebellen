const container = document.getElementById("blogpost-container");

// Diese asynchrone Funktion wird verwendet, um Blog-Posts von der JSON-Datei zu laden .
async function fetchBlogPosts() {
    try {
        //Daten aus der Datei "dummy.json" mithilfe der fetch-Funktion zu laden.
        const response = await fetch("js/dummy.json");
        if (!response.ok) throw new Error("Fehler beim Laden der Blogpost-Daten");
        const blogposts = await response.json();

        blogposts.forEach(blogpost => {
            const blogpostmain = document.createElement("div");
            blogpostmain.classList.add("blogpost"); 

            // Ein <img>-Element wird erstellt, um das Bild des Blog-Posts anzuzeigen.
            const img = document.createElement("img");
            img.src = blogpost.img; 
            img.alt = blogpost.title; // Das "alt"-Attribut wird auf den Titel des Blog-Posts gesetzt.
            img.classList.add("image");

            // Ein <div>-Element wird erstellt, um den Textinhalt des Blog-Posts zu halten.
            const contentContainer = document.createElement("div");
            contentContainer.classList.add("text"); 

            // Ein <div>-Element wird erstellt, um den Titel des Blog-Posts anzuzeigen.
            const titleElement = document.createElement("div");
            titleElement.classList.add("blogpost-title"); 
            titleElement.textContent = blogpost.title; // Der Textinhalt des Titels wird festgelegt.

            // Ein weiteres <div>-Element wird erstellt, um den Text des Blog-Posts anzuzeigen.
            const textElement = document.createElement("div");
            textElement.classList.add("blogpost-text"); 
            textElement.textContent = blogpost.text.slice(0, 150);

            // Die erstellten HTML-Elemente werden hier in der richtigen Hierarchie zusammengefügt.
            contentContainer.appendChild(titleElement); 
            contentContainer.appendChild(textElement); 
            blogpostmain.appendChild(contentContainer);
            blogpostmain.appendChild(img); 

            container.appendChild(blogpostmain);
        });
    } catch (error) {
        // Wenn ein Fehler während des Lade- oder Erstellungsprozesses auftritt, wird er in der Konsole protokolliert.
        console.error(error);
    }
}

// Die Funktion "fetchBlogPosts" wird hier aufgerufen, um den Ladevorgang der Blog-Posts zu starten.
fetchBlogPosts();
