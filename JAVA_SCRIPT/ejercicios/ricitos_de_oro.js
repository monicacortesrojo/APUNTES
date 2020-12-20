const enterConfirmation = confirm("Pregunta1");
if (enterConfirmation) {
    (const eleccionAvena = prompt(
            "Pregunta 2"
        )
    }





    const enterConfirmation = confirm("¿Entramos en la cabaña en primer lugar?");
    if (enterConfirmation) {
        const eleccionAvena = prompt(
            "¿Qué plato de avena comemos caliente, frio, templado ?"
        );
        if (eleccionAvena === "templado") {
            const eleccionSilla = prompt(
                "¿En qué silla nos sentamos demasiado grande, grande, normal?"
            );
            if (eleccionSilla === "normal") {
                const eleccionCama = prompt(
                    "¿En que cama dormimos: dura, blanda, normal?"
                );
                if (eleccionCama === "normal") {
                    alert("Has ganado");
                } else {
                    alert("Se acabo el juego");
                }
            } else {
                alert("Se acabo el juego");
            }
        } else {
            alert("Se acabo el juego");
        }
    } else {
        alert("Se acabo el juego");
    }