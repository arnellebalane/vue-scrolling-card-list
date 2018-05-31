const observers = new Map([
    [document, observerFactory()]
]);
const callbacks = new Map();

function observerFactory(root) {
    const config = {
        root,
        threshold: []
    };

    for (let i = 0; i <= 20; i++) {
        config.threshold.push(0.05 * i);
    }

    return new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (callbacks.has(entry.target)) {
                callbacks.get(entry.target)(entry);
            }
        });
    }, config);
}

export const intersectionRoot = {
    bind(el) {
        el.dataset.intersectionRoot = true;

        const observer = observerFactory(el);
        observers.set(el, observer);
    },

    unbind(el) {
        delete el.dataset.intersectionRoot;

        const observer = observers.get(el);
        observer.disconnect();
        observers.delete(el);
    }
};

export const intersect = {
    inserted(el, {value}) {
        const intersectionRoot = el.closest('[data-intersection-root]') || document;
        const observer = observers.get(intersectionRoot);

        callbacks.set(el, value);
        observer.observe(el);
    },

    unbind(el) {
        const intersectionRoot = el.closest('[data-intersection-root]') || document;
        const observer = observers.get(intersectionRoot);

        observer.unobserve(el);
    }
};
