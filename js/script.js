
document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelectorAll('.item');
    const next = document.getElementById('next'); // Selecionando pelo ID
    const prev = document.getElementById('prev'); // Selecionando pelo ID

    console.log(list);
    console.log(next);
    console.log(prev);

    if (!list.length || !next || !prev) {
        console.error("Erro: Elementos não encontrados.");
        return;
    }

    let count = list.length;
    let active = 0;

    const updateActiveItem = () => {
        list.forEach((el, index) => {
            el.classList.toggle('active', index === active);
        });
    };

    next.addEventListener("click", () => {
        active = (active + 1) % count;
        updateActiveItem();
    });

    prev.addEventListener("click", () => {
        active = (active - 1 + count) % count;
        updateActiveItem();
    });

    updateActiveItem();
});


